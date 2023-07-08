---
title: TypeScript
sidebar_position: 6
---

- [typescriptlang docs](https://www.typescriptlang.org/docs/handbook/basic-types.htmlg)
- [typescript docs](https://basarat.gitbook.io/typescript/)
- [typescript-definitive-guides](https://typescript-definitive-guide.ru/)
- [Типизация — Андрей Морозов](https://www.youtube.com/watch?v=tybjhHPj3io)
- [Андрей Старовойт — Эволюция TypeScript](https://www.youtube.com/watch?v=srqqwuqzYMMo)
- [Илья Климов — Надежный JavaScript](https://www.youtube.com/watch?v=o9zh5EHrpQA&t=168s)
- [Илья Климов — «Строгий» JavaScript](https://www.youtube.com/watch?v=etKOc80-cw0)
- [json-to-typescript](https://transform.tools/json-to-typescript)

**TypeScript** — это тот же JavaScript, а не другой язык программирования. Он обратно совместим с JavaScript — после компиляции разработчик получит обычный JS.
TypeScript отличается от JavaScript возможностью явного статического назначения типов.

Разработчик TypeScript — Андерс Хейлсберг (Anders Hejlsberg), создавший Turbo Pascal, Delphi и C#.
Преимущества языка:

- аннотации типов и проверка их согласования на этапе компиляции;
- интерфейсы, кортежи, декораторы свойств и методов, расширенные возможности ООП;
- широкая поддержка IDE и адекватный автокомплит;
- поддержка ES6-модулей из коробки;
- TypeScript — надмножество JavaScript, поэтому любой код на JavaScript будет выполнен и в TypeScript.

В первом случае (JS) мы видим просто функцию ```enableValidation```, она принимает какой-то ```input``` и какой-то ```rules```. Что это такое? Чем является input? DOM-элементом? Или входящей строкой? Непонятно.

```js
// JS

function enableValidation(input, rules) {
  // ...
} 
```

***

Во втором случае всё более явно, когда вы привыкнете читать типы:

- функция принимает input, это ```HTMLInputElement```, то есть DOM-элемент;
- ```rules``` — это массив функций, которые принимают строку и возвращают boolean;
- вся функция enableValidation возвращает функцию, которая не возвращает ничего (можно предположить, что эта функция выключит валидацию).

```ts
// TS

function enableValidation(
    input: HTMLInputElement,
    rules: Array<(value: string) => boolean>
): () => void {
  // ...
} 
```

***


### Установка

```bash
# Установка компилятора
npm install --save-dev typescript

# Компиляция файла
tsc helloworld.ts

# Компиляция всех файлов
npx tsc
 
# Утилита позволяет компилировать и сразу запускать .ts файлы
npm install --save-dev ts-node
ts-node script.ts 
```

***

### tsconfig.json

- [tsconfig](https://www.typescriptlang.org/tsconfig)

Для комфортной работы с компилятором можно описать все необходимые настройки с помощью файла конфигурации tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "outDir": "./dist",
    "declaration": false,
    "module": "commonjs",
    "strictNullChecks": true,
    "strict": "true",
    "allowJs": true,
    "sourceMap": true,
    "esModuleInterop": true,
        ...
   }
} 
```

Must-have options:

```json
"noImplicitAny": true,
"noUnusedLocals": true,
"noUnusedParameters": true,
"sourceMap": true,
"strictNullChecks": true 
```

Чтобы облегчить переход на TS, делайте его постепенно, в несколько этапов:

- После установки и настройки TS, в tsconfig.json выключите noImplicitAny и strictNullChecks. Для этого нужно присвоить им значение false. Далее поменяйте все расширения с .js на .ts. Типизировать сервер не обязательно, можете оставить его как есть. Запустите сборку проекта и исправьте ошибки, которые появились.
- Теперь включите обратно noImplicitAny. Явный any используйте в самых крайних случаях. Лучше спросить у наставника и одногруппников, возможно, без него можно будет обойтись. Исправьте ошибки.
- Последний шаг — снова включите strictNullChecks. Если в терминале ошибки, вы знаете, что делать.  При запуске линтера используйте флаг ```--fix``` и не забывайте, что линтер можно настроить «под себя».

***

## Примитивы

```ts
// Была просто константа
let a = 1;

// Стала константа с типом number
let a: number = 1;
```

```ts
// Была функция, которая принимает просто value
function makeJob(value) { /**/ }

// Стала функция, которая принимает value типа number
function makeJob(value: number) { /**/ }
```

```ts
// Была функция, которая непонятно что возвращает
function calcSum(a, b) { /**/ }

// Стала функция, которая принимает числа и возвращает число
function calcSum(a: number, b: number): number { /**/ }
```

```ts
// boolean
const isDone: boolean = false;
const valid: boolean = true;

// number
const decimal: number = 6 + 0xf00d + 0b1010;
const count: number = 42;

// string
const man: string = 'John Snow';
const sentence: string = 'Hello, my name is Alice.';

// null & undefined
const n: null = null;
const u: undefined = undefined;
```

***

## Массивы и кортежи (tuple)

- [tuple](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

Массивы можно объявлять двумя равнозначными способами:

```ts
const list1: number[] = [1, 2, 3];

// generic type
const list2: Array<number> = [1, 2, 3]; 
```

```ts
// Объявление кортежа
let point: [number, number];

// Некорректная инициализация
// Type 'string' is not assignable to type 'number'.
point = [10, 'hello'];

// Инициализация
point = [20, 10]; // OK 
```

***

## Перечисления (enum)

Обратите внимание, что перечисления можно создавать двумя способами — ```enum``` и ```const enum```. 
В скомпилированном коде ```enum``` превратится в объект. А вот ```const``` enum не сгенерирует новый код, но полностью удалится во время компиляции, и в местах использования значений из такого «енума» будут подставлены соответствующие значения. Больше примеров с константными перечислениями найдёте в документации.

```ts
enum Color { 
  Red = 1, 
  Green, 
  Blue,
}

let colorName: string = Color[2];
console.log(colorName); // 'Green'

const enum Modes { 
  Show = 'show', 
  Edit = 'edit',
}

let modeName: string = Modes.Show;
console.log(modeName) // 'show'

Object.keys(Color); // Ok
Object.keys(Modes); // Error
```

### Пример использования enum

```tsx
enum LangType {
  ru = 'ru',
  en = 'en',
}

const getDefaultOptions = (lc: LangType): string[] => {
  return [
    lc === LangType.ru ? "Web-разработка" : "Web-development",
    lc === LangType.ru ? "Мобильная разработка" : "Mobile",
    lc === LangType.ru ? "1С-интеграция" : "1S integration",
    lc === LangType.ru ? "UX/UI дизайн" : "UX/UI design",
  ]
}

export default getDefaultOptions;
```

***

## Объекты

Объекты в TypeScript можно описывать с помощью ключевого слова ```object```. Про это ключевое слово нужно знать, но не стоит использовать. Этот тип не говорит почти ни о чём ни компилятору, ни человеку. И последнее — даже важнее.

```ts
// Плохо — ничего не знаем про содержимое объекта
const colors: object = {
  red: '#F00',
  green: '#0F0',
  blue: '#00F'
}; 
```

Намного лучше описывать объекты так, как они есть — со всеми полями и типами данных в них. Для этого используется такая запись:

```ts
const settings: {
  color: string;
  delay: number;
  retry: boolean;
} = {
  color: '#F00',
  delay: 2000,
  retry: false
};
```

Или через type:

```ts

type TSettings = {
  color: string;
  delay: number;
  retry: boolean;
}

const settings: TSettings = {
  color: '#F00',
  delay: 2000,
  retry: false
};
```
***

### Record

Иногда бывают задачи, где не важно знать о ключах объекта (например, они динамически добавляются и удаляются), но важно знать, что в значениях лежат только числа (например делаем счётчик чего-то). В таких случаях поможет тип ```Record```:

```ts
// Record<тип_ключа, тип_значения>
const counter: Record<string, number> = {
    apple: 1,
    orange: 8,
    banana: 6,
    grape: 5
};
```

Альтернативой Record может быть вот такая запись:

```ts
const counter: { [key: string]: number } = {
  apple: 1,
  orange: 8,
  banana: 6,
  grape: 5
};
```

Этот синтаксис стоит иметь в виду при работе с типами, но для продуктовых задач чаще хватает Record или явного описания объекта.

***

### Опциональные ключи

В объектах также можно описать опциональные ключи — они могут быть, а могут не быть. Для этого используется символ ```?``` после ключа:


```ts
// Это ок, поля price нет в объекте
const price: { name: string; price?: number } = {
  name: 'Товар1'
};

// Это ок, поле price есть и имеет тип number
const price2: { name: string; price?: number } = {
  name: 'Товар1',
  price: 5
};

// Не ок, тип price не попадает в number
const price3: { name: string; price?: number } = {
  name: 'Товар1',
  price: '5'
}; 
```

***

## Функции

Мы часто передаём функции как аргументы в другие функции или присваиваем переменным функции, возвращаемые другими функциями. TypeScript позволяет типизировать и это с помощью конструкции ```(аргументы) => возвращаемый_тип```:


```ts
// Переменная имеет тип «Функция, не принимает аргументов, ничего не возвращает»
let cancelTimeoutCb: () => void;

// Функция принимает задержку и коллбэк, возвращет функцию
function makeTimeout(delay: number, cb: Function): () => void {
  const timeoutId = setTimeout(() => {
    cb();
  }, delay);
    
  return function(): void {
    clearTimeout(timeoutId);
  }
}

// Функции могут лежать в ключах объектов

const calculator: {
  value: number;

  // Тип поля plus - функция, принимающая и возвращающая число
  plus: (v: number) => number;
} = {
  value: 0,
  plus: function(v: number): number {
    this.value += v;
    return this.value;
  }
}; 
```

### Объединение типов

Бывает так, что, например, переменная, поле или функция имеют больше одного типа. Как так? Например, бэкенд может вернуть объект, у которого поле price будет number или null, и надо быть готовым к любому из них. TypeScript позволяет это корректно описать и будет следить за использованием этого поля в дальнейшем.
Описывается тип ИЛИ с помощью оператора ```|```:

```ts
// Константа price содержит число или null
const price: number | null = null;

// Функция получения продукта возвращает объект, у которого price это number или null
function getProduct(): { name: string; price: number | null } {
  return ...;
}

function discountPrice(product: { name: string; price: number | null }): number {
  // Здесь TypeScript даст ошибку, потому что в price может быть null, и этот случай надо обработать
  return price * 0.13;
} 
```

***

### any

В TypeScript живёт абсолютное, но иногда необходимое зло — тип ```any```. Компилятор можно настроить так, чтобы он ругался на любое ```any ```в проекте. any говорит компилятору «забить на тип и поверить разработчику». Нельзя доверять людям или настраивать проект в полумере. Либо всё корректно, либо разработчики начинают оставлять «дырки» в виде ```any```, которые потом будут «стрелять» и, что важнее, будут прецедентами для использования ```any``` в дальнейшем.

Частая фраза среди разных разработчиков: «но ведь в файле X это уже используется». Нельзя применять эту фразу как аргумент в пользу решения. Проект пишут разные люди при разных обстоятельствах. Если нет понимания, зачем существует тот или иной код, или почему он написан именно так, — лучше узнать отдельно, но самому написать правильно и как считаете корректным.
Вернёмся к типу ```any```:

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let notSure: any = 4;
notSure.foo(); // TypeError: notSure.foo is not a function
notSure.toFixed(); // OK

let prettySure: object = new Number(4);
// Property 'toFixed' does not exist on type 'object'.
prettySure.toFixed();
```

***

### unknown

Вместо ```any``` по умолчанию старайтесь использовать тип ```unknown```, потому что язык будет ругаться на него, если «почувствует» что-то некорректное. Например, непонятно — есть ли у переменной свойство ```length``` или нет:

```ts
// any
let value: any;

value.foo.bar; // OK
value.trim(); // OK
value(); // OK
new value(); // OK
value[0][1]; // OK 

// unknown
let value: unknown;

value.foo.bar; // Error
value.trim(); // Error
value(); // Error
new value(); // Error
value[0][1]; // Error 
```

***

### Защитник unknown

Применять тип unknown можно следующим образом:

```ts
function isNumberArray(value: unknown): value is number[] {
  return (
    Array.isArray(value) &&
    value.every(element => typeof element === "number")
  );
} 
```

Конструкция ```value is number[]``` является защитником типа (Type Guard) и в данном случае говорит тайпскрипту, что если функция вернёт ```true```, то переданная переменная является массивом чисел, и после этого с переменной можно работать как с известным типом:

```ts
function processNumbers(value: unknown) {
    // Здесь TypeScript не позволит вызвать метод map, так как не знает, есть ли он у unknown
  value.map(e => e * 2);
    // Object is of type 'unknown'
    
    // Если type guard вернёт false — прекратим выполнение функции
  if (!isNumberArray(value)) {
      return;
  }
    
    // Здесь TypeScript понимает, что если сюда добрались — значит, в value лежит массив чисел
    // и всё будет работать
  value.map(e => e * 2);
} 
```

Если всё же не удаётся избежать использования ```any``` — старайтесь передвинуть его использование как можно ближе к источнику данных, инкапсулировать там, и дальше отдавать честные типы. Например, от бэкенда приходит какое-то значение, которое может быть чем угодно, но вы знаете, что в вашем приложении будете приводить это значение к числу или ```null```. В этом случае тип ```any``` должен использоваться как можно ближе к обработке ответа бэкенда и не пускать свои корни в дальнейшую работу приложения:

```ts
// Тип any будет только тут, а на выходе из функции будет нормальный тип
function processResponse(response: any): number | null {
  if (...) {
    return null;
  }
    
  return parseInt(response);
} 
```

***

### void и never

Типы ```void``` и ```never``` отличаются следующим:

- ```void``` говорит, что функция не возвращает никакого значения,
- ```never``` говорит, что функция в каком-то случае может никогда не закончиться и никогда не вернуть результат. Например, ```while (true)```:

```ts
function warnUser(): void {
  console.log("This is my warning message");
}

function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
} 
```

***

### Приведение типов (as)

Типы можно «кастить», или приводить к другим типам:


```ts
const someValue: any = 'this is a string';

const strLength2: number = (someValue as string).length; 
```

Будьте осторожны с «кастингом» типов. Так вы говорите компилятору: «Здесь точно будет такой тип, доверься мне», а значит есть риск пропустить ошибку. И всё потому, что компилятор будет верить слову разработчика, а значит проверять это место менее тщательно. 

В TypeScript всё так же работает деструктуризация, как и в JavaScript:

```ts
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ] 
```

Язык позволяет использовать ключевое слово const, введённое в ES6. 

```ts
const arr = [1, 2];
arr.push(3); // Ok
const constArr = [1, 2] as const;
constArr.push(3); // Error 
```

***

### Параметры по умолчанию

Описание функций становится более читабельным. Опишем снова функцию ```sum```, на которую теперь не надо писать проверки типов аргументов:

```ts
function sum(x: number, y?: number): number {
  if (y) {
    return x + y;
  } else {
    return x;
  }
}
 
console.log(sum(10, 8));  // 18
console.log(sum(42));     // OK! — 42

/////////////////////

function sum(x: number, y: number = 42): number {
  return x + y;
}
 
console.log(sum(10, 8));  // 18
console.log(sum(42));     // OK! — 84 
```

***

### Когда аргументов может быть много

У функции можно описать неопределённое число аргументов:

```ts
// функция сумматор
function sum(...numbers: number[]): number {
  return numbers.reduce((sum: number, current: number): number => {
    sum += current; return sum;
  }, 0);
}
 
console.log(sum(1, 2, 3, 4, 5));     // 15
console.log(sum(42, 0, -10, 5, 5));  // 42 
```

***

### Переопределение типов

```ts
function square(num: number): number;
function square(num: string): number;
function square(num: any): number {
  if (typeof num === 'string') {
    return parseInt(num, 10) * parseInt(num, 10);
  } else {
    return num * num;
  }
} 
```

Но можно написать и проще, используя объединение типов:

```ts
function square(num: string | number): number {
  if (typeof num === 'string') {
    return parseInt(num, 10) * parseInt(num, 10);
  } else {
    return num * num;
  }
} 
```

***

## Типы 

В прошлом уроке мы типизировали объект настроек:

```ts
const settings: {
  color: string;
  delay: number;
  retry: boolean;
} = {
  color: '#F00',
  delay: 2000,
  retry: false
}; 
```

Если этот объект часто используется — часто применяется и его тип. Описывать столько строчек кода в каждой функции, которая принимает или возвращает настройки, — дело неблагодарное и трудоёмкое.
Чтобы этого избежать, придумали алиасы типов, которые позволяют описать удобным для нас словом целый тип и использовать его в дальнейшей работе.
[Type Alias](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#reusable-types-type-aliases) — это не новый тип, а лишь синоним описанного объединения, пересечения или интерфейса.

```ts
type Settings = {
  color: string;
  delay: number;
  retry: boolean;
};

const settings: Settings = {
  color: '#F00',
  delay: 2000,
  retry: false
};

function applySettings(settings: Settings): void { /**/ }
function getCurrentSettings(): Settings { /**/ } 
```

***

## Интерфейсы

Интерфейс определяет свойства и методы, которые объект или класс должен реализовать.
Возьмём предыдущий пример с settings и используем интерфейс, описав в нём структуру:

```ts
interface Settings {
  color: string;
  delay: number;
  retry: boolean;
}

const settings: Settings = {
  color: '#F00',
  delay: 2000,
  retry: false
};

function applySettings(settings: Settings): void { /**/ }
function getCurrentSettings(): Settings { /**/ } 
```

При некорректном использовании появятся ошибки:

```ts
interface Options {
  color?: string;
}

interface Square {
  color: string;
}

function create(options: Options): Square {
  const square: Square = { 
    color: 'white' 
  };

  // Type 'undefined' is not assignable to type 'string'.
  square.color = options.color;

/*
    Вот так ошибки не будет:
    if (options.color) {
    square.color = options.color;
  }
*/

  return square;
}
```

Интерфейсы можно наследовать:

```ts
interface Figure {
  width: number;
  height: number;
}

interface Square extends Figure {
  square: () => number;
} 
```

Относительно интерфейсов есть пара вопросов, вызывающих споры:

- Называть интерфейсы с префиксом ```I``` или нет? ```User``` или ```IUser```?
- Использовать интерфейсы или type alias для типизации объектов? А если type alias — зачем интерфейсы?

Префиксом ```I``` пользуются во «взрослых» ООП-языках: Java и C#. В TypeScript комьюнити предпочитает этим префиксом не пользоваться, но в итоге решает команда, в которой вы работаете, — пользоваться префиксом или нет. Кому-то кажется, что префикс повышает читабельность и сразу видно, что это интерфейс. Это разумный аргумент. Вы должны сами для себя выбрать — использовать префикс или нет.

Что касается использования типов или интерфейсов — здесь пользователи TypeScript придерживаются позиции, что объекты лучше типизировать с помощью ```type```. 

Во-первых, потому что эта запись имеет больше возможностей. Во-вторых, следуя логике из «взрослых» языков: интерфейс — это контракт поведения, и он должен использоваться вместе с ключевым словом implements, когда класс реализует интерфейс. Но опять же — вы должны сами для себя решить, как и что использовать, жёстких норм нет.


***

## Классы

Как и в ES6 — есть возможность работать с [классами](https://medium.com/@sergey.bakaev/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-typescript-b6e2e0e86864). TypeScript добавил помимо типов  отличную работу с ООП, наследованием, абстрактными классами и интерфейсами.

```ts
interface MakesSound {
  makeSound(): void;
}

class Python implements MakesSound {
  private readonly _length: number;

  constructor(length: number) {
    this._length = length;
  }

  public get length(): number {
    return this._length / 100;
  }

  protected makeSound() {
    console.log('Ssssss!');
  }
} 
```

У методов и свойств классов появились модификаторы доступов:

- ```public``` — доступны без ограничений, это значение по умолчанию;
- ```private``` — доступны только внутри класса;
- ```protected``` — доступны внутри класса и в классах-наследниках.
- ```readonly``` — комбинируется со всеми предыдущими, не даёт перезаписывать свойство. Оно должно быть или задано изначально, или задано в конструкторе.

Таким образом, модификаторы доступа работают по тем же правилам, что и в C++, C# и других типизированных языках.

***

### Абстрактные классы

В TypeScript появились [абстрактные классы](https://metanit.com/web/typescript/3.12.php). Нельзя создать экземпляр такого класса, однако его свойства и методы можно наследовать. Абстрактный класс нужен для описания или реализации обязательных методов. 

```ts
abstract class Snake {
  private readonly _length: number;

  public get length(): number {
    return this._length / 100;
  }

  constructor(length: number) {
    this._length = length;
  }

  protected abstract makeSound(): void;
}

class Python extends Snake {
  private static population = 10000;

  public static incrementPopulation(): void {
    Python.population++;
  }

  constructor(length: number) {
    super(length);
    Python.incrementPopulation();
  }

    // если не написать реализацию метода абстрактного класса, 
    // компилятор выдаст ошибку.
  protected makeSound(): void {
    console.log('Ssssss!');
  }
} 
```

***

### Декораторы

[Декораторы](https://habr.com/ru/company/docsvision/blog/310870/) в JavaScript и TypeScript — это не миф, а реальность:

```ts
function memoize (target, key, descriptor) {
  const originalMethod = descriptor.value;
  const cache = {};
  descriptor.value = function (n: number): number {
    return cache[n] ? cache[n] : cache[n] = originalMethod(n);
  }
}

class Utils {
  @memoize
  static fibonacci (n: number): number {
    return n < 2 ? 1 : Utils.fibonacci(n - 1) + Utils.fibonacci(n - 2)
  }
}

console.time('count');
console.log(Utils.fibonacci(50));
console.timeEnd('count') // оооочень долго

console.log(Utils.fibonacci(1000)); // 7.0330367711422765e+208
console.timeEnd('count'); // count: 5.668ms 
```

***

### Обобщение типов (ХЗ что это такое???)

Если в TypeScript создать массив из двух разных типов, то при добавлении третьего — произойдёт ошибка компиляции:

```ts
const shapes = [new Circle(), new Square()];
    
// Argument of type 'Triangle'
// is not assignable to parameter of type 'Square | Circle'.
shapes.push(new Triangle()); 
```

Автоматически срабатывает вывод типов. По объявлению массива он определил, что в массиве должны быть данные только двух типов. Если явно объявить, какие типы данных ожидаются, компилятору не придётся вычислять это самостоятельно. Например, если представить, что есть некий Shape, в котором явно указано, что в массиве может в том числе быть Triangle:

```ts
const shapes: Shape[] = [new Circle(), new Square()];
shapes.push(new Triangle()); // Ok 
```

Теперь всё корректно. Автоматического вывода не будет, TypeScript будет заранее знать,  Triangle — это тоже допустимое значения в массиве:

TypeScript смотрит на наличие необходимых свойств и можно ли совместить типы. Пример с другом и питомцем показывает подобное поведение:

```ts
class Pet {
    name: string;
    constructor(value: string) {
        this.name = value;
    }
}

class Friend {
    name: string;
    constructor(value: string) {
        this.name = value;
    }
}

const pet: Pet = new Friend('Шарик'); // 🐶 
```

***

### Джененрик

```ts
const fib: Array<number> = [1, 1, 2, 3, 5];
    
// Argument of type 'string'
// is not assignable to parameter of type 'number'.
fib.push('1');

const map: Map<number, string> = new Map();
    
// Argument of type 'number'
// is not assignable to parameter of type 'string'.
map.set(1, 1);
```
Использовать дженерики можно также в type alias:

```ts
type AsyncResult<TResult> = Promise<TResult> | TResult;
    
let result: AsyncResult<string> = Promise.resolve('200');
let result: AsyncResult<string> = '200'; 
```

```ts
Рассмотрим более сложный пример:

interface ISwim {
  swim()
}
    
class Dog implements ISwim {
  swim() { ... }
}
    
class Duck implements ISwim {
  swim() { ... }
}

function swimTogether<
  T1 implements ISwim,
  T2 implements ISwim
>(firstPal: T1, secondPal: T2) {
  firstPal.swim();
  secondPal.swim();
} 
```

```ts
Generics можно проверять на более узкие типы:

type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' :
  'object'; 
```

Такой подход называется [conditional types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html).

***

## TypeScript Declaration Files

TypeScript Declaration Files ```(*.d.ts)``` — это файлы для описания интерфейсов.

Основная проблема: не все JS-библиотеки имеют совместимость с TypeScript. И при использовании JS-файлов в TypeScript сталкиваемся с ошибками типизации, так как TypeScript не знает, что за функция, какие у неё свойства и функция ли это.
Для этого есть ```.d.ts``` файлы, в которых описываются только интерфейсы и API библиотеки. 

Например, раньше не было интерфейсов для JQuery, но их нужно было использовать. Приходилось писать:

```ts
interface JQueryStatic {
  ajax(settings: JQueryAjaxSettings): JQueryXHR;
  (element: Element): JQuery;
  (html: string, ownerDocument?: Document): JQuery;
  (): JQuery;
}
 
declare var $: JQueryStatic;
declare module 'jquery' {
  export = $;
} 
```

Сегодня к большинству JS-библиотек разработчиками написаны ```.d.ts``` файлы и их можно сразу использовать на любом языке, но не для всего. Знать такой способ стоит. 

С помощью ```.d.ts``` можно описывать глобальные переменные окружения или инструменты, которые написали сами и хочется вынести в отдельную библиотеку или пакет.

***

### JSDoc

Типизировать также можно с помощью [JSDoc](https://jsdoc.app/) и TypeScript:

```tsx
// Пример типизирования функции с помощью JSDoc + TypeScript
/**
 * @param p0 {string} - Строковый аргумент, объявленный на манер TS
 * @param {string}  p1 - Строковый аргумент
 * @param {string=} p2 - Опциональный аргумент
 * @param {string} [p3] - Другой опциональный аргумент
 * @param {string} [p4="test"] - Аргумент со значением по умолчанию
 * @return {string} Возвращает строку
 */
function fn3(p0, p1, p2, p3, p4){
  // TODO
} 
```

Документации JSDoc достаточно, чтобы начать писать документируемый код. Он не всегда читабельный. Например, за ним сложно следить в крупном JS-проекте, но без него ещё сложнее. 
Альтернатива — сразу использовать нормальную типизацию. Либо Flow, либо TypeScript.

***

### Parcel + TypeScript

Чтобы настроить TypeScript в сборщике Parcel, вам нужно сделать примерно... Ничего. 

Да-да, вы не ослышались. Из коробки в Parcel уже живёт TypeScript. Всё, что вам нужно сделать:

- Поменять расширения файлов на .ts.
- Поменять расширение у скрипта в index.js на index.ts:

```html  
<script type="text/javascript" src="src/index.ts"></script>
```

Команда запуска и сборки не меняется. Так же запускаете команду запуска dev-режима и продолжаете разрабатывать на TypeScript.

***

### Типизация react-компонента через generic

```ts
const Clip: React.FC<{ fill?: string; width?: number; height?: number }> = ({
  fill,
  width,
  height,
}) => {
  return (
```

***

## Ссылки

- [TS playground;](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)
- [Документация;](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Ещё одна документация;](https://basarat.gitbook.io/typescript/)
- [Большая русская книга-документация по TypeScript;](https://typescript-definitive-guide.ru/)
- [Про типизацию;](https://www.youtube.com/watch?v=tybjhHPj3io)
- [Эволюция TypeScript.](https://www.youtube.com/watch?v=srqqwuqzYMM)

### Тема «TypeScript I» - Проблемы со стандартами

- [Развитие стандарта ECMAScript.](https://github.com/tc39/ecma262)

### Отсутствие строгой типизации

- [JSDoc](https://jsdoc.app/)

### Варианты решения проблем

Компилятор [Babel](https://babeljs.io/) и его [playground](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=IYZwngdgxgBAZgV2gFwJYHsI2QUxMgCgEoYBvAKAEhgB3YVZGAFgCYBucgXyA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Cenv&prettier=false&targets=&version=7.11.0&externalPlugins=), где можно посмотреть, как инструмент компилирует современный код под различные версии и настройки.]()

### Отдельные языки со своими компиляторами:

- [Dart;](https://dart.dev/)
- [CoffeeScript;](https://coffeescript.org/)
- [ClojureScript;](https://clojurescript.org/)
- [Elm.](https://elm-lang.org/)

### Типизированный JS:

- [Flow](https://flow.org/);
- [TypeScript](https://www.typescriptlang.org/).

### TypeScript

- [Документация по ключам tsconfig.](https://www.typescriptlang.org/tsconfig)

### Типы данных, вывод и приведение

- [Enums;](https://www.typescriptlang.org/docs/handbook/enums.html#const-enums)

### Полезные утилиты типов:

- [advanced types,](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
- [utility types.](https://www.typescriptlang.org/docs/handbook/utility-types.html)

### ООП

- [Type Alias;](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#reusable-types-type-aliases)
- [О декораторах в TypeScript есть замечательная статья на хабре;](https://habr.com/ru/company/docsvision/blog/310870/)
- [Документация по классам — главный источник;](https://www.typescriptlang.org/docs/handbook/classes.html)
- [Классы в TypeScript — введение в тему;](https://medium.com/@sergey.bakaev/%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-typescript-b6e2e0e86864)
- [Подробнее про абстрактные классы.](https://metanit.com/web/typescript/3.2.php)

### Обобщение типов

- [Type Guard;](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
- [Conditional Types.](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

###  Parcel + TypeScript = Дружба?

- [Документация сборщика Parcel.](https://parceljs.org/recipes/react/#typescript)

###  Серия докладов Ильи Климова про типизацию:

- [Надёжный JavaScript;](https://www.youtube.com/watch?time_continue=168&v=o9zh5EHrpQA&feature=emb_logo)
- [Строгий JavaScript.](https://www.youtube.com/watch?v=etKOc80-cw0)

<!-- as, instandeOf -->
<!-- call, bind, aply -->
<!-- regExp -->
<!-- new Map -->
