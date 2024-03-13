---
title: XMLHttpReqest и fetch от Я
sidebar_position: 8
---

- [XMLHttpRequest - MDN](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest)
- [XMLHttpRequest - learn.javascript](https://learn.javascript.ru/xmlhttprequest)
- [Axios repo](https://github.com/axios/axios)
- [Сравнение fetch и axios](https://habr.com/ru/companies/ruvds/articles/477286/)


## XMLHttpRequest

Объект XMLHttpRequest, или кратко — XHR, позволяет отправлять HTTP-запросы к серверу из JavaScript без перезагрузки страницы. Он работает с любыми данными, хотя слово “XML” (Extensible Markup Language, то есть «расширяемый язык разметки») вначале может смутить. Оно осталось в названии по историческим причинам и из-за сохранения обратной совместимости.
Отправим запрос:

```js
const xhr = new XMLHttpRequest();

// Конфигурируем запрос
xhr.open('GET', 'https://url/');

// Отсылаем запрос
xhr.send();

// Если код ответа сервера не 200, обработаем как ошибку
if (xhr.status === 200) {
    console.log(xhr.responseText); // responseText — текст ответа
} else {
  // Выведём результат
  console.log(`Ответ от сервера: ${xhr.status} | ${xhr.statusText}`);
} 
```
Конфигурировать XHR можно любым нужным для вас способом. Например, хотим отправить POST-запрос с различными заголовками и тело в виде JSON:

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', '/create');
 
// Выставляем заголовок
xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

xhr.send(JSON.stringify({data: 42})); 
```

В теле запроса можно отправить даже файлы:

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', '/avatar');
 
const fileInput = document.querySelector('input[type=file]');
const file = fileInput.files[0].file;
const formdata = new FormData();
formdata.append('file', file);
xhr.send(formdata); 
```

У XHR есть два режима работы: синхронный и асинхронный. В асинхронном режиме необходимо подписываться на события:

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', '/chats');
 
xhr.onreadystatechange = function() {
  if (xhr.readyState === 3) {
    // загрузка
  }
  if (xhr.readyState === 4) {
    // запрос завершён
  }
}

xhr.timeout = 5000; // 5 секунд (в миллисекундах)
xhr.send(); 
```

Значения readyState могут быть такими:

```js
UNSENT = 0; // начальное состояние
OPENED = 1; // вызван open
HEADERS_RECEIVED = 2; // получены заголовки
LOADING = 3; // загружается тело
DONE = 4; // запрос завершён 
```

Какие ещё события могут понадобиться:

- ```loadstart``` — запрос начат;
- ```progress``` — браузер получил очередной пакет данных;
- ```abort``` — запрос был отменён вызовом xhr.abort();
- ```error``` — произошла ошибка;
- ```load``` — запрос был успешно (без ошибок) завершён;
- ```loadend``` — запрос был прекращён по таймауту;
- ```readystatechange``` — запрос был завершён (успешно или неуспешно).

Чтобы сказать браузеру подцепить cookie во время запроса, достаточно выставить специальное свойство withCredentials в значение true:

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', '/request');
 
xhr.withCredentials = true;
 
xhr.send(); 
```

XHR даёт возможность отменять запросы. Например, если передумали, прошло много времени, или пользователь ушёл со страницы и запрос больше не нужен. Это можно сделать с помощью метода abort:

```js
xhr.abort();
```

---

## Fetch

Метод fetch — это `XMLHttpRequest` нового поколения. Он предоставляет улучшенный интерфейс для осуществления запросов к серверу: как по части возможностей и контроля над происходящим, так и по синтаксису, поскольку он построен на промисах.

### Синтаксис метода:

`const fetchPromise = fetch(url, [options]);`

Второй аргумент `(options)` задаёт все свойства запроса — от метода до режима кеширования:
- `method` — метод запроса;
- `headers` — заголовки запроса (объект);
- `body` — тело запроса: FormData, Blob, строка и т. д.;
- `mode` — одно из: same-origin, no-cors, cors, указывает, в каком режиме кросс-доменности предполагается делать запрос;
- `credentials` — одно из: omit, same-origin, include, указывает, пересылать ли cookies и заголовки авторизации вместе с запросом;
- `cache` — одно из: default, no-store, reload, no-cache, force-cache, only-if-cached, указывает, как кешировать запрос.
- `signal` свойство, в которое можно передать AbortController и с его помощью прервать запрос.

Отправим более сложный запрос. Например, на создание чата:

```js
fetch('/api/v1/chats', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Мой чат',
    }),
});
```

А вот как прервать этот запрос:

```js
// Создаём экземпляр AbortController, который будет отвечать за прерывание запроса
const abortController = new AbortController();
const signal = abortController.signal;

fetch('/api/v1/chats', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Мой чат',
    }),
    // Указываем fetch, что signal может его прервать
    signal
});

// Прерываем
abortController(); 
```

Также на данном этапе возникнет проблема при работе с cookies. Мы никак не указали, что, если при запросе есть cookies, браузеру необходимо их подставить. Это можно сделать с помощью свойств mode и credentials:

```js
fetch('/api/v1/chats', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({
      title: 'Мой чат',
    }),
}); 
```

### Реализация fetch

XHR очень мощный инструмент, но использовать только его, без обёрток, довольно сложно. Получится много копипаста, однотипных «ифов» и других  проверок. Потому вам предстоит написать свою реализацию и воссоздать весь необходимый функционал. 

Для начала напишем функцию, отправляющую просто запрос с помощью XHR:

```js
function request(url: string, method: string): void {
    const xhr = new XMLHttpRequest();
      xhr.open(method, url);
    
    xhr.onload = function() {
      console.log(xhr);
    };
    
    const handleError = err => {
      console.log(err);
    };

    xhr.onabort = handleError;
    xhr.onerror = handleError;
    xhr.ontimeout = handleError;
    
    xhr.send();
} 
```

Теперь можно отправлять запросы вида request('url', 'GET') без постоянного копирования кода с XMLHttpRequest. Модифицируем функцию, чтобы она принимала более сложную конфигурацию:

```js
type Options = {
    method: string;
    data?: any;
};
// Важно, чтобы у options было значение по умолчанию.
// Иначе, если не передать options, всё упадет с ошибками.
// А так как это поле обязательное — укажем его
function request(url: string, options: Options = { method: 'GET' }): void {
    const {method, data} = options;

    const xhr = new XMLHttpRequest();
    
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    
    xhr.onload = function() {
      console.log(xhr);
    };
    
    const handleError = err => {
      console.log(err);
    };

    xhr.onabort = handleError;
    xhr.onerror = handleError;
    xhr.ontimeout = handleError;
    
    if (method === 'GET' || !data) {
        xhr.send();
    } else {
        xhr.send(JSON.stringify(data));
    }
} 
```

Обратите внимание на строку с `GET`. Неудобно каждый раз проверять руками метод на равенство строке. А если поменяется запись с GET на get, придётся руками переписывать половину проекта. Небезопасно и неправильно. Чтобы избежать этого, применим enum:

```ts
enum METHOD {
    GET = 'GET',
    POST =  'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
};

type Options = {
    method: METHOD;
    data?: any;
};

function request(url: string, options: Options = { method: METHOD.GET }): void {
    const {method, data} = options;

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    
    xhr.onload = function() {
      console.log(xhr);
    };
    
    const handleError = err => {
      console.error(err);
    };

    xhr.onabort = handleError;
    xhr.onerror = handleError;
    xhr.ontimeout = handleError;
    
    if (method === METHOD.GET || !data) {
        xhr.send();
    } else {
        xhr.send(JSON.stringify(data));
    }
} 
```

Отлично! Запросы уходят, но ответ пока попадает в консоль и не несёт никакой пользы. Применим промисификацию:

```ts
enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
};

type Options = {
    method: METHOD;
    data?: any;
};

function request<TResponse>(url: string, options: Options = { method: METHOD.GET }): Promise<TResponse> {
    const {method, data} = options;

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        
        xhr.onload = function() {
          resolve(xhr);
        };

        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.ontimeout = reject;
        
        if (method === METHOD.GET || !data) {
            xhr.send();
        } else {
            xhr.send(data);
        }
    });
} 
```

Теперь можно работать с возвращаемым промисом (а если подложить в дженерик тип — возвращаемое значение будет типизировано):

```ts

request<{ id: string }>('https://chats', {
    method: METHOD.POST,
    data: JSON.stringify({
      title: 'Мой чат',
    }),
}).then(({ id }) => {
    // Здесь id имеет тип string
}); 
```

Неудобно каждый раз описывать свойства запроса. Логика работы с XHR инкапсулирована, но копирование объектов конфигурации пока осталось. Хочется не писать лишних символов, а явно указывать — «сделай POST-запрос на вот этот урл, с вот такими данными»:

```ts
HTTP.post('https://chats', { title: 'Мой чат' }); 
```

Реализуем класс для работы с запросами:

```ts
enum METHOD {
        GET = 'GET',
        POST = 'POST',
        PUT = 'PUT',
        PATCH = 'PATCH',
        DELETE = 'DELETE'
};

type Options = {
    method: METHOD;
    data?: any;
};

// Тип Omit принимает два аргумента: первый — тип, второй — строка
// и удаляет из первого типа ключ, переданный вторым аргументом
type OptionsWithoutMethod = Omit<Options, 'method'>;
// Этот тип эквивалентен следующему:
// type OptionsWithoutMethod = { data?: any };

class HTTPTransport {
  get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(url, {...options, method: METHOD.GET});
  };

  request(url: string, options: Options = { method: METHOD.GET }): Promise<XMLHttpRequest> {
    const {method, data} = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      
      xhr.onload = function() {
        resolve(xhr);
      };
  
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      
      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
} 
```

Теперь можно отправлять запросы вот так:

```ts
new HTTPTransport().get('https://chats'); 
```


## Axios

Axios — модифицированный и более сложный аналог Fetch API. Кто-то предпочитает метод `fetch`, кто-то axios. Некоторые заново пишут обёртки над XHR, чтобы не тащить библиотеку. 
Интересное сравнение fetch и axios.
В проекте нельзя будет использовать ни Fetch API, ни axios. Вы сами реализуете в тренажёре аналог `fetch` используя `XMLHttpRequest` и будете использовать свою реализацию.

---
---
---

