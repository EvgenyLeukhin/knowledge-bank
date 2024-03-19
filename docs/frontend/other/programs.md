---
title: Программы
sidebar_position: 5
---

## Кроссплатформенные 

- Google Chrome, Mozilla Firefox
- VS Code, Sublime Text 3
- Skype, Slack, Telegram, Zoom, WhatsApp, Discord, Yandex Telemost
- Steam, Figma, PuntoSwitcher
- node + npm + nvm

***

## MacOS

### Shortcuts

<kdb>Cmd + Shift + .</kdb> - показать скрытые файлы

---

* **DEVELOPMENT:**
  MAMP PRO, Insomnia, VS Code, Sublime Text 3, ResponsivelyApp, iTerm, XCode, Android Studio, Charles, Insomnia
* **INTERNET:**
  Chrome, Firefox, Edge, Yandex
* **DESIGN:**
  Pixelmator Pro, Photoshop, Figma, Zeplin
* **SOUND:**
  Logic Pro X, Garage Band, MainStage, Abelton Live, Guitar Pro, Universal Control, Focusrite control,
* **VIDEO:**
  Final Cut Pro, Downie 4, ScreenFlow, Movavi Screen Recorder, VLC, He3
* **PHOTO:**
  Luminar 4, Luminar AI, Luminar Neo, Anamorphic, VLC
* **MESSANGERS:** 
  Telegram, Slack, Skype, Zoom, Yandex.Telemost, Discord, WhatsApp
* **UTILITES:** 
  CleanMyMac X, Memory Clean 3, Commander One Pro, DisplayLink Manager, PuntoSwitcher, Transmission, DeepL
* **OFFICE:** 
  Pages, Numbers, PDF Reader Pro, Keynote

### [Homebrew](https://brew.sh/) 

Пакетный менеджер для MacOS.

Install: 
1. https://brew.sh --> ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)""```
2. Add Brew to PATH: 

- ```(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/evgenyleukhin/.zprofile```
- ```eval "$(/opt/homebrew/bin/brew shellenv)"```

* Git: ```brew install git```
* Wget: ```brew install wget```
* MC: ```brew install mc``` (Ctrl + O)
* nodejs: ```brew install node```
* yarn: ```brew install yarn```
* oh-my-zsh: ```sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"``` (Настройки ~/.zshrc)

#### Настройки

<iframe width="560" height="315" src="https://www.youtube.com/embed/TDVnk9RhYOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- Клавиатура -> Источники ввода -> Русская - ПК (чтобы на исправить . и ,). ? - будет Shift + 7.
- Клавиатура -> Источники ввода -> поменять местами, чтобы не было глюка с переключением раскладки
- Клавиатура -> Сочетание клавиш -> Выбрать следующий источник в меню ввода (сделать Cmd + Пробел, а Spotlight поменять на Option + Пробел)


#### Автозапуск

Apple  > «Системные настройки», нажмите «Основные»  в боковом меню, затем нажмите «Объекты входа»

***

## Windows

* **DESIGN:**
  Adobe Illustrator 2020, Adobe Photoshop 2020, Figma, Miro,
* **DEVELOPMENT:** 
  Filezilla, Git Bash, GitHub Desktop, Insomnia, Notepad3, Open Server x64, Sublime Text 3, Visual Studio Code, WebStorm 2021.2.2, Windows PowerShell, Android Studio, Insomnia
* **INTERNET:** 
  Discord, Firefox, Google Chrome, Google Docs, Google Drive, Google Sheets, Google Slides, Microsoft Edge, qBittorrent, Slack, Telegram, TikTok, Yandex, Zoom, Яндекс.Диск, Яндекс.Телемост,
* **OFFICE:** 
  Adobe Acrobat DC, Adobe Acrobat Distiller DC, LibreOffice, Lightshot, TeamViewer, WordPad, Блокнот, Калькулятор
* **PHOTO & VIDEO**: 
  Adobe Lightroom Classic, EOS Utility, Luminar AI, Lutcurve/Lutcurve, mpv, Picasa 3, Vegas Pro 13.0 (64-bit), VEGAS Pro 15.0, Windows Media Player
* **SOUND**: 
  Ableton Live 11 Lite, Adobe Audition 2020, Capture 3, Guitar Pro 7, Focusrite Control, REAPER (x64), Studio One 5, Universal Control, ASIO4ALL
* **TEST**: 
  AIDA64, Cinebench, CrystalDiskMark 8, FurMark, Novabench, WizTree
* **UTILITES:** 
  Armoury crate, CCleaner, DAEMON Tools Lite, Double Comander, Lively Wallpaper, Punto Switcher, UltraISO, Your Uninstaller! PRO
* **GAMES:** 
  Xbox, Steam, Oculus, AMD Software Adrenalin Edition

***

## Linux


### Через пакетный менеджер или браузер

Sublime Text 3, Chromium, Opera, Mozilla Firefox, Mozilla Thunderbird, Filezilla, Double Commander, Skype, Slack, Gparted, Deluge, Steam, Red Shift, Midnight Commander, SSH, Git + Git Extensions, XAMPP, Google Chrome (через браузер), Visual Studio Code (через браузер), [Lightshot](https://app.prntscr.com/en/wine-lightshot.html)

### Через консоль

#### git

```sudo apt install git```

```git --version```

***


#### Kdiff

```sudo apt install kdiff3```

```kdiff3 --version```

***

#### SSH

```sudo apt-get install openssh-server -y```

***

#### Midnight Commander

```sudo apt install mc```

***

#### Node.js

```curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -```

```sudo apt-get install -y nodejs```

***

#### nvm

```curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash```

Посмотреть версии какие есть: ```nvm ls-remote```

Установить версию: ```nvm install v10.15.1```

***

#### Кракозябры в Linux

```sudo apt-get install dconf-editor```

```dconf -> org -> x -> editor -> plugins -> preferences -> encoding -> auto-detected -> add WINDOWS-1251 (вторым параметром)```

***

#### Xneur (аналог Punto Switcher)

```sudo apt-get install gxneur```

#### FortiClient

1. Update Ubuntu 20.04 package lists: `sudo apt update`
2. Install FortiClient on Ubuntu 20.04: `sudo apt install forticlient`

Uninstall: `sudo apt autoremove --purge forticlient`

---

#### Display Link

1. Скачать "Synaptics APT Repository" (файл synaptics-repository-keyring.deb): `https://www.synaptics.com/products/displaylink-graphics/downloads/ubuntu`
2. Установить это ядро: `sudo apt install ./Downloads/synaptics-repository-keyring.deb`
3. Обновить: `sudo apt update`
4. Установить Dislplay Link: `sudo apt install displaylink-driver`

***

## Chrome plugins

* [Pix to pix](https://chrome.google.com/webstore/detail/pix-to-pix-pixel-perfect/binboaimbgchaamickjnhgjdccohndin?hl=ru) - наслоение для макета
* [Measure-it](https://chrome.google.com/webstore/detail/measure-it/jocbgkoackihphodedlefohapackjmna) - линейка
* [Page ruler](https://chrome.google.com/webstore/detail/page-ruler/jcbmcnpepaddcedmjdcmhbekjhbfnlff) - ещё линейка
* [NoMiner - Block Coin Miners](https://chrome.google.com/webstore/detail/nominer-block-coin-miners/jfnangjojcioomickmmnfmiadkfhcdmd) - блокировка "майнинга"
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - React
* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru) - Redux
* [Fake data](https://chrome.google.com/webstore/detail/fake-data-a-form-filler-y/gchcfdihakkhjgfmokemfeembfokkajj) - заполнение форм
* [Fake filler](https://chrome.google.com/webstore/detail/fake-filler/bnjjngeaknajbdcgpfkgnonkmififhfo) - заполнение форм
* [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg?hl=ru) - Узнать тех. стек сайта
* [Fonts ninja](https://chrome.google.com/webstore/detail/fonts-ninja/eljapbgkmlngdpckoiiibecpemleclhh) - Узнать какие шрифты на сайте

## Firefox plugins

* [No coin](https://addons.mozilla.org/ru/firefox/addon/no-coin/) - антимайнер
* [uBlock origin](https://addons.mozilla.org/ru/firefox/addon/ublock-origin/) - блокиратор рекламы
* [Browsec VPN](https://addons.mozilla.org/ru/firefox/addon/browsec/) - VPN ("подмена" IP-адреса)
* [Скачать музыку с ВК | VKD](https://addons.mozilla.org/ru/firefox/addon/%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D1%83-%D1%81-%D0%B2%D0%BA-vkd/) - cкачать музыку с VK

***

## Про Linux

Работа фронтенда связана не только с выполнением кода в браузере, но и его предварительной сборкой. В большинстве случаев, фронт после релиза собирается в CI, используя UNIX-подобную операционную систему. Поэтому создавать и тестировать код удобнее в схожих условиях.
MacOS или любой дистрибутив Linux — операционные системы, родственные UNIX. Если вы работаете в такой ОС — ничего менять не придётся.
Если используете Windows, вам повезло заняться веб-разработкой именно сейчас — в последние годы Microsoft стала дружелюбнее к UNIX. Теперь необязательно переходить на MacOS или Linux.
В то же время мы всё-таки рекомендуем поставить себе подсистему с Ubuntu (или другой UNIX-подобной системой) и обращаться к её утилитам и терминалу. Умение пользоваться UNIX-подобными системами — очень важная часть жизни разработчика. Речь не только о терминале, но и понимании файловой системы, ролевой модели и других особенностей. В большинстве компаний фронтенд и бэкенд разворачивают не на Windows. Также в UNIX-подобных операционных системах гораздо проще работать, поскольку сообщество разработчиков в UNIX больше и многие команды, которые вы будете видеть в README, описаны под UNIX-подобные системы. Для установки подсистемы Ubuntu следуйте инструкции на официальном сайте Microsoft.
Также можно установить дистрибутив Linux второй операционной системой. Сделать это помогут туториалы, такие как этот. Важно: если ни разу этого не делали, советуем скопировать критичные данные на внешний жёсткий диск или в облако (например Яндекс.Диск).
Третий вариант — использовать виртуальную машину. Это наиболее простой способ и вы точно не рискуете данными на вашем жёстком диске. Для этого можно использовать, например, VirtualBox или его аналоги. 

### Дистрибутивы Linux

Существует огромное количество дистрибутивов Linux, которые эволюционируют годами. На Github есть репозиторий, куда юзеры сабмитят новые дистрибутивы, которые появляются на этой известной в Linux сообществе таймлайн карте.
Дистрибутив Linux — это операционная система. Она создана из приложений, основанных на ядре Linux, и чаще всего у неё есть пакетный менеджер. Типичный дистрибутив Linux состоит из пакетов и утилит GNU, дополнительного софта, использует ядро Linux, имеет документацию и комьюнити. В десктоп дистрибутивах дополнительно поставляется среда для рабочего стола (самая популярная — GNOME).
Если хотите быстро научиться работать с UNIX-подобной системой, а именно с Ubuntu, и ближе познакомиться с командной строкой, вам поможет, например, текстовая версия курса “Complete intro to Linux and the CLI” от Брайана Хольта (на английском). 
Дистрибутивов Linux очень много. Ниже коротко расскажем о самых популярных. Важно помнить, что популярный не значит идеальный. Тема выбора дистрибутива по количеству холиваров не уступает вопросу «Какой JS-фреймворк лучше?».

Лучше ставить LTS-версию (Long Term Support), чтобы получить большую стабильность и регулярные обновления.

#### Debian

Debian является одним из самых старых дистрибутивов, основанных на ядре Linux. Основным принципом Debian является использование в дистрибутиве только свободного софта и софта с открытым кодом, что гарантирует свободу использования, изменения и распространения.  Debian является основанием для очень многих популярных дистрибутивов. Основными плюсами Debian можно считать высокую стабильность, выдающийся контроль качества, поддержку наибольшего количества архитектур процессора среди всех дистрибутивов Linux. В связи с этим Debian очень консервативен.

#### Ubuntu

Ubuntu является одним из самых распространённых дистрибутивов, фокусирующимся на  заранее запланированном регулярном выпуске обновлений, основанным на Debian. Основным ориентиром Ubuntu является ориентированность на удобство и простоту использования. Поддержкой и спонсированием системы занимается компания Canonical вместе со свободным сообществом. Одним из основных минусов Ubuntu является отсутствие обратной совместимости с Debian.

#### Linux Mint

Основанный на Ubuntu Linux Mint воплощает идею того, чтобы пользователь мог сразу использовать ОС без терминала. Дистрибутив сильно ориентирован на пользовательский опыт, поэтому очень подходит как первая UNIX-подобная система для нового пользователя. По умолчанию установлено больше ПО, чем на Ubuntu. При этом проект не ориентирован на высокую безопасность и толерантен к некоторым уязвимостям.
Arch Linux
Arch Linux следует философии KISS (“keep it simple, stupid”) и стремится доставить последние стабильные версии ПО, использую модель плавающих релизов. Поставляется с пакетным менеджером Pacman. Отличается минималистичностью дистрибутива, дружелюбной установкой и нацеленностью на серьёзную будущую кастомизацию пользователем. Нужно самостоятельно выбирать среду для рабочего стола, компоненты системы и нужные сервисы. Такой вариант больше всего подходит тем, кто уже давно пользуется линуксом и точно знает, чего хочет от ОС.

#### Manjaro

Manjaro основан на Arch Linux и основным его фокусом является удобство пользования, разумные дефолты, производительность и наличие возможности гибко кастомизировать ОС. Есть три основных версии Manjaro, поддерживающиеся сообществом и отличающиеся средой для рабочего стола (Xfce, KDE или GNOME).

#### Elementary OS

Ещё один основанный на Ubuntu дистрибутив с прицелом на пользовательский опыт, который можно рассматривать как первую UNIX-подобную систему для новичка. Визуально похожа на MacOS, хотя разработчики считают эту схожесть случайной. Ориентирована на быстроту, открытость и конфиденциальность.

#### Fedora

Fedora является продуктом компании Red Hat, которая известна своими стабильными и безопасными дистрибутивами для энтерпрайза. Изначально Fedora была направлена на тестирование пользовательского опыта для последующего применения фидбэка в коммерческих продуктах компании. Fedora нацелена на разработчиков и сфокусирована на безопасности, поддержки большого количества пакетов, при этом не жертвуя комфортом работы пользователя с ОС.

#### Bonus: Kali Linux

Kali Linux основан на Debian и предназначен для проведения тестов на безопасность, которая поддерживается и спонсируется компанией Offensive Security. Особую популярность дистрибутив получил после показа в нескольких эпизодах сериала про хакера Mr. Robot.
