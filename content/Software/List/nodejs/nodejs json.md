## Reading JSON

``` javascript
import fs from 'fs';
let rawdata = JSON.parse(fs.readFileSync('./something.json'));

// Another Way
const fs = require('fs');
let rawdata = JSON.parse(fs.readFileSync('student.json'));
console.log(rawdata);
```

## Writing JSON

``` javascript
fs.writeFileSync('mahFile.json', JSON.stringify(student));
```

## Sources

* [Reading and Writing JSON Files with Node.js](https://stackabuse.com/reading-and-writing-json-files-with-node-js/)
