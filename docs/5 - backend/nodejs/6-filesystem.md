---
title: Взаимодействие с файлами
sidebar_position: 5
---

## Пример nodejs-скрипта, который читает и изменяет файлы внутри ОС

```js
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'src');

// пробежка по файлам
function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (p.endsWith('.scss')) out.push(p);
  }
  return out;
}

// изменение внутри файлов
function migrateContent(content) {
  // Replace @import "..." -> @use "..." as *;
  // Keep URLs and css imports intact.
  return content.replace(
    /^\s*@import\s+(['"])([^'"]+)\1\s*;\s*$/gm,
    (line, quote, rawPath) => {
      const p = rawPath.trim();
      if (
        p.startsWith('url(') ||
        p.startsWith('http://') ||
        p.startsWith('https://')
      )
        return line;
      if (p.endsWith('.css')) return line;

      // sass-loader legacy "~" prefix + project alias
      const normalized = p.startsWith('~') ? p.slice(1) : p;
      return `@use ${quote}${normalized}${quote} as *;`;
    },
  );
}

// функция для запуска
function main() {
  const files = walk(SRC_DIR);
  let changed = 0;

  for (const file of files) {
    const before = fs.readFileSync(file, 'utf8');
    const after = migrateContent(before);
    if (after !== before) {
      fs.writeFileSync(file, after);
      changed += 1;
    }
  }

  console.log(`migrate-scss-imports: changed ${changed} file(s)`);
}

main();
```
