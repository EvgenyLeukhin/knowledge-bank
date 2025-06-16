---
title: headers, сodes, methods
sidebar_position: 4
---

- [Методы HTTP запроса](https://developer.mozilla.org/ru/docs/Web/HTTP/Methods)
- [Коды ответа HTTP](https://developer.mozilla.org/ru/docs/Web/HTTP/Status)
- [Методы HTTP запроса](https://developer.mozilla.org/ru/docs/Web/HTTP/Methods)

---

## Headers

```js
headers: {
  'Content-type': 'application/json; charset=UTF-8',
  'Accept-Charset, Accept-Encoding': '...',
  'Access-Control-Request-Headers': '...',
  'Access-Control-Request-Method': '...',
  'Connection': '...',
  'Content-Length': '...',
  'Cookie, Cookie2': '...',
  'Date': '...',
  'DNT': '...',
  'Expect': '...',
  'Host': '...',
  'Keep-Alive': '...',
  'Origin': '...',
  'Referer': '...',
  'TE': '...',
  'Trailer': '...',
  'Transfer-Encoding': '...',
  'Upgrade': '...',
  'Via': '...',
  'Proxy-*': '...',
  'Sec-*': '...',
},

// Авторизация
headers = {
  "Authorization": "Bearer {token}",
  "Content-Type": "application/json",
  "Accept-Language": "en-US"
}
```

---

## Codes

<ol>
  <li><a href="#">Информационные ответы</a> (<code>100</code> – <code>199</code>)</li>
  <li><a href="#">Успешные ответы</a> (<code>200</code> – <code>299</code>)</li>
  <li><a href="#">Сообщения о перенаправлении</a> (<code>300</code> – <code>399</code>)</li>
  <li><a href="#">Ошибки клиента</a> (<code>400</code> – <code>499</code>)</li>
  <li><a href="#">Ошибки сервера</a> (<code>500</code> – <code>599</code>)</li>
</ol>

---

<ul><li><a href="#">1xx: Informational</a> (информационные):
<ul><li><a href="#">100 Continue</a> («продолжайте»);</li>
<li><a href="#">101 Switching Protocols</a> («переключение протоколов»);</li>
<li><a href="#">102 Processing</a> («идёт обработка»);</li>
<li><a  href="#">103 Early Hints</a> («ранняя метаинформация»);</li></ul></li>

<hr/>

<li><a href="#">2xx: Success</a> (успешно):
<ul><li><a href="#">200 OK</a> («хорошо»);</li>
<li><a href="#">201 Created</a> («создано»);</li>
<li><a href="#">202 Accepted</a> («принято»);</li>
<li><a href="#">203 Non-Authoritative Information</a> («информация не авторитетна»);</li>
<li><a href="#">204 No Content</a> («нет содержимого»);</li>
<li><a href="#">205 Reset Content</a> («сбросить содержимое»);</li>
<li><a href="#">206 Partial Content</a> («частичное содержимое»);</li>
<li><a href="#">207 Multi-Status</a> («многостатусный»);</li>
<li><a href="#">208 Already Reported</a> («уже сообщалось»);</li>
<li><a href="#">226 IM Used</a> («использовано IM»).</li></ul></li>

<hr/>

<li><a href="#">3xx: Redirection</a> (перенаправление):
<ul><li><a href="#">300 Multiple Choices</a> («множество выборов»);</li>
<li><a href="#">301 Moved Permanently</a> («перемещено навсегда»);</li>
<li><a href="#">302 Found</a> («найдено»);</li>
<li><a href="#">303 See Other</a> («смотреть другое»);</li>
<li><a href="#">304 Not Modified</a> («не изменялось»);</li>
<li><a href="#">305 Use Proxy</a> («использовать прокси»);</li>
<li><a href="#">306</a>&nbsp;— <i>зарезервировано</i> (код использовался только в ранних спецификациях);</li>
<li><a href="#">307 Temporary Redirect</a> («временное перенаправление»);</li>
<li><a href="#">308 Permanent Redirect</a> («постоянное перенаправление»).</li></ul></li>

<hr/>

<li><a href="#">4xx: Client Error</a> (ошибка клиента):
<ul><li><a href="#">400 Bad Request</a> («неправильный, некорректный запрос»);</li>
<li><a href="#">401 Unauthorized</a> («не авторизован»);</li>
<li><a href="#">402 Payment Required</a> («необходима оплата»)&nbsp;— <i>зарезервировано</i> для использования в будущем;</li>
<li><a href="#">403 Forbidden</a> («запрещено (не уполномочен)»);</li>
<li><a href="#">404 Not Found</a> («не найдено»);</li>
<li><a href="#">405 Method Not Allowed</a> («метод не поддерживается»);</li>
<li><a href="#">406 Not Acceptable</a> («неприемлемо»);</li>
<li><a href="#">407 Proxy Authentication Required</a> («необходима аутентификация прокси»);</li>
<li><a href="#">408 Request Timeout</a> («истекло время ожидания»);</li>
<li><a href="#">409 Conflict</a> («конфликт»);</li>
<li><a href="#">410 Gone</a> («удалён»);</li>
<li><a href="#">411 Length Required</a> («необходима длина»);</li>
<li><a href="#">412 Precondition Failed</a> («условие ложно»);</li>
<li><a href="#">413 Payload Too Large</a> («полезная нагрузка слишком велика»);</li>
<li><a href="#">414 URI Too Long</a> («URI слишком длинный»);</li>
<li><a href="#">415 Unsupported Media Type</a> («неподдерживаемый тип данных»);</li>
<li><a href="#">416 Range Not Satisfiable</a> («диапазон не достижим»);</li>
<li><a href="#">417 Expectation Failed</a> («ожидание не удалось»);</li>
<li><a href="#">418 I’m a teapot</a> («я&nbsp;— чайник»);</li>
<li><a href="#">419 Authentication Timeout (not in RFC 2616)</a> («обычно ошибка проверки CSRF»);</li>
<li><a href="#">421 Misdirected Request</a>;</li>
<li><a href="#">422 Unprocessable Entity</a> («необрабатываемый экземпляр»);</li>
<li><a href="#">423 Locked</a> («заблокировано»);</li>
<li><a href="#">424 Failed Dependency</a> («невыполненная зависимость»);</li>
<li><a href="#">425 Too Early</a> («слишком рано»);</li>
<li><a href="#">426 Upgrade Required</a> («необходимо обновление»);</li>
<li><a href="#">428 Precondition Required</a> («необходимо предусловие»);</li>
<li><a href="#">429 Too Many Requests</a> («слишком много запросов»);</li>
<li><a href="#">431 Request Header Fields Too Large</a> («поля заголовка запроса слишком большие»);</li>
<li><a href="#">449 Retry With</a> («повторить с»);</li>
<li><a href="#">451 Unavailable For Legal Reasons</a> («недоступно по юридическим причинам»).</li>
<li><a href="#">499 Client Closed Request</a> (клиент закрыл соединение);</li></ul></li>

<hr/>

<li><a href="#">5xx: Server Error</a> (ошибка сервера):
<ul><li><a href="#">500 Internal Server Error</a> («внутренняя ошибка сервера»);</li>
<li><a href="#">501 Not Implemented</a> («не реализовано»);</li>
<li><a href="#">502 Bad Gateway</a> («плохой, ошибочный шлюз»);</li>
<li><a href="#">503 Service Unavailable</a> («сервис недоступен»);</li>
<li><a href="#">504 Gateway Timeout</a> («шлюз не отвечает»);</li>
<li><a href="#">505 HTTP Version Not Supported</a> («версия HTTP не поддерживается»);</li>
<li><a href="#">506 Variant Also Negotiates</a> («вариант тоже проводит согласование»);</li>
<li><a href="#">507 Insufficient Storage</a> («переполнение хранилища»);</li>
<li><a href="#">508 Loop Detected</a> («обнаружено бесконечное перенаправление»);</li>
<li><a href="#">509 Bandwidth Limit Exceeded</a> («исчерпана пропускная ширина канала»);</li>
<li><a href="#">510 Not Extended</a> («не расширено»);</li>
<li><a href="#">511 Network Authentication Required</a> («требуется сетевая аутентификация»);</li>
<li><a href="#">520 Unknown Error</a> («неизвестная ошибка»);</li>
<li><a href="#">521 Web Server Is Down</a> («веб-сервер не работает»);</li>
<li><a href="#">522 Connection Timed Out</a> («соединение не отвечает»);</li>
<li><a href="#">523 Origin Is Unreachable</a> («источник недоступен»);</li>
<li><a href="#">524 A Timeout Occurred</a> («время ожидания истекло»);</li>
<li><a href="#">525 SSL Handshake Failed</a> («квитирование SSL не удалось»);</li>
<li><a href="#">526 Invalid SSL Certificate</a> («недействительный сертификат SSL»).</li></ul></li></ul>

---

## Methods

- <a href="#">GET</a>. Метод GET запрашивает представление ресурса. Запросы с использованием этого метода могут только извлекать данные.
- <a href="#">POST</a>. POST используется для отправки сущностей к определённому ресурсу. Часто вызывает изменение состояния или какие-то побочные эффекты на сервере.
- <a href="#">DELETE</a>. DELETE удаляет указанный ресурс.

---

- <a href="#">PATCH</a>. PATCH используется для частичного изменения ресурса.
- <a href="#">OPTIONS</a>. OPTIONS используется для описания параметров соединения с ресурсом.
- <a href="#">PUT</a>. PUT заменяет все текущие представления ресурса данными запроса.

---

- <a href="#">HEAD</a>. HEAD запрашивает ресурс так же, как и метод GET, но без тела ответа.
- <a href="#">CONNECT</a>. CONNECT устанавливает "туннель" к серверу, определённому по ресурсу.
- <a href="#">TRACE</a>. TRACE выполняет вызов возвращаемого тестового сообщения с ресурса.
