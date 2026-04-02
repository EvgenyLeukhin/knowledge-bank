---
title: Good practice
sidebar_position: 10
---

## Colors in JS

```ts
export enum ColorList {
  // font
  FONT_PRIMARY = '#333F48',
  FONT_SECONDARY = '#9199A3',
  GRAY_LIGHT = '#f8f9fb',
  GRAY_MIDDLE = '#E2E2E2',

  // accents
  PRIMARY = '#8168F0',
  BLUE = '#0087CD',

  // success
  GREEN = '#31C2A7',
  GREEN_LIGHT = 'rgb(63, 195, 128)',

  // warning
  ORANGE = '#F8A100',
  YELLOW = '#fff288',

  // error
  RED = '#FF0066',
  RED_SECONDARY = '#FF3399',
  RED_LIGHT = '#FE77AD',
}

//
```

```jsx
// `${ColorList.RED_LIGHT}30` = rgba(254, 119, 173, 0.19)
<div
  style={{
    backgroundColor: row.error ? `${ColorList.RED_LIGHT}30` : 'inherit',
  }}
>
  ...
</div>
```

---

## Copy to clipboard

```ts
// без fallback
const copyErrorToClipboard = (errorText: string) => {
  navigator.clipboard.writeText(errorText);
};

// c fallback (async function)
const copyErrorToClipboard = async (errorText: string) => {
  if (!errorText) return;

  try {
    await navigator.clipboard.writeText(errorText);
  } catch {
    // Fallback для окружений без Clipboard API
    const textArea = document.createElement('textarea');
    textArea.value = errorText;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
};
```
