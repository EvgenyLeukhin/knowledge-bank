---
title: Test-cases
sidebar_position: 4
---


![test-cases](/img/qa/test-cases.png)

Более подробный детализированный чеклист, расписанный по шагам (набор действий). Можно оформлять также в виде таблиыы. Шаги пути пользователя. (Систематизация и документация процесса тестирования)

Если проект объемный, длительный, версионный, большая команда, то лучше использовать тест-кейсы.

Низкоуровневый документ - с деталями. Чеклист по вертикали, тест-кейс по горизонтали

### Требования к тест-кейсу:

- должен быть понятным
- точное и подробное описание
- независимым от других тест-кейсов
- соответствующий требованиям
- воспроизводимым и переиспользуемым
- единообразие оформления

### Примерный список тест-кейсов

|ID|Приоритет|Требования|Модуль|Заголовок|Шаги|Ожидаемый результат|Фактический результат|Дефект|
|---|---|---|---|---|---|---|---|---|
|TC1|1 (Smoke)|REQ1|Регистрация нового пользователя|Регистрация на мобильном|1. Открыть сайт|Сайт загружен| | |
|| | | | |2. Окрыть страницу регистрации|Форма окрывается| | |
|| | | | |3. Ввести номер телефона|Введенный номер отображается| |

### Примерные колонки тест-кейсов

- **id**
- **title**
- **requirements link** - ссылка на требования
- **author**
- **priority**
- **modules or sub-module**
- **precondition** - условие, чтобы достичь этого тест-кейса (что нужно сделать, чтобы ...). Пишется в прошедшем времени (Открыта главная страница).
- **steps** - шаги, пишутся в будущем времени (ввести номер телефона)
- **postcondition**
- **expected result**
- **actual result** - (можно не использовать, а пользоваться статусом). Лучше описывать в задачах и баг-репортах
- **status** - passed/success, failed, blocked
- **attachments** - приложенные файлы

### Типы тест-кейсов

- **Позитивный**
- **Негативный**
- **Деструктивный** - нефункциональное тестирование для нахождения порога устройчивочти
- **Свободный** - одиночный, независимый
- **Последовательные** - логически связанные, идут друг за другом

## Приоритет тест-кейсов

- Высокий (дымовое)
- Средний (функциональное)
- Низкий (нефункциональное)

### Жизненный цикл тест-кейса

![test-case-lifecycle](/img/qa/test-case-lifecycle.png)

### Инструменты для тест-кейсов

- [Jira + Zephyr](https://marketplace.atlassian.com/apps/1014681/zephyr-squad-test-management-for-jira?tab=overview&hosting=cloud)
- [TESTRAIL](https://www.gurock.com/testrail/)
- [TESTLINK](https://testlink.org/)
- [PRACTITEST](https://www.practitest.com/)
- QTEST