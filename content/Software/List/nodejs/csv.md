---
id: yZ52pIqTXvhsRJJDFQ9VY
title: Csv
desc: ''
updated: 1642473736337
created: 1636486276809
---

* [How to read a CSV file with Node.js](https://flaviocopes.com/node-read-csv/)

## Reading JSON

``` javascript
const fs = require('fs')
const neatCsv = require('neat-csv')

import fs from 'fs';
import neatCsv from 'neat-csv'

fs.readFile('./file.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(await neatCsv(data))
})
```

## Writing JSON

``` javascript
fs.writeFileSync('mahFile.json', JSON.stringify(student));
```