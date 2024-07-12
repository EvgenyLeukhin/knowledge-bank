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

Запуск с конкретной переменной:

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

// можно сохранять в отдельную переменную
// const ENV = process.env;

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

---

### Naming

В `create-react-app` или `react-scripts` все кастомные env-переменные дожны иметь префикс `REACT_APP_` иначе они будут игнорироваться.


---

## HTTP-клиент на классе

```ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { SERVER_HOST } from '@configuration/config';

export default class HttpResponse {
  constructor(public data?: any, public error?: string) {}
}


export class HttpClient {
    private axios: AxiosInstance;

    constructor() {
        this.axios = axios.create({
            baseURL: SERVER_HOST,
            responseType: 'json',
            headers: {
                'content-type': 'application/json',
            },
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<HttpResponse> {
        return this.axios
            .get(url, config)
            .then((response: any) => {
                return new HttpResponse(response.data);
            })
            .catch((error: any) => {
                return new HttpResponse(undefined, error);
            });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse> {
        return this.axios
            .post(url, data, config)
            .then((response: any) => {
                return new HttpResponse(response.data);
            })
            .catch((error: any) => {
                return new HttpResponse(undefined, error);
            });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse> {
        return this.axios
            .put(url, data, config)
            .then((response: any) => {
                return new HttpResponse(response.data);
            })
            .catch((error: any) => {
                return new HttpResponse(undefined, error);
            });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<HttpResponse> {
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<HttpResponse> {
        return this.axios
            .patch(url, data, config)
            .then((response: any) => {
                return new HttpResponse(response.data);
            })
            .catch((error: any) => {
                return new HttpResponse(undefined, error);
            });
    }
}

const httpClient = new HttpClient();
export default httpClient;
```


---

## Пример HTTP Client

```js
const METHODS = {
		GET: 'GET',
		POST: 'POST',
		PUT: 'PUT',
		DELETE: 'DELETE',
};

// Самая простая версия. Реализовать штучку со всеми проверками им предстоит в конце спринта
// Необязательный метод
function queryStringify(data) {
  if (typeof data !== 'object') {
			throw new Error('Data must be object');
	}
  
	// Здесь достаточно и [object Object] для объекта
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

class HTTPTransport {
		get = (url, options = {}) => {
				 
				return this.request(url, {...options, method: METHODS.GET}, options.timeout);
		};

		post = (url, options = {}) => {
				return this.request(url, {...options, method: METHODS.POST}, options.timeout);
		};

		put = (url, options = {}) => {
				return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
		};

		delete = (url, options = {}) => { 
				return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
		};

		request = (url, options = {}, timeout = 5000) => {
				const {headers = {}, method, data} = options;

				return new Promise(function(resolve, reject) {
						if (!method) {
								reject('No method');
								return;
						}

				    const xhr = new XMLHttpRequest();
						const isGet = method === METHODS.GET;

				    xhr.open(
								method, 
								isGet && !!data
										? `${url}${queryStringify(data)}`
										: url,
						);

						Object.keys(headers).forEach(key => {
								xhr.setRequestHeader(key, headers[key]);
						});
				
				    xhr.onload = function() {
					      resolve(xhr);
				    };
				
				    xhr.onabort = reject;
				    xhr.onerror = reject;
				
				    xhr.timeout = timeout;
				    xhr.ontimeout = reject;
						
					  if (isGet || !data) {
						    xhr.send();
						} else {
								xhr.send(data);
						}
			  });
		};
}
```

***

## Счетчик попыток HTTP запросов

```js
function fetchWithRetry(url, options = {}) {
  const {tries = 1} = options;
 
    function onError(err){
        const triesLeft = tries - 1;
        if (!triesLeft){
            throw err;
        }
 
        return fetchWithRetry(url, {...options, tries: triesLeft});
    }
 
    return fetch(url, options).catch(onError);
}
```

Классический ```fetch``` позволяет делать HTTP-запросы к серверу. Однако часто бывает необходимо сделать повторный аналогичный запрос автоматически, если что-то пошло не так. Например, интернет «тупит» или сервер не смог с первого раза корректно обработать запрос.

```fetch с «ретраями``` » реализуется через классический метод ```fetch```. Его реализация была показана в одном из уроков ранее, здесь же расскажем про особенности реализации «повторных попыток». 

Основными тонкостями здесь являются рекурсия и сигнатура промисов. 

Функция принимает:

- ```url``` — конечный пользовательский адрес сервера;
- ```options``` — объект с параметрами запроса (метод запроса, заголовки и другие нужные вам параметры). Кроме них, будем передавать дополнительный — количество оставшихся попыток на запрос.

Система с перезапросами работает следующим образом. Нужно сделать запрос на сервер ```https://api.com/user```. Сделаем его через ```fetch```:

```js
function fetchWithRetry(url, options = {}) {
    return fetch(url, options);
}

fetchWithRetry('https://api.com/user', {method: 'GET'});
```

Запрос выполнился неуспешно. В данном случае «не успехом» будем считать только исключения при выполнении. То есть 400-й или 500-й HTTP-запрос «не успехом» не считается, поскольку любой ответ сервера — это уже успех с точки зрения клиент-серверного взаимодействия. Допустим, задали всего три попытки на запрос. В таком случае, есть возможность ещё два раза перезапросить ответ.

Давайте реализуем такое поведение. Для этого нужно написать обработчик на ```catch```, который перезапустит этот же запрос, но при этом уменьшит количество оставшихся попыток:

```js
function onError(err){
    // Возьмём из замыкания
    const triesLeft = tries - 1;

    if (!triesLeft){
        throw err;
    }

    return fetchWithRetry(url, {...options, tries: triesLeft});
}
```

Функция ```onError``` уменьшает количество оставшихся попыток и делает заново точно такой же HTTP-запрос:

```js
function fetchWithRetry(url, options = {}) {
  const {tries = 1} = options;

    function onError(err){
        const triesLeft = tries - 1;
        if (!triesLeft){
            throw err;
        }

        return fetchWithRetry(url, {...options, tries: triesLeft});
    }

    return fetch(url, options).catch(onError);
} 
```

Недостающие элементы пазла добавлены. Во-первых, в замыкание ```onError``` было добавлено количество попыток, то есть ```tries```. Во-вторых, теперь на упавший запрос будет вызван обработчик ошибки. 

Таким образом, функция делает HTTP-запросы. В случае успеха (то есть вернулся успешный ответ от сервера в допустимое количество попыток), возвращается ровно тот же ответ, что и у обычного ```fetсh```. Если же  произошла ошибка (как уже ранее выяснили, исключения) возвращается точно также ответ, аналогичный ответу ```fetch```. 

То есть мы реализовали функцию, которая имеет сигнатуру ```fetch```, написанного в одном из уроков, и обладает точно таким же поведением с одним НО: можно указать количество попыток. При количестве попыток равному единице, данная функция будет вести себя точно так же, как и обычный ```fetch```.
