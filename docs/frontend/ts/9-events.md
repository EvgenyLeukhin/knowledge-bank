---
title: Эвенты
sidebar_position: 9
---

### HTMLInputElement / ChangeEvent

```tsx
const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  console.log(value);
};
```

---

### HTMLInputElement / FocusEvent

```tsx
const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  const value = event.target.value;
  console.log(value);
};
```

---

### HTMLInputElement / FormEvent

```tsx
const onLoginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (email && password) {
    let errors = await dispatch(login(email, password)) as unknown as boolean;
  }
}
```

---

### HTMLDivElement / MouseEvent

```tsx
const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
  const value = event.target.value;
  console.log(value);
}
```

### Автоподстановка event

```tsx
<UiRemoveIcon
    title='Удалить'
    width={15.75}
    height={18.38}
    color={hasAccess ? 'primary' : 'secondary'}

    // полная запись
    onClick={(e: React.MouseEvent<HTMLSpanElement>) => removeHandle(е)}

    // можно записывать коротко без e
    onClick={removeHandle} 
/>

// метод-обработчик
const removeHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();

    if (hasAccess) {
        dispatch(setConfirmationOpen({
            dialogType: 'positive',
            dialogText: `Вы действительно хотите удалить шаблон ${data.name}?`,
            confirmationFunction: () => {
                dispatch(deleteExpressIntervalTemplateByUuid(data.uuid));
            }
        }))
    }
}
```
