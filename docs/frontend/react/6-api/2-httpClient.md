---
title: http-клиент
sidebar_position: 2
---

## На основе axios.create

Можно создать свой httpClient на основе axios, в котором можно разместить все общие параметры и подключить перехватчики.

```ts
import axios from 'axios';
import { API_URL } from 'apiUrl';

const httpClient = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});

// https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests
httpClient.interceptors.request.use(
  config => {
    // Do something before request is sent
    // console.log('interceptors request config', config);

    // обращаемся к user-token (он может быть в ls, cookies, store)
    const token = 'inject your user token'; // testStore.getState().app.userData.token;

    // будет подставляться user-token ко всем запросам в headers, если он есть
    config.headers.Authorization = token || '';

    return config;
  },
  error => {
    console.log('interceptors request error', error);

    dispatch(
      setAlertMessageThunk({ message: `${error}`, type: 'error' }) as never,
    );

    // Do something with request error
    return Promise.reject(error);
  },
);

// Некоторые полезные методы для перехватчиков
// Автоподстановка токена
const getAuthorizationHeaderSetterInterceptor = (
    getToken: () => string
) => (config: AxiosRequestConfig) => {
    const accessToken = getToken();
    if (accessToken && !isAuthRequest(config.url)) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
};

// Обработка неуспешной авторизации
const getTokenInvalidInterceptor = (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.data.message === 'Invalid JWT Token') {
        store.dispatch(logoutAction());
        if (window.location.pathname.length < 1) {
            window.location.href = '/';
        }
    }
    return Promise.reject(error);
}

// Проверка соединения
const getConnectionErrorInterceptor = (error: AxiosError) => {
    const connectionError = fetch('https://www.yandex.ru/', {
        mode: 'no-cors',
    }).catch(() => {
        store.dispatch(setMessageAction(messageHandler('Отсутствует соединение с интернетом!')))
    })
    return Promise.reject(error);
}
```

### Применение

```tsx
    loadOrders: async (query: string): Promise<{ success: boolean, data?: IAdministrationOrder[] }> => {
        try {
            const { status, data: { orders } } = await httpClient.get(`${url}/orders${query}`);

            return {
                success: status === 200,
                data: orders || []
            }
        } catch (e) {
            return {
                success: false
            }
        }
    },

    reExport: async (routeIds: number[]): Promise<boolean> => {
        try {
            const { status } = await httpClient.post(`${url}/routes/export`, {
                routeIds
            });

            return status === 200;
        } catch (e) {
            return false;
        }
    },

    removeOrder: async (orderId: number, routeId: number): Promise<boolean> => {
        try {
            const { status } = await httpClient.delete(`${url}/routes/orders?routeId=${routeId}`, {
                data: { orderIds: [orderId] }
            });

            return status === 200;
        } catch (e) {
            return false;
        }
    },
```

---

## На основе класса и axios

```ts
export class HttpClient {
    private authStore: AuthStore;

    private axios: AxiosInstance;

    private tokenExpiryListeners: { (): void }[] = [];

    constructor() {
        this.tokenExpiryListeners = [];

        this.axios = axios.create({
            baseURL: APP_URL,
            responseType: 'json',
            headers: {
                'content-type': 'application/json',
            },
        });

        this.axios.interceptors.request.use(config => {
            if (this.authStore.token) {
                config.headers.Authorization = `Bearer ${this.authStore.token}`;
            }
            config.withCredentials = true;
            return config;
        });

        this.axios.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                // Обработка Unauthorized error
                if (error.response && error.response.status === 401) {
                    this.tokenExpiryListeners.forEach(function (l) {
                        l();
                    });
                }

                return Promise.reject(error.response);
            },
        );

        this.onTokenExpiry(() => this.authStore.logout());
    }

    setAppStore(authStore: AuthStore) {
        this.authStore = authStore;
    }

    get(url: string, config?: AxiosRequestConfig): Promise<HttpResponse> {
        return this.axios
            .get(url, config)
            .then((response: any) => {
                return new HttpResponse(response.data, undefined, response.headers);
            })
            .catch((error: any) => {
                return new HttpResponse(undefined, error);
            });
    }

    delete(url: string, config?: AxiosRequestConfig): Promise<HttpResponse> {
        return this.axios
            .delete(url, config)
            .then((response: any) => {
                return new HttpResponse(response.data);
            })
            .catch((error: any) => {
                return new HttpResponse(undefined, error);
            });
    }

    head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.head(url, config);
    }

    options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.options(url, config);
    }

    graphQuery<T = any>(query: GraphqlQuery): Promise<GraphQLResponse<T>> {
        return this.axios
            .post('/graphql', query.build())
            .then(response => {
                let queryData: T | undefined;
                if (response.data?.data) {
                    const keys = Object.keys(response.data?.data);
                    if (keys.length > 0) {
                        queryData = response.data?.data[keys[0]];
                    }
                }

                let errors;
                if (response.data?.errors) {
                    errors = response.data.errors;
                }

                let extensions;
                if (response.data?.extensions) {
                    extensions = response.data.extensions;
                }
                return new GraphQLResponse<T>(queryData, errors, extensions);
            })
            .catch(error => {
                // http errors
                // eslint-disable-next-line no-console
                console.error('Ошибка при выполнении GraphQL запроса', error);
                return new GraphQLResponse<T>(undefined, error);
            });
    }

    post(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse> {
        return this.axios
            .post(url, data, config)
            .then((response: any) => {
                return new HttpResponse(response.data, undefined, response.headers);
            })
            .catch((error: any) => {
                return new HttpResponse(undefined, error);
            });
    }

    put(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse> {
        return this.axios
            .put(url, data, config)
            .then((response: any) => {
                return new HttpResponse(response.data);
            })
            .catch((error: any) => {
                return new HttpResponse(undefined, error);
            });
    }

    patch(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse> {
        return this.axios
            .patch(url, data, config)
            .then((response: any) => {
                return new HttpResponse(response.data);
            })
            .catch((error: any) => {
                return new HttpResponse(undefined, error);
            });
    }

    onTokenExpiry(c: any) {
        this.tokenExpiryListeners.push(c);
    }
}

const httpClient = new HttpClient();

export default httpClient;
```

### Применение

```tsx
    generateReport: (parameters: GenerateReportParams): Promise<HttpResponse> => {
        return httpClient.post('/api/v1/service/reports/generate', parameters);
    },

    fetchReport: (request: FetchReportParams): Promise<HttpResponse> => {
        return httpClient.post('/api/v1/reporting/fetchReport', request.reportParameters, {
            params: { reportName: request.reportName },
        });
    },

    buildReport: (request: BuildReportParams): Promise<HttpResponse> => {
        return httpClient.post('/api/v1/reporting/buildReport', request.reportData, {
            params: { reportName: request.reportName },
        });
    },
```

---

## API_URL & env

```yarn add cross-env```

### .env.development

```s
# NEXT_PUBLIC_URL=some-url.development.com
NEXT_PUBLIC_URL=https://stage1.producthired.com/api/api
```

### .env.production

```s
# NEXT_PUBLIC_URL=some-url.production.com
NEXT_PUBLIC_URL=https://proe.producthired.com/api/api
```

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development env-cmd -f ./api/.env.development next dev",
  "dev:8888": "cross-env NODE_ENV=development env-cmd -f ./api/.env.development next dev -p 8888",
  "build": "cross-env NODE_ENV=production env-cmd -f ./api/.env.development next build",
}
```

### apiUrl

```ts
export enum EnvList {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

const { DEVELOPMENT, PRODUCTION } = EnvList;

export const API_URL = process.env.NEXT_PUBLIC_URL;

export const returnEnv = (): EnvList => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return DEVELOPMENT;
    case 'production':
      return PRODUCTION;
    default:
      return DEVELOPMENT;
  }
};

export const isDev = returnEnv() === DEVELOPMENT;
export const isProd = returnEnv() === PRODUCTION;
```
