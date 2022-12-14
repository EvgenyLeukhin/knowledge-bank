---
title: DOM-дерево
sidebar_position: 20
---

# DOM-дерево

Some content

## Обработка контента элементов

```js
document.querySelector('.total__button').addEventListener('click', applyDiscount);

let discont = false;

function applyDiscount() {
  if (!discont) {
    discont = true;
    getDomNodesBySelector('.price-value').forEach(el => {
      el.innerText = el.innerText * 0.85;
    });

    const totalPriceEl = document.querySelector('.total-price-value');
    totalPriceEl.innerHTML = totalPriceEl.innerHTML * 0.85;   
  }   
}
```
