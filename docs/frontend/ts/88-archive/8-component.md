---
title: React-компонент
sidebar_position: 8
---

## Props (I вариант)

Generic type.

```tsx
type TProps = {
  prop1: string;
  prop2: number;
};

const SomeComp: React.FC<TProps> = ({ prop1, prop2, style }) => {
  return <div>SomeComp</div>;
};
```

---

## Props (II вариант)

Типизация props.

```tsx
type TProps = {
  prop1: string;
  prop2: number;
};

const SomeComp = ({ prop1, prop2 }: TProps) => {
  return <div>SomeComp</div>;
};
```

---

## Children and style type

```ts
type TProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};
```

---

## Mix props

```tsx
export type MixProps<P = {}> = P & {
  className?: string;
  style?: React.CSSProperties;
};

// props компонента
interface IProps {
  onClick?: () => void;
  disabled?: boolean;
}

// className и style - общие пропсы из MixProps
// onClick и disabled - кастомные пропсы компонента

// использоание MixProps
const GameButton: React.FC<MixProps<IProps>> = ({
  className,
  onClick,
  style,
  children,
  disabled,
}) => {
  return (
    <button onClick={onClick} style={style} disabled={disabled}>
      {children}
    </button>
  );
};

export { GameButton };
```

---

## Передача всех пропсов одного компонента в другой (расширение)

```tsx
import React from 'react';

// mui
import { TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';

// utils
import { generatedFormError } from 'utils/formError';

// styles
import cn from 'classnames';
import styles from './index.module.scss';

// кастомные пропсы
interface IInputProps {
  uiError?: generatedFormError | undefined | boolean;
  className?: string;
  showErrorMessage?: boolean;
}

// расширение пропсов
const UiInput: React.FC<TextFieldProps & IInputProps> = ({
  label,
  uiError,
  className,
  showErrorMessage = true,
  ...props
}) => {
  const hasError =
    (typeof uiError === 'object' && uiError.error) ||
    (typeof uiError === 'boolean' && uiError);

  return (
    <div className={`tms-input ${styles.formControl}`}>
      {label && <label>{label}</label>}

      <TextField
        className={cn(styles.input, className, {
          [styles.error]: hasError,
        })}
        variant='outlined'
        {...props} // передача всех встроенных props
      />

      {!!uiError &&
        typeof uiError === 'object' &&
        uiError.helperText &&
        showErrorMessage && (
          <div className={styles.errorText}>{uiError.helperText}</div>
        )}
    </div>
  );
};

export default UiInput;
```
