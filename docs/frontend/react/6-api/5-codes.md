---
title: codes
sidebar_position: 5
---

- [Коды ответа HTTP](https://developer.mozilla.org/ru/docs/Web/HTTP/Status)

<ol>
  <li><a href="#">Информационные ответы</a> (<code>100</code> – <code>199</code>)</li>
  <li><a href="#">Успешные ответы</a> (<code>200</code> – <code>299</code>)</li>
  <li><a href="#">Сообщения о перенаправлении</a> (<code>300</code> – <code>399</code>)</li>
  <li><a href="#">Ошибки клиента</a> (<code>400</code> – <code>499</code>)</li>
  <li><a href="#">Ошибки сервера</a> (<code>500</code> – <code>599</code>)</li>
</ol>

---

<ul><li><a href="#1xx">1xx: Informational</a> (информационные):
<ul><li><a href="#100">100 Continue</a> («продолжайте»)<sup id="cite_ref-rfc7231_3-0" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#101">101 Switching Protocols</a> («переключение протоколов»)<sup id="cite_ref-rfc7231_3-1" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#102">102 Processing</a> («идёт обработка»);</li>
<li><a class="mw-selflink-fragment" href="#103">103 Early Hints</a> («ранняя метаинформация»);</li></ul></li>

<hr/>

<li><a href="#2xx">2xx: Success</a> (успешно):
<ul><li><a href="#200">200 OK</a> («хорошо»)<sup id="cite_ref-rfc7231_3-2" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#201">201 Created</a> («создано»)<sup id="cite_ref-rfc7231_3-3" class="reference"><a href="#cite_note-rfc7231-3"></a></sup><sup id="cite_ref-webdav_4_2_5_4-0" class="reference"><a href="#cite_note-webdav_4_2_5-4"></a></sup>;</li>
<li><a href="#202">202 Accepted</a> («принято»)<sup id="cite_ref-rfc7231_3-4" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#203">203 Non-Authoritative Information</a> («информация не авторитетна»)<sup id="cite_ref-rfc7231_3-5" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#204">204 No Content</a> («нет содержимого»)<sup id="cite_ref-rfc7231_3-6" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#205">205 Reset Content</a> («сбросить содержимое»)<sup id="cite_ref-rfc7231_3-7" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#206">206 Partial Content</a> («частичное содержимое»)<sup id="cite_ref-5" class="reference"><a href="#cite_note-5"></a></sup>;</li>
<li><a href="#207">207 Multi-Status</a> («многостатусный»)<sup id="cite_ref-webdav_10_6-0" class="reference"><a href="#cite_note-webdav_10-6"></a></sup>;</li>
<li><a href="#208">208 Already Reported</a> («уже сообщалось»)<sup id="cite_ref-7" class="reference"><a href="#cite_note-7"></a></sup>;</li>
<li><a href="#226">226 IM Used</a> («использовано IM»).</li></ul></li>

<hr/>

<li><a href="#3xx">3xx: Redirection</a> (перенаправление):
<ul><li><a href="#300">300 Multiple Choices</a> («множество выборов»)<sup id="cite_ref-rfc7231_3-8" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#301">301 Moved Permanently</a> («перемещено навсегда»)<sup id="cite_ref-rfc7231_3-9" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#302">302 Found</a> («найдено»)<sup id="cite_ref-rfc7231_3-10" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#303">303 See Other</a> («смотреть другое»)<sup id="cite_ref-rfc7231_3-11" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#304">304 Not Modified</a> («не изменялось»)<sup id="cite_ref-rfc7232_8-0" class="reference"><a href="#cite_note-rfc7232-8"></a></sup>;</li>
<li><a href="#305">305 Use Proxy</a> («использовать прокси»)<sup id="cite_ref-rfc7231_3-12" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#306">306</a>&nbsp;— <i>зарезервировано</i> (код использовался только в ранних спецификациях)<sup id="cite_ref-rfc7231_3-13" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#307">307 Temporary Redirect</a> («временное перенаправление»)<sup id="cite_ref-rfc7231_3-14" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#308">308 Permanent Redirect</a> («постоянное перенаправление»)<sup id="cite_ref-9" class="reference"><a href="#cite_note-9"></a></sup>.</li></ul></li>

<hr/>

<li><a href="#4xx">4xx: Client Error</a> (ошибка клиента):
<ul><li><a href="#400">400 Bad Request</a> («неправильный, некорректный запрос»)<sup id="cite_ref-rfc7231_3-15" class="reference"><a href="#cite_note-rfc7231-3"></a></sup><sup id="cite_ref-webdav_4_2_5_4-1" class="reference"><a href="#cite_note-webdav_4_2_5-4"></a></sup>;</li>
<li><a href="#401">401 Unauthorized</a> («не <a href="/wiki/%D0%90%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F" title="Авторизация">авторизован</a>»)<sup id="cite_ref-rfc7235_10-0" class="reference"><a href="#cite_note-rfc7235-10">[10]</a></sup>;</li>
<li><a href="#402">402 Payment Required</a> («необходима оплата»)&nbsp;— <i>зарезервировано</i> для использования в будущем<sup id="cite_ref-rfc7231_3-16" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="/wiki/%D0%9E%D1%88%D0%B8%D0%B1%D0%BA%D0%B0_403" title="Ошибка 403">403 Forbidden</a> («запрещено (не уполномочен)»)<sup id="cite_ref-rfc7231_3-17" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="/wiki/%D0%9E%D1%88%D0%B8%D0%B1%D0%BA%D0%B0_404" title="Ошибка 404">404 Not Found</a> («не найдено»)<sup id="cite_ref-rfc7231_3-18" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#405">405 Method Not Allowed</a> («метод не поддерживается»)<sup id="cite_ref-rfc7231_3-19" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#406">406 Not Acceptable</a> («неприемлемо»)<sup id="cite_ref-rfc7231_3-20" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#407">407 Proxy Authentication Required</a> («необходима аутентификация прокси»)<sup id="cite_ref-rfc7235_10-1" class="reference"><a href="#cite_note-rfc7235-10">[10]</a></sup>;</li>
<li><a href="#408">408 Request Timeout</a> («истекло время ожидания»)<sup id="cite_ref-rfc7231_3-21" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#409">409 Conflict</a> («конфликт»)<sup id="cite_ref-rfc7231_3-22" class="reference"><a href="#cite_note-rfc7231-3"></a></sup><sup id="cite_ref-webdav_4_2_5_4-2" class="reference"><a href="#cite_note-webdav_4_2_5-4"></a></sup>;</li>
<li><a href="#410">410 Gone</a> («удалён»)<sup id="cite_ref-rfc7231_3-23" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#411">411 Length Required</a> («необходима длина»)<sup id="cite_ref-rfc7231_3-24" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#412">412 Precondition Failed</a> («условие ложно»)<sup id="cite_ref-rfc7232_8-1" class="reference"><a href="#cite_note-rfc7232-8"></a></sup><sup id="cite_ref-webdav_4_3_1_1_11-0" class="reference"><a href="#cite_note-webdav_4_3_1_1-11">[11]</a></sup>;</li>
<li><a href="#413">413 Payload Too Large</a> («полезная нагрузка слишком велика»)<sup id="cite_ref-rfc7231_3-25" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#414">414 URI Too Long</a> («<a href="/wiki/URI" title="URI">URI</a> слишком длинный»)<sup id="cite_ref-rfc7231_3-26" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#415">415 Unsupported Media Type</a> («неподдерживаемый тип данных»)<sup id="cite_ref-rfc7231_3-27" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;3</li>
<li><a href="#416">416 Range Not Satisfiable</a> («диапазон не достижим»)<sup id="cite_ref-12" class="reference"><a href="#cite_note-12">[12]</a></sup>;</li>
<li><a href="#417">417 Expectation Failed</a> («ожидание не удалось»)<sup id="cite_ref-rfc7231_3-28" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#418">418 I’m a teapot</a> («я&nbsp;— чайник»);</li>
<li><a href="#419">419 Authentication Timeout (not in RFC 2616)</a> («обычно ошибка проверки CSRF»);</li>
<li><a href="#421">421 Misdirected Request</a><sup id="cite_ref-13" class="reference"><a href="#cite_note-13">[13]</a></sup>;</li>
<li><a href="#422">422 Unprocessable Entity</a> («необрабатываемый экземпляр»);</li>
<li><a href="#423">423 Locked</a> («заблокировано»);</li>
<li><a href="#424">424 Failed Dependency</a> («невыполненная зависимость»);</li>
<li><a class="mw-selflink-fragment" href="#425">425 Too Early</a> («слишком рано»);</li>
<li><a href="#426">426 Upgrade Required</a> («необходимо обновление»)<sup id="cite_ref-rfc7231_3-29" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#428">428 Precondition Required</a> («необходимо предусловие»)<sup id="cite_ref-rfc6585_14-0" class="reference"><a href="#cite_note-rfc6585-14"></a></sup>;</li>
<li><a href="#429">429 Too Many Requests</a> («слишком много запросов»)<sup id="cite_ref-rfc6585_14-1" class="reference"><a href="#cite_note-rfc6585-14"></a></sup>;</li>
<li><a href="#431">431 Request Header Fields Too Large</a> («поля заголовка запроса слишком большие»)<sup id="cite_ref-rfc6585_14-2" class="reference"><a href="#cite_note-rfc6585-14"></a></sup>;</li>
<li><a href="#449">449 Retry With</a> («повторить с»)<sup id="cite_ref-MSDN_WEBDAV_2_2_6_1-1" class="reference"><a href="#cite_note-MSDN_WEBDAV_2_2_6-1"></a></sup>;</li>
<li><a href="/wiki/HTTP_451" title="HTTP 451">451 Unavailable For Legal Reasons</a> («недоступно по юридическим причинам»)<sup id="cite_ref-rfc7725_15-0" class="reference"><a href="#cite_note-rfc7725-15"></a></sup>.</li>
<li><a href="#499">499 Client Closed Request</a> (клиент закрыл соединение);</li></ul></li>

<hr/>

<li><a href="#5xx">5xx: Server Error</a> (ошибка сервера):
<ul><li><a href="#500">500 Internal Server Error</a> («внутренняя ошибка сервера»)<sup id="cite_ref-rfc7231_3-30" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#501">501 Not Implemented</a> («не реализовано»)<sup id="cite_ref-rfc7231_3-31" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#502">502 Bad Gateway</a> («плохой, ошибочный шлюз»)<sup id="cite_ref-rfc7231_3-32" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#503">503 Service Unavailable</a> («сервис недоступен»)<sup id="cite_ref-rfc7231_3-33" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#504">504 Gateway Timeout</a> («шлюз не отвечает»)<sup id="cite_ref-rfc7231_3-34" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#505">505 HTTP Version Not Supported</a> («версия HTTP не поддерживается»)<sup id="cite_ref-rfc7231_3-35" class="reference"><a href="#cite_note-rfc7231-3"></a></sup>;</li>
<li><a href="#506">506 Variant Also Negotiates</a> («вариант тоже проводит согласование»)<sup id="cite_ref-rfc2295_8_1_16-0" class="reference"><a href="#cite_note-rfc2295_8_1-16"></a></sup>;</li>
<li><a href="#507">507 Insufficient Storage</a> («переполнение хранилища»);</li>
<li><a href="#508">508 Loop Detected</a> («обнаружено бесконечное перенаправление»)<sup id="cite_ref-webdav_7_1_17-0" class="reference"><a href="#cite_note-webdav_7_1-17"></a></sup>;</li>
<li><a href="#509">509 Bandwidth Limit Exceeded</a> («исчерпана пропускная ширина канала»);</li>
<li><a href="#510">510 Not Extended</a> («не расширено»);</li>
<li><a href="#511">511 Network Authentication Required</a> («требуется сетевая аутентификация»)<sup id="cite_ref-rfc6585_14-3" class="reference"><a href="#cite_note-rfc6585-14"></a></sup>;</li>
<li><a href="#520">520 Unknown Error</a> («неизвестная ошибка»)<sup id="cite_ref-CloudFlare_Error_Pages_18-0" class="reference"><a href="#cite_note-CloudFlare_Error_Pages-18"></a></sup>;</li>
<li><a href="#521">521 Web Server Is Down</a> («веб-сервер не работает»)<sup id="cite_ref-CloudFlare_Error_Pages_18-1" class="reference"><a href="#cite_note-CloudFlare_Error_Pages-18"></a></sup>;</li>
<li><a href="#522">522 Connection Timed Out</a> («соединение не отвечает»)<sup id="cite_ref-CloudFlare_Error_Pages_18-2" class="reference"><a href="#cite_note-CloudFlare_Error_Pages-18"></a></sup>;</li>
<li><a href="#523">523 Origin Is Unreachable</a> («источник недоступен»)<sup id="cite_ref-CloudFlare_Error_Pages_18-3" class="reference"><a href="#cite_note-CloudFlare_Error_Pages-18"></a></sup>;</li>
<li><a href="#524">524 A Timeout Occurred</a> («время ожидания истекло»)<sup id="cite_ref-CloudFlare_Error_Pages_18-4" class="reference"><a href="#cite_note-CloudFlare_Error_Pages-18"></a></sup>;</li>
<li><a href="#525">525 SSL Handshake Failed</a> («квитирование SSL не удалось»)<sup id="cite_ref-CloudFlare_Error_Pages_18-5" class="reference"><a href="#cite_note-CloudFlare_Error_Pages-18"></a></sup>;</li>
<li><a href="#526">526 Invalid SSL Certificate</a> («недействительный сертификат SSL»)<sup id="cite_ref-CloudFlare_Error_Pages_18-6" class="reference"><a href="#cite_note-CloudFlare_Error_Pages-18"></a></sup>.</li></ul></li></ul>
