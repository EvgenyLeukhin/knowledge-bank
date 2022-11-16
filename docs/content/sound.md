---
title: Звукозапись
sidebar_position: 2
---

export const H3 = ({children}) => (
  <h3 style={{ color: '#65BAAF' }}>
    {children}
  </h3>
);


## Logic Pro X

<a href="https://evgenyleukhin.github.io/knowledge-bank/pdf/logic-pro-user-guide.pdf" target="_blank">logic-pro-user-guide.pdf</a>


<H3>Настойки программы (Ctrl + ,) - Preferences</H3>

```
- Настройка аудио-устройства: General -> Audio (Input/Output device)
- Изменение цифровой задержки: I/O Buffer size (64, 128, 256)
- Recording (Формат файла записи): .AIFF или .WAV
- My info: Редактирование пользователя
- Расширенные настройки: Cmd + , -> Advanced -> Show advanced tools -> Audio 
```

***

<H3>Создание проекта (Cmd + N)</H3>

```
- File -> New from Template
- Hip-hop, Electronic, Songwriter, Orchestral, Multi-track, Music for picture or from scratch 
```

***

<H3>Создание дорожки (Cmd + Alt + N)</H3>

```
- Audio - Choose I/O - Запись голоса или инструмента микрофоном
- Ascending - ???
- Load default patch - ???
- Drummer - Genre - Выбираем жанр и создаём виртуального барабанщика
- Guitar or Bass - Choose I/O - Пресет для гитары или баса
- Ascending - ???
- Load default patch - ???
- Software instrument - Виртуальный инструмент из библиотеки, управление с помощью компьютера или MIDI-клавиатуры
- External MIDI - ???
```

***

<H3>Верхняя панель управления (Topbar)</H3>

```
- Кнопки отрытия окон слева:
  - БИБЛИОТЕКА, Library (Y)
  - ИНСПЕКТОР, Inspector (I)
  - ПОМОЩЬ, Help button (Shift + /)
  - СУБ-ПАНЕЛЬ, Toolbar button, открытие суб-панели сверху
  - УМНЫЕ НАСТРОЙКИ, Smart Controls (B)
  - МИКШЕР, Mixer (X)
  - РЕДАКТОР, Editor (E)

- ТРАНСПОРТ, Кнопки плейера, Transport buttons:
  Play - имеет настройки, stop, record, rewind, forward, cycle

- LCD (Дисплей)
  - Можно кастомизировать -> Customize Control Bar and Display
  - РЕЖИМЫ И ФУНКЦИИ (Modes and functions).
  - Low-latancy mode, tuner, Metronom (Count click, Click), Master Volume

- Кнопки отрытия окон справа:
  - ИСТОРИЯ, List Editors (D)
  - БЛОКНОТ (Alt + Cmd + P)
  - ПРОВОДНИК ЛУПОВ, LOOPS Browser (O)
  - ПРОВОДНИК ФАЙЛОВ в ОС (F)
```

***

<H3>Верхняя суб-панель управления (Toolbar)</H3>

```
- Track zoom - можно увеличить отдельную дорожку
- Zoom - увеличить все дорожки, растянуться по верникали
- Colors - поменять цвета дорожек
- Остальные пока ???
```

***

<H3>Заголовки дорожек (Tracks headers)</H3>

```
- Добавить дорожку (Alt + Cmd + N)
- Создать такую же дорожку как выделенную, Dublicate (Cmd + D)
- Открытие доп. панели, Global track button (G), ПКМ для открытия списка
  - Arrangement - Структура композиции (Intro, Verse, Chorus, Bridge, Outro)
  - Tempo - Темп (можно изменять темп во времени)
  - Transposition - Транспонирование
  - Marker - ???
  - Signature - ???
  - Movie - ???

- Name и Стрелочка раскрытия субтреков
- Mute, Solo, Record (Enable, Disable)
- Input monitoring (Hear or don't hear input signal)
- Volume range
- Balance pan
```

***

<H3>Рабочая область, где записываются дорожки (Workspace)</H3>

***

<H3>Библиотека (Sound Library) (Y)</H3>

```Logic Pro X -> Sound Library -> Open Sound Library Manager```

***

<H3>Инспектор (I)</H3>

***

<H3>Эффекты, Audio FX</H3>

```
Эквалайзер
Реверб
Компрессор
Педалборд
Определение темпа: Audio FX -> Metring -> BTM Counter
```

***

<H3>Флекс</H3>

#### Флекс волны (для голоса)

```Выбираем трек голоса -> Включаем режим Flex -> Flex pitch (Выбор алгоритма) -> E -> Track```

#### Параметры для регулирования (Ручной тюнинг голоса):

```
ПКМ -> Set to perfect pitch

  1. Сверху-слева: Pitch drift - начало волны
  2. Сверху-посередине: Fine pitch - настройка ноты (Не нужно перебарщивать - будет слышно)
  3. Сверху-справа: Pitch drift - конец волны
  4. Снизу-слева: Gain - усиление ноты
  5. Снизу-посередине: Vibrato - настройка кривизны волны
  6. Снизу-справа: Shift - Сдвиг волны вверх-вниз
```

#### Флекс ритма

```Flex -> Flex pitch```

***

<H3>Автоматизация (A)</H3>

***

<H3>Библиотека лупов (O)</H3>

***

<H3>Запись аудио с ОС</H3>

```
- Focusrite Control -> Loopback 1-2 -> Playback 1-2 (Stereo) -> Unmute
- Logic Pro -> New audio track -> Input 5-6 -> No input monitoring -> Mute track
- Play system audio signal -> You can hear it from System playback on your output device
```

***

<H3>Миксдаун проекта, сведение (Bounce)</H3>

```
Ctrl + A (или выделить нужные дорожки/фрагменты) -> 
File -> 
Bounce -> 
Project or Section -> 
PCM (.AIFF or .WAV), MP3 -> OK 
```

***

<H3>Горячие клавиши</H3>

|ACTIONS |(Действия)|
|---|---|
|SPACE|Play, stop (Play from last locate position)|
|R|Record|
|K|Метроном вкл/выкл|

***

|TRACK|(Дорожка)|
|---|---|
|S|Solo|
|M|Mute|
|ENTER|To start track, к началу трека|
|E|Editor, Редактирование|
|Backspace|Удалить|
|Alt + ЛКМ|Перетаскивание копии трека на другую дорожку|
|H|Hide, Hidden track, спрятать дорожку|
|L|Loop copy, вставить копии до конца трека|

***

|SCALE|(Масштабирование)|
|---|---|
|Z|Увеличить трек|
|Cmd + Up, Dowm, Left, Right|Масштабировать вручную|
|Zoom touchpad|Масштабировать вручную|

***

|ОКНА|(Windows)|
|---|---|
|X|Mixer|
|I|Inspector|
|Cmd + 1|Main screen|
|Cmd + 2|Mixer|
|Cmd + 3|Instrument controls|
|Cmd + 4|MIDI edit screen|
|Cmd + 5|Notes edit screen|
|Cmd + 6|Wave graph screen|
|Cmd + 7|Event list|
|Cmd + 8|Project info|
|Cmd + K|Inspector|

## Ableton Live 11 Lite

TODO
