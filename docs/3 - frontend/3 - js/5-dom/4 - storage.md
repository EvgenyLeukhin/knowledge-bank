---
title: Хранилище
sidebar_position: 4
---

## Хранилище

`localStorage` и `sessionStorage` хранят строки в браузере для одного сайта. На сервер они сами не уходят. Объект перед записью превращают в JSON, после чтения разбирают обратно.

[Window.localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

```js
const user = { name: 'Ann' };

localStorage.setItem('user', JSON.stringify(user));

const saved = localStorage.getItem('user');
const data = saved ? JSON.parse(saved) : null;

localStorage.removeItem('user');
localStorage.clear();
```

`localStorage` остаётся после закрытия вкладки. `sessionStorage` живёт только в этой вкладке: у соседней вкладки своя копия, и она пропадает вместе с вкладкой.

```js
sessionStorage.setItem('draft', 'текст');
sessionStorage.getItem('draft');
```

Если хранилище недоступно или переполнено, `setItem` бросает ошибку. Запись оборачивают в `try/catch`.

```js
try {
  localStorage.setItem('user', JSON.stringify(user));
} catch (error) {
  console.log(error);
}
```

### Cookie

Cookie тоже хранит строку, но браузер отправляет её на сервер с запросами к этому сайту. Размер небольшой, обычно до 4 КБ. Срок задают в `expires` или `max-age`. `path=/` делает cookie доступной для всего сайта.

[Document.cookie](https://developer.mozilla.org/docs/Web/API/Document/cookie)

```js
document.cookie = 'theme=dark; max-age=31536000; path=/';

document.cookie;
```

`document.cookie` возвращает все доступные скрипту cookie одной строкой. Cookie с флагом `HttpOnly` из скрипта не прочитать, изменить или удалить. Запись через `document.cookie` сделать cookie `HttpOnly` не может: флаг выставляет только сервер.

В Chrome эта cookie видна в **DevTools → Application → Cookies**. Нужно выбрать адрес сайта: в колонке **Value** лежит сама строка токена, в колонке **HttpOnly** стоит галочка. Это видит тот, у кого открыт браузер. В **Network** она тоже есть: в ответе логина в заголовке `Set-Cookie` и в следующих запросах в заголовке `Cookie`.

### Токен

Сервер отправляет cookie с токеном в заголовке `Set-Cookie` и ставит флаг `HttpOnly`. Браузер сохраняет её у себя. Скрипт страницы эту cookie не видит и сам в запросы не подставляет. На каждый следующий запрос к этому сайту браузер добавляет заголовок `Cookie` автоматически: для ссылки, формы, `fetch` и axios дополнительный код не нужен.

[Set-Cookie](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Set-Cookie)

```http
HTTP/1.1 200 OK
Set-Cookie: token=abc123; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=86400
```

`Secure` отправляет cookie только по HTTPS. `SameSite=Lax` не прикладывает её к запросам с чужого сайта. `Max-Age` задаёт срок в секундах. Без срока cookie пропадёт при закрытии браузера. У `fetch` на свой сайт автоматическую отправку включает режим по умолчанию `credentials: 'same-origin'`.

На другой домен cookie сама не уйдёт. В `fetch` для этого ставят `credentials: 'include'`, в axios — `withCredentials: true`. Сервер должен ответить `Access-Control-Allow-Credentials: true` и конкретным адресом в `Access-Control-Allow-Origin`.

### Когда что использовать

`localStorage` хранит то, что нужно только странице в браузере. Сервер само это значение не получит. Туда кладут тему, черновик, последний фильтр, кэш списка.

```js
localStorage.setItem('theme', 'dark');
```

Cookie берут, когда значение должно приехать на сервер вместе с запросом. Браузер сам добавит его в заголовок `Cookie`, если совпали домен, путь, срок, `Secure` и `SameSite`. Так передают идентификатор сессии, язык для первой отрисовки HTML и согласие, которое читает сервер.

[HTTP-куки](https://developer.mozilla.org/docs/Web/HTTP/Guides/Cookies)

Токен входа кладут в cookie с `HttpOnly`: скрипт страницы его не прочитает, а браузер отправит его сам. В `localStorage` тот же токен доступен любому скрипту на странице.

Данные, которые должны исчезнуть вместе с вкладкой, кладут в `sessionStorage`. Для этого ни cookie, ни `localStorage` не нужны.
