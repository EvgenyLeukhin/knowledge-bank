---
title: Паттерны и методологии
sidebar_position: 13
---

## Тема «Паттерны»

### Методологии

- Шпаргалка по [шаблонам проектирования](https://habr.com/ru/post/210288/);
- Доклад Антона Немцева про [«Паттерны JavaScript»](https://www.youtube.com/watch?v=Y6iOA6sfsPk);
- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) — don't repeat yourself («не повторяйте себя»);
- [KISS](https://en.wikipedia.org/wiki/KISS_principle) — keep it simple stupid («делайте вещи проще»);
- [SOLID](https://en.wikipedia.org/wiki/SOLID) — пять основных принципов объектно-ориентированного программирования и проектирования;
- [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) — you ain't gonna need it («вам это не понадобится»);
- [GRASP](https://afly.co/hsh3) — документированные и стандартизированные принципы объектно-ориентированного анализа;
- [Package Principles](https://en.wikipedia.org/wiki/Package_principles) — package cohesion (REP, CRP, CCP) и package coupling (ADP, SDP, SAP).
- [Архитектура современных FRONTEND приложений. 5 видов. Преимущества и недостатки](https://www.youtube.com/watch?v=c3JGBdxfYcU&t=4s)

### Декомпозиция

- Отличная статья про [«Эволюцию модульного JavaScript»](https://habr.com/ru/company/yandex/blog/192874/);
- Паттерн [«Наблюдатель»](https://habr.com/ru/post/70793/);
- Почитать подробнее про примеси можно на [Хабре](https://habr.com/ru/post/147901/) или в [«Современном учебнике JavaScript»](https://learn.javascript.ru/mixins);
- [Event driven development](https://habr.com/ru/post/119304/);
- [Inversion of Control](https://habr.com/ru/post/149912/) и [Dependency Injection](https://habr.com/ru/post/232851/).

### Полезные ссылки

- [MV-паттерны;](https://habr.com/ru/post/151219/)
- [Создание хорошей архитектуры](https://habr.com/ru/post/276593/);
- [Создание системы для управления состояниями на чистом JS](https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/).


***

## Архитектура 

Строительство дома начинается с плана. Можно, конечно, сразу перейти к делу и начать заливать фундамент (а дальше как пойдёт), но насколько такая конструкция будет надёжной — большой вопрос. Да и в процессе может оказаться, что стены не там, пол кривой, а окон не хватает. Аналогично с разработкой приложения. Хороший проект, который будет «жить» долго, начинается с архитектуры.

Начнём с обозначения — что такое архитектура с точки зрения различных определений.

Если рассматривать приложение как систему, то есть набор элементов или компонентов, объединённых для выполнения конкретной функции, можно выделить следующие определения:

**Архитектура идентифицирует главные элементы (компоненты) системы и способы их взаимодействия.**

**Архитектура — это организация системы, воплощённая в её компонентах, их отношениях между собой и с внешним окружением.**

Архитектурными можно назвать такие решения, которые распределены по всему приложению, а стоимость их изменения будет огромной.
Критерии качественной и хорошей архитектуры системы (или дизайна системы):

- эффективность,
- масштабируемость процесса разработки,
- гибкость и возможность расширения,
- тестируемость и другие способы обеспечения качества системы,
- возможность повторно использовать элементы.

Критерии хорошего дизайна упрощают разработку, но иногда для принятия решений важнее понимать, как лучше не делать. Архитектуру с такими качествами точно делать не стоит:

- дизайн системы сложно изменить, так как это влечёт за собой большое количество изменений в других её частях,
- после внесения изменений ломаются другие части приложения,
- сложно или невозможно повторно использовать элемент системы в другом приложении (например, из-за сложности «выпутывания» из текущего приложения).

***

## Методологии

- [Шаблоны проектирования](https://habr.com/ru/post/210288/)

Паттерн — это типовое решение типовой проблемы.

Паттерны (или методологии) — это совсем не страшно и необходимо для понимания. 

Основные свойства:

- Можно легко использовать повторно;
- Формируют структуру приложения.

Паттерны пришли в программирование из архитектуры. В конце прошлого тысячелетия, примерно в 1994 году, — вышла книга от «банды четырёх» (или Gang of four), в которой были описаны все паттерны применительно к программному обеспечению.

На Хабре есть полезная шпаргалка по материалам книги.

Если вы уже слышали, что такое паттерны, но все ещё не применяете их, советуем посмотреть доклад Антона Немцева про «Паттерны JavaScript». Доклад будет не менее интересен тем, кто впервые столкнулся с паттернами в этом уроке.

Зачем использовать паттерны?

Паттерны — это не просто бюрократические советы, как надо делать. Под паттернами можно понимать проверенные опытом и множеством проектов советы по написанию стабильной архитектуры. 

Они помогают не ходить по всем «граблям», а по возможности обходить их. Когда люди начинают избегать «граблей» и писать собственные решения, с большой вероятностью всё равно получится подобие уже существующего паттерна.

Вы можете использовать тот или иной паттерн ежедневно, но даже не знать об этом. Паттерны часто сравнивают с алгоритмами, ведь оба понятия описывают типовые решения каких-то известных проблем. 

Но если алгоритм — это какой-то чёткий набор действий, то паттерн — это высокоуровневое описание решения, конкретная реализация которого может отличаться в двух разных случаях.

Паттерны принято делить на 3 группы:
- Порождающие паттерны — служат для гибкого создания объектов без внесения в код лишних зависимостей.
- Структурные паттерны — описывают различные способы конструирования связей между объектами.
- Поведенческие паттерны — служат для эффективной коммуникации между объектами.

### Примеры паттернов

Один из самых простых паттернов — Синглтон. Суть его заключается в том, что у конкретного класса будет всегда один экземпляр.

```jsx
class Singleton {
  private static instance: Singleton;

  private constructor() { }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {
    // ...
  }
}


const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

s1 === s2 // true 
```

В данном примере при первом вызове ```getInstance``` создаётся объект класса ```Singleton```. В ответ на второй вызов ```getInstance``` отдаёт созданный ранее экземпляр класса.

Еще один пример — Итератор. Итератор предоставляет интерфейс для последовательного обхода любой коллекции данных.

```jsx
class Iterator {
  private readonly data: number[];
  private position: number = 0;

  constructor(data: number[]) {
    this.data = data;
  }

  public next() {
    return this.data[this.position++];
  }
}

const i = new Iterator([1,2,3]);

console.log(i.next()); // 1
console.log(i.next()); // 2
console.log(i.next()); // 3
console.log(i.next()); // undefined 
```

Что-то напоминает? Конечно! Генераторы в JS используют паттерн Итератор — и не только они. Вы будете с ним часто встречаться.

Больше примеров паттернов вы встретите дальше в уроках. Также будет полезным сайт “Refactoring Guru”, где можно найти информацию о разных паттернах и примеры их реализации на разных языка

Основные принципы проектирования

- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) — don't repeat yourself («не повторяйте себя»),
- [KISS](https://en.wikipedia.org/wiki/KISS_principle) — keep it simple stupid («делайте вещи проще»),
- [SOLID](https://en.wikipedia.org/wiki/SOLID) — пять основных принципов объектно-ориентированного программирования и проектирования,
- [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) — you ain't gonna need it («вам это не понадобится»),
- [GRASP](https://afly.co/hsh3) — документированные и стандартизированные принципы объектно-ориентированного анализа,
- [Package Principles](https://en.wikipedia.org/wiki/Package_principles) — package cohesion (REP, CRP, CCP) и package coupling (ADP, SDP, SAP).

***

## Декомпозиция

Декомпозицию можно рассматривать как основу модульной архитектуры.

<img src="../../../../img/decomposition.png" width="650" alt="decomposition.jpg" />

Все проекты должны быть максимально декомпозированы, что даст возможность:

- Легко изменять отдельные части системы.
- Контролировать взаимосвязи в системе. Если у системы всё со всем связано — такое отслеживать почти невозможно или крайне проблематично.

Рассмотрим принципы правильной декомпозиции.

## Иерархичность

Программная система должна быть разбита на небольшие «атомарные» подсистемы. Каждая из них решает чётко поставленную перед ней подзадачу.
Сами подсистемы разбивают на компоненты, которые при взаимодействии решают поставленную задачу. Компонентом может быть класс, модуль или функция.

***

## Функциональность

Главный инструмент при реализации функциональности — паттерн «Модуль». Он уже был рассмотрен в теме про модули. 
Кратко повторим: модуль — это функция и данные, необходимые для её выполнения. Модуль атомарен. Некоторые его свойства:

- Инкапсуляция данных;
- Управление зависимостями (создание структуры подключаемых данных);
- Не засоряет глобальный контекст приложения.

С точки зрения JavaScript небольшой пример, который резюмирует поведение паттерна «Модуль»:

Резюме для реализации композиции в ваших проектах:

- Минимизировать использование глобальных зависимостей.
- Не использовать неявные зависимости — все зависимости модуля должны быть явно прописаны.
- Минимизировать связи между модулями. В помощь — «Наблюдатель», «Медиатор».

Что ещё можно посмотреть:

- Event driven development;
- Inversion of Control и Dependency Injection.

***
## MVC

Классический и простой способ построения структуры приложения — шаблон MVC (Модель-Вид-Контроллер или Модель-Состояние-Поведение). Основная цель данного шаблона — отделение бизнес-логики от пользовательского интерфейса. 
По итогу приложение становится легче масштабировать, проще тестировать, поддерживать, сопровождать и реализовывать. 
Что нам гарантируют модели в MVC:

- Не управляют отображением данных. То есть не генерируют никакой HTML-разметки;
- Не взаимодействуют напрямую с пользователем;
- Содержат именно бизнес-логику приложения: методы для получения и обработки данных;
- Могут хранить в себе данные, и они могут взаимодействовать с другими моделями.

### Представительский уровень в MVC (он же view, вью):

- Несут ответственность за отображение данных. Содержат в себе вызовы шаблонизаторов, создание блоков, компонент и подобных вещей;
- Получают данные напрямую от моделей или контроллеров;
- Являются посредниками между пользователем и контроллером;
- Взаимодействуют с моделями посредством контроллеров.

### Контроллеры в MVС:

- Ответственны за взаимодействие между представительским уровнем, моделями, а также взаимодействие между «вьюшками»;
- Являются связующим звеном приложения;
- Содержат минимум бизнес-логики и должны быть максимально простыми в конфигурации. Данное свойство позволяет удобно вносить изменения и расширять приложения;
- Логика контроллера по большей части типична и выносится в базовые классы.

Контроллер отличается от моделей тем, что у последних логика, как правило, специфична для конкретного приложения.
Соберём всё вместе и сделаем шаг в сторону реализации MVC-приложения.

- Шаг 1. Создаём базовый класс (он же View в MVC);
- Шаг 2. Наследуем от него страницы — Chats и т. д.;
- Шаг 3. Внутри описываем отображение определённой части приложения;
- Шаг 4. Содержимое генерируем с помощью шаблонизатора;
- Шаг 5. Создаём сервисы и модули для управления бизнес-логикой работы с данными (а-ля модели);
- Шаг 6. Настраиваем взаимодействие сервисов и вьюшек через контроллеры. Например, через паттерн «Медиатор».

На основе таких компонентов можно, используя композицию, создавать отдельные блоки (в нашем случае это могут быть страницы) и другие компоненты. Компоненты могут состоять из других компонентов, потому что композиция легко применима к такому процессу как «лего-сборка» вьюшек.
В каждый момент активен только один блок. Во время работы приложения — управление передаётся между различными блоками. 
Необходимо максимально отделить модели (сервисы) от представительского уровня. Их связность должна быть нулевой. Всё делается через контроллеры. Здесь поможет декомпозиция.