---
title: Стилизация форм
sidebar_position: 10
---

## Стилизация чекбоксов и радио-кнопок

```html
<!--1. Связываем чекбокс с лейблом через id-->
<div class="form-group">
  <input type="checkbox" name="remember-me" id="remember-me-id">
  <label for="remember-me-id">Запомни меня</label>
</div>
```

```css
/* 2. Скрываем системный чекбокс */
.form-group input[type="checkbox"] {
  display: none;
}

/* 3. Готовим поле для псевдоэлемента лейбла */
.form-group input[type="checkbox"] + label {
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding-left: 32px;
}

/* 4. Лейбл при наведении */
.form-group input[type="checkbox"] + label:hover {
  text-decoration: underline;
  cursor: pointer;
}

/* 5. Стилизуем лейбл под чекбокс на поз. псевдоэлементе */
.form-group input[type="checkbox"] + label::before {
  content: '';
  position: absolute;
  height: 20px;
  width: 20px;
  border: 2px solid #000;
  left: -2px;
}

/* 6. Крестик появляется, если лейбл отмечен */
.form-group input[type="checkbox"]:checked + label::before {
  background: url(../img/icon-checkbox.png) no-repeat 50%;
}
```

### Стилизация состояний

```css
input[type="checkbox"]:checked, 
input[type="checkbox"]:enabled, 
input[type="checkbox"]:disabled {
  /* Стилизация состояний */
}
```

## Стилизация инпутов/селектов

### Placeholder 

```scss
// инпут в фокусе (набираемый текст)
input:focus { color: red; }

// Набранный текст (вне фокуса)
input { color: black; }

// инпут не в фокусе (ОТОБРАЖАЕТСЯ ЗНАЧЕНИЕ АТРИБУТА placeholder)
input:placeholder { color: gray; }

// инпут вне фокуса (С НАБРАННЫМ ТЕКСТОМ)
input[placeholder] { color: blue; }
```
