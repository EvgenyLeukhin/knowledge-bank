---
title: API и БД
sidebar_position: 8
---

- При возникновении неисправностей в первую очередь проверяется КЛИЕНТ, далее СЕРВЕР, далее БД.
- Нужно находить потенциальные уязвимости в клиент-серверной архитектуре, тестировать на возможность доступа к данным или возможности перехвата.

## Инструменты для тестирование API

- [Postman](https://www.postman.com/) with [newman](https://www.npmjs.com/package/newman)
- [Thunder Client for VS Code](https://www.thunderclient.com/)
- [Swagger](https://swagger.io/) - Интерактивныое представление/описание API как веб-приложение с открытым исходным кодов. Описание и документация API. Swagger UI.
- [Insomnia](https://insomnia.rest/download) - Desktop-приложение для тестирования API
- [Charles](https://www.charlesproxy.com/latest-release/download.do) - Proxy-server - мониторинг запросов. Сниффер - анализатор трафика.
- [authenticationtest.com](https://authenticationtest.com/simpleFormAuth/) - Тестирование авторизации
- [users.bugred](http://users.bugred.ru/) - Тестирование авторизации 2

***

## Postman


```brew install --cask postman``` - Install Postman CLI

```postman login --with-api-key API_KEY``` - Зарегистрировать пользователя по CLI

```postman collection run 4238395-f9da3763-3190-47d9-b3ee-e1529653fa88``` - Запустить тестирование коллекции

```npm install -g newman ``` - Install Newman (Уже устаревшая технология)

***

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
