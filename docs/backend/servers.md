---
title: Серверы
sidebar_position: 3
---

## Apache 

[apache.org](https://httpd.apache.org/)

***

## Nginx

[nginx.org](https://nginx.org/ru/)

***

## Express

[expressjs.com](https://expressjs.com/en/starter/hello-world.html)

### Basic config

```js  title="express.js"
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

### Run server

```
node express.js
```
