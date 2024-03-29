---
title: api-services
sidebar_position: 6
---

- [Идентификация, аутентификация, авторизация — в чем разница?](https://it-uroki.ru/uroki/bezopasnost/identifikaciya-autentifikaciya-avtorizaciya.html)
- [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)

---

## Варианты работы с запросами

1. Получение данных (GET)
2. Отправка данных (POST)
3. Обновление данных (PUT, PATCH)
4. Удаление данных (DELETE)

---

### Базовый сценарий работы с данными

**1. Запрос на получение данных** - асинхронный гет-запрос внутри useEffect() при загрузке компонета или по эвенту
    - GET-запрос
    - индикация запроса (лоадер)
    - обработка ошибок
    - query-параметры для фильтрации
    - сортировка
**2. Визуализация полученных данных или списка данных** - сохранение полученных данных через функцию setState() внутри локального стейта компонета. Также возможна конвертация полученных данных для подставление в ui-компоненты.
    - json
    - полученные данные нужно "раскидать" по ui-элементам
    - списки данных для отображения часто сохраняют в store
    - данные отдельной сущности (по id) обычно сохраняют в локальный стейт компонента (для возможности редактирования)
**3. Изменение данных** - изменение локального стейта компонета через функции-обработчики, которая изменяет данные в локальном стейте
    - изменение данных в стейте компонента
    - методы onChange изменяют локальный стейт
    - валидация на фронте
**4. Отправка измененных данных** - подстановка измененных данных их локального стейта в тело пост-запроса
    - PUT, PATCH запросы
    - данные из локального стейта нужно сложить в запрос
    - валидация на бэке
    - индикация запроса (лоадер)
**5. Получение новых данных** - при успешной отправке измененных данных получаем новые данные в гет-запросе с сервера
    - после успешной отправки запроса после редактирования отдельного элемента показываем новый список с учетом измененного элемента


---

## Пример сервиса-объекта с асинхронными методами

```ts
interface IServerError {
  errorId: string;
  errorMessage: string;
  httpStatusCode: number;
  status: string;
}

// типизация успешного результата - для каждого запроса будет отдельный интерфейс
interface IServerResult {
  data?: any;
  success: boolean;
  error?: IServerError;
}

const mapService = {
  async getRegionDrugstores(regionId: number): Promise<IServerResult> {
    try {
      const { data, status } = await httpClient.get(`
        drugstores?filter=region_id|in|${regionId}&includeSchedules=true
    `);

      return {
        data,
        success: status === 200,
      };
    } catch (e) {
      return {
        success: false,
        error: e as IServerError,
      };
    }
  },

  async getRegionZones(regionId: number): Promise<IServerResult> {
    try {
      const { data, status } = await httpClient.get(`dictionaries/zone/${regionId}`);

      return {
        data,
        success: status === 200,
      };
    } catch (e) {
      return {
        success: false,
        error: e as IServerError,
      };
    }
  },

  async getRegionExternalDrugstores(regionId: number): Promise<IServerResult> {
    try {
      const { data, status } = await httpClient.get(`
        external_drugstores?regionId=${regionId}
      `);

      return {
        data,
        success: status === 200,
      };
    } catch (e) {
      return {
        success: false,
        error: e as IServerError,
      };
    }
  },

  async loadExternalDrugstoresData(regionId: number): Promise<IServerResult> {
    try {
      const { data, status } = await httpClient.post(`
        external_drugstores/fill_by_regions?regionId=${regionId}
      `);

      return {
        data,
        success: status === 200,
      };
    } catch (e) {
      return {
        success: false,
        error: e as IServerError,
      };
    }
  },

  async updateExternalDrugstoreStatus(
    externalDrugstoreId: string, externalDrugstoreStatus: ExternalDrugstoreStatus
  ): Promise<IServerResult> {
    try {
      const { data, status } = await httpClient.put(`
        external_drugstores/set_status?externalId=${externalDrugstoreId}&status=${externalDrugstoreStatus}
      `);

      return {
        data,
        success: status === 200,
      };
    } catch (e) {
      return {
        success: false,
        error: e as IServerError,
      };
    }
  },

  async linkDrugstores(drugstoreId: number, externalDrugstoreId: string): Promise<IServerResult> {
    try {
      const { status } = await httpClient.post(`
        external_drugstores/link/drugstore?drugstore_id=${drugstoreId}&external_drugstore_id=${externalDrugstoreId}
      `);

      return {
        success: status === 200,
      };
    } catch (e) {
      return {
        success: false,
        error: e as IServerError,
      };
    }
  },

  async unlinkDrugstore(drugstoreId: number): Promise<IServerResult> {
    try {
      const { status } = await httpClient.post(`
        xternal_drugstores/unlink/drugstore?drugstore_id=${drugstoreId}
      `);

      return {
        success: status === 200,
      };
    } catch (e) {
      return {
        success: false,
        error: e as IServerError,
      };
    }
  },

  // посыл строки адреса в 2gis
  async get2gisSuggest(query: string): Promise<IServerResult> {
    try {
      const { data, status } = await httpClient.get(`
        external/2gis/3.0/suggest?q=${query}
      `);

      return {
        data,
        success: status === 200,
      };
    } catch (e) {
      return {
        success: false,
        error: e as IServerError,
      };
    }
  },

  // добавление комментария для собственных и партнерских аптек
  async addDrugstoreStatusComment(id: number, statusComment: string): Promise<IServerResult> {
    try {
      const { data, status } = await httpClient.request({
        url: 'drugstores/status_comment',
        method: 'post',
        data: {
          drugstore_id: Number(id),
          status_comment: statusComment,
        },
      });

      return {
        data,
        success: status === 200 || status === 204,
      };
    } catch (e) {
      return {
        success: false,
        error: e as IServerError,
      };
    }
  },

  // добавление комментария для неподключенных аптек
  async addExternalDrugstoreStatusComment(id: string, statusComment: string): Promise<IServerResult> {
    try {
      const { data, status } = await httpClient.request({
        url: 'external_drugstores/status_comment',
        method: 'post',
        data: {
          external_id: id,
          status_comment: statusComment,
        },
      });

      return {
        data,
        success: status === 200 || status === 204,
      };
    } catch (e) {
      return {
        success: false,
        error: e as IServerError,
      };
    }
  },
};

export default mapService;
```

---

## Пример применения с redux-thunk

```ts
import { Dispatch } from '@reduxjs/toolkit';
import { IDrugstore, IDrugstoreOnMap } from 'interfaces';

// getRegionDrugstores - получение списка собственных аптек по региону
export const getRegionDrugstores =
  (regionId: number) => async (dispatch: Dispatch) => {
    dispatch(setError({ drugstores: '' }));
    dispatch(setLoading({ drugstores: true }));

    // дергаем запрос
    const { data, success, error } =
      await mapService.getRegionDrugstores(regionId);

    // обработка успешного ответа
    if (data && success) {
      dispatch(setLoading({ drugstores: false }));

      // no drugstores found
      if (!data.drugstores.length) {
        dispatch(setError({ drugstores: 'Аптек не найдено' }));
      }

      const extendedData = data.drugstores.map((drugstore: IDrugstore) => {
        const isCoordinates =
          drugstore.id && drugstore.point.lat && drugstore.point.lng;

        // оставляем только аптеки с заполненными координатами
        if (isCoordinates) {
          return {
            id: drugstore.id,
            uuid: drugstore.uuid,
            name: drugstore.name,
            address: drugstore.address,
            point: drugstore.point,
            type: drugstore.type,
            tel: drugstore.tel,
            email: drugstore.email,
            externalDrugstore: drugstore.externalDrugstore,
            status: drugstore.status,
            drugstoreType: drugstore.drugstoreType,
            isLocatedAtVSP: drugstore.isLocatedAtVSP,
            startDate: drugstore.startDate,
            statusComment: drugstore.statusComment,
            schedule: drugstore.schedule,
            zoneUuid: drugstore.zoneUuid,
          };
        }
      });

      // pass drugstores data
      dispatch(setDrugstores(extendedData as IDrugstoreOnMap[]));

    // обработка неуспешного ответа
    } else {
      dispatch(setLoading({ drugstores: false }));
      dispatch(setError({ drugstores: `Ошибка загрузки аптек: ${error}` }));
      dispatch(setDrugstores([]));
    }
};

// getRegionExternalDrugstores - получение списка аптек из 2гис по региону
export const getRegionExternalDrugstores =
  (regionId: number) => async (dispatch: Dispatch) => {
    dispatch(setError({ externalDrugstores: '' }));
    dispatch(setLoading({ externalDrugstores: true }));

    // дергаем запрос
    const { data, success, error } =
      await mapService.getRegionExternalDrugstores(regionId);

    // обработка успешного ответа
    if (data && success) {
      dispatch(setLoading({ externalDrugstores: false }));

      // no drugstores found
      if (!data.length) {
        dispatch(setError({ externalDrugstores: 'Аптек 2ГИС не найдено' }));
      }

      const extendedData = data.map(externalDrugstore => {
        return {
          ...externalDrugstore,
          // id: generateUniqueID(), // TODO: проверить нужно ли сейчас генерить id (может как вариант использовать externalId или uuid)
          id: externalDrugstore.externalId,
          type: DrugstoreType.EXTERNAL,
          status: DrugstoreStatus.WORK,
        };
      });

      // pass external drugstores data
      dispatch(setExternalDrugstores(extendedData));

    // обработка неуспешного ответа
    } else {
      dispatch(setLoading({ externalDrugstores: false }));
      dispatch(
        setError({
          externalDrugstores: `Ошибка загрузки 2ГИС аптек: ${error}`,
        }),
      );
      dispatch(setExternalDrugstores([]));
    }
};
```

---

### try-catch вне асинхронных функций

```ts
function isErrorInAvailability(): boolean {
    let hasError = false;

    try {
        slaInWork.intervals[index].values.forEach((value) => {
            if (hasError) return hasError;

            hasError = isErrorAvailability(value);
        });
    } catch (e) {
        return true;
    }

    return hasError;
}
```
