---
title: clickOutside ✓
sidebar_position: 8
---

```tsx
import { useEffect } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLDivElement>, action: () => void): void => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // make some action if click outside
        action();
      }
    }

    // Bind the event listener
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mouseup', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useClickOutside;
```

Применение:

```tsx
import useClickOutside from '@utils/hooks/useClickOutside';

...

const wrapperRef = useRef<HTMLDivElement>(null);

// клик outside, чтобы dropdown закрывался (нужно передать ref)
useClickOutside(wrapperRef, () => setDropdownOpen(false));

... 

<div ref={wrapperRef} className={styles.CustomSelect__wrapper}>
...
</div>
```
