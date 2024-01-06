---
title: Объект вместо вызова функции
sidebar_position: 10
---

```tsx
import { ColorList } from 'interfaces/colors';

type TDirection = 'left' | 'up' | 'right' | 'down';

type TProps = {
  stroke?: string;
  direction?: TDirection;
};

const Arrow = ({
  // дефолтные
  stroke = ColorList.FONT_SECONDARY,
  direction = 'down',
}: TProps) => {
// сохраняем варианты в значение полей
  const directions: Record<TDirection, number> = {
    left: 90,
    up: 180,
    right: 270,
    down: 0,
  };

  const selectedDirection = directions[direction];

  return (
    <svg
      style={{ transform: `rotate(${selectedDirection}deg)` }}
      width='14'
      height='8'
      viewBox='0 0 14 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1L7 7L13 1'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Arrow;
```
