---
title: Консоль
sidebar_position: 3
---

export const CODE = ({children}) => (
  <code style={{ color: 'deeppink' }}>
    {children}
  </code>
);

## GIT

### Настройка

- <CODE>git config --list</CODE> - Показывает список конфигураций
- <CODE>git config --global user.name "Username"</CODE> - Установить глобальное имя пользователя
- <CODE>git config --global user.email "user@email.com"</CODE> - Установить глобально адрес почты пользователя
- <CODE>git config --global push.default simple</CODE> - Настройка команды git push. Будет пушить только в текущую ветку
- <CODE>git help &lt;git_command&gt;</CODE> - Справочник для отдельных гит-команд

### Репозиторий

- <CODE>git init (--bare)</CODE> - Создать (только для истории, без файлов)
- <CODE>git clone &lt;path&gt; (.)</CODE> - Склонировать (в текущую директорию)
- <CODE>git remote add &lt;rep_name&gt; &lt;path&gt;</CODE> - Привязать удаленный репозиторий
- <CODE>git remote rm &lt;rep_name&gt;</CODE> - Отвязать удаленный репозиторий
- <CODE>git remote -v</CODE> - Посмотреть привязанные репозитории

### Ветки

- <CODE>git branch (-v)</CODE> - Показать все ветки репозитория (с инфой), текущую ветку
- <CODE>git branch &lt;branch_name&gt; </CODE>- Создать новую ветку
- <CODE>git checkout &lt;branch_name&gt; </CODE>- Переключиться в указанную ветку
- <CODE>git checkout (-b) &lt;branch_name&gt;</CODE> - Создать новую ветку (и сразу переключиться в неё)
- <CODE>git checkout -b &lt;branch_name&gt; &lt;commit_hash&gt;</CODE> - Создать новую ветку (и сразу переключиться в неё) от указанного коммита
- <CODE>git branch -d (-D) &lt;branch_name&gt;</CODE> - Удалить указанную ветку (принудительно)
- <CODE>git merge &lt;branch_name&gt;</CODE> (--ff-only) - Сделать слияние указанной ветки с текущей (принудительно)
- <CODE>git merge --abort </CODE>- Отменить слияние


### Изменения

- <CODE>git status</CODE> - Статус файлов
- <CODE>git add &lt;filename&gt; &lt;filename2&gt; (.)</CODE> - Добавить указанные (все) измененные файлы к коммиту
- <CODE>git checkout &lt;filename&gt; &lt;filename2&gt;</CODE> - Убрать указанные измененные файлы из коммита
- <CODE>git checkout &lt;filename&gt; &lt;commit_hash&gt;</CODE> - Вернуть состояние файла, какое оно было в указанном коммите
- <CODE>git checkout -- .</CODE> - Убрать измененния во всех файлах
- <CODE>git reset HEAD &lt;filename&gt;</CODE> - Если случайно добавили файл, а потом решили, что нужно его убрать из коммита, но при этом не удалять в нём изменения
- <CODE>git rm (--cached) &lt;filename&gt;</CODE> - Удалить файл из коммита и с диска (не удалять с диска), если случайно добавили ненужный файл в коммит и закоммитили его, далее выполнить команду ниже
- <CODE>git commit --amend --no-edit</CODE> - Измнить последний коммит, без изменения сообщения, если удалялись или изменялись файлы в коммите
- <CODE>git commit -m "&lt;commit_message&gt;"</CODE> - Создать коммит
- <CODE>git commit --amend -m "&lt;commit_message&gt;"</CODE> - Измнить коммит-сообщение
- <CODE>git diff &lt;filename&gt;</CODE> - Посмотреть непроиндексированные изменения (до git add)
- <CODE>git diff --staged &lt;filename&gt;</CODE> - Посмотреть проиндексированные изменения (после git add)
- <CODE>git log (-3)</CODE> - Получить список коммитов до текущего (последних трёх)
- <CODE>git log --oneline</CODE> - Получить список коммитов до текущего в одну строку
- <CODE>git log --all</CODE> - Получить всю историю (не только до текущего)
- <CODE>git log --oneline --all --graph</CODE> - Получить всю историю (с графиком)
- <CODE>git show &lt;commit_hash&gt;</CODE> - Посмотреть какие были изменения в этом коммите
- <CODE>git cat-file -p &lt;commit_hash&gt;</CODE> - Посмотреть информацию о коммите
- <CODE>git checkout &lt;commit_hash&gt;</CODE> - Переключиться в указанный коммит
- <CODE>git checkout &lt;branch_name&gt;</CODE> - Переключиться в последний коммит указанной ветки
- <CODE>git reset &lt;commit_hash&gt; (--hard)</CODE> - Сбросить историю до указанного коммита (принудительно)
- <CODE>git clean -f -d</CODE> - Удалить лишние файлы

### Отправка / Принятие

- <CODE>git pull &lt;remote_name&gt; &lt;branch_name&gt;</CODE> - Принять изменения
- <CODE>git push &lt;remote_name&gt; &lt;branch_name&gt;:&lt;remote_branch_name&gt; (-f)</CODE> - Отправить изменения (принудительно)

### Rebase

Перебазирование ветки, сдвигаем первый коммит дочерней ветки в состояние последнего коммита родительской.

Актуально, когда родительская ветка наполниласть новыми коммитами после создания дочерней ветки и при этом перебазировании можно заблаговременно исправить все конфликты, находясь в дочерней ветке.

1. Переключаемся в родительскую ветку
<CODE>git checkout &lt;parent_brunch_name&gt;</CODE>

2. Забираем все новые коммиты
<CODE>git pull origin &lt;parent_brunch_name&gt;</CODE>

3. Переключаемся в дочернюю ветку
<CODE>git checkout &lt;child_brunch_name&gt;</CODE>

4. Перебазируемся в родительскую ветку. При этом могут возникать конфликты, которые нужно разрешать
<CODE>git rebase &lt;parent_brunch_name&gt;</CODE>

5. Разрешаем конфликты, сохраняем, добавляем разрешенные файлы в отслеживание
<CODE>git add &lt;conflict_file_name&gt;</CODE>

6. Продолжаем перебазирование (5 и 6 пункты могут повторяться несколько раз)
<CODE>git rebase --continue</CODE>

7. Если все конфликты решены и перебазирование закончено, то можно форсированно пушить изменения дочерней ветки
<CODE>git push origin -f</CODE>


### Squash commits

Схлопывание нескольких коммитов в один.

Актуально, когда мы имеем много непонятных коммитов в процессе разработки и хотим оставить один понятный, когда работа по созданию нового функционала уже закончена, и при этом в истории останется один понятый коммит.

1. Делаем ребейз ветки (интелектуальный), возможны моменты, описанные выше.

<CODE>git rebase -i &lt;parent_brunch_name&gt;</CODE> <br /><br />

```
1. pick
2. pick -&gt; s
3. pick -&gt; s
...
10. pick -&gt; s
```

2. Меняем в vim pick -&gt; s (или squash), кроме первого коммита

3. Пишем финальный commit-message
"Add new feature"

4. Форсированно пушим эти изменения
<CODE>git push origin -f</CODE>

### Cherry pick

<CODE>git cherry-pick &lt;commit-hash&gt;</CODE> - Влить изменения определенного коммита в текущую ветку

***

## SSH

1. Во время установки Git устанавливаем OpenSSH-клиент
2. В директории пользователя ОС создаём папку .ssh
3. В этой директоии создаём файл config без разрешения, в котором будет находиться список хостов.

```
# github.com
Host github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa

# gitlab.com
Host gitlab.com
Preferredauthentications publickey
IdentityFile ~/.ssh/id_rsa

// old
# github.com
HostName github.com
User git
AddKeysToAgent yes
PubkeyAuthentication yes
IdentityFile ~/.ssh/id_rsa
PreferredAuthentications publickey

# Some site
Host some_server
Hostname 192.168.12.12
# gitLab.com
Host gitlab.com
RSAAuthentication yes
IdentityFile ~/.ssh/id_rsa

# git.codenetix.com
Host git.codenetix.com
RSAAuthentication yes
IdentityFile ~/.ssh/id_rsa

# github.com
Host github.com
RSAAuthentication yes
IdentityFile ~/.ssh/id_rsa
```

4. Пишем команду в этой директории для гинерации ключей ```ssh-keygen -C "Jenya@FERMA21"```
5. Добавляем содержимое сгенерированого публичного ключа ```id_rsa.pub``` в конец строки файла ```.ssh/autorized_keys``` на сервере
6. Можно заходить на сервер командой ```ssh some_server``` и пользоваться гитом

***

## VIM

```vim <filename>``` - Редактирование файла

```cat <filename>``` - посмотреть содержимое файла

Режим редактирования: ```i``` или ```Insert```

```
:w - save
:w! - save readonly file
:q - quit
:wq - save and quit
```

***

## CLI

- ```pwd``` - текущая директория
- ```clear``` || ```cls``` - очистить экран (Crtl + L)
- ```ls``` - аналог DIR
- ```ls -a``` - все файлы
- ```ls -1``` - ... в один столбец
- ```touch``` - создать файлы
- ```rm``` - удалить
- ```cp``` - аналог copy
- ```mv``` - аналог move
- ```mkdir``` - создать директорию
- ```rmdir``` - удалить пустую директорию
- ```rmdir -rf``` - удалить непустую директорию
- ```cat``` filename - посмотреть содержимое файла
- ```start``` . - открывает текущую директорию в проводнике
- ```del``` - удалить
- ```move``` - переместить
- ```rename``` - переименовать
- ```copy``` - копировать
- ```xcopy``` - копировать файлы в папке
- ```color``` - цвет
- ```tree``` - дерево
- ```dir``` - директория
- ```ipconfig``` - сеть
- ```help``` - помощь
- ```echo``` - редактирование

### Архивация файлов

```tar -cf ~/some_arh.tar folder/```

или

```tar -czf ~/some_arh.tgz folder/``` - создание архива с сжатием

- ```tar``` - команда архивировать
- ```-cf``` - создать несжимаемый архив
- ```~/some_arh.tar``` - файл архива
- ```folder/``` - какую директорию архивировать

### Скачать созданный архив через ssh-протокол

```scp okcenter:~/some-arh.tar .```

или

```scp okcenter:~/some-arh.tgz```

- ```scp``` - команда скачать
- ```okcenter``` - ssh-хост
- ```:~/some_arh.tar``` - путь до файла
- ```.``` - скачать в текущую директорию
