---
id: Ij2dxbXUbDzrxdxnZnrOM
title: Append File
desc: ''
updated: 1637000575870
created: 1637000464481
---

[javascript - How to append to a file in Node? - Stack Overflow](https://stackoverflow.com/questions/3459476/how-to-append-to-a-file-in-node)

``` javascript
import fs from 'fs';
// const fs = require('fs');
fs.appendFileSync('message.txt', 'data to append');
```
