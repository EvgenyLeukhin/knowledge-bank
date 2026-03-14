---
title: Разгон ПК
sidebar_position: 10
---

## Процессор

`Amd Ryzen Master` - очень опасная программа, лучше не использовать её для разгона, так как она может менять множитель при запуске ОС, если будет неправильная настройка, то ОС будет всегда перезагружаться!

- Advanced → AMD Overclocking → `Precision Boost Overdrive`
- Curve Optimizer → Negative -> All cores → -`20`

- Advanced → PCI Subsystem Settings
  - Above 4G Decoding → `Enabled`
  - Resizable BAR → `Enabled`

- Advanced → AMD CBS → CPU Common Options
  - CPPC → `Enabled`
  - CPPC Preferred Cores → `Enabled`

---

## Оперативная память

- AI Tweaker → AI Overclock Tuner → `DOCP`
- Memory Frequency → `DDR4-3600`
- FCLK Frequency → `1800 MHz`
- DRAM Voltage → `1.40 V`

- Tweaker → DRAM Timing Control - Command Rate → `2T`

### Стабильная настройка 3600 (рекомендую)

AI Tweaker

- Memory Frequency → `DDR4-3600`
- FCLK Frequency → `1800 MHz`
- DRAM Voltage → `1.40–1.45 V`

### Напряжения

- CPU SOC Voltage → 1.10 V
- VDDG CCD → 1.00 V
- VDDG IOD → 1.00 V
- CLDO VDDP → 0.90 V

### Тайминги (хорошая отправная точка)

Если оставить DOCP и немного ужать:

- CL → `16`
- tRCDRD → `19`
- tRCDWR → `19`
- tRP → `19`
- tRAS → `36`

---

## Видеокарта

TODO
