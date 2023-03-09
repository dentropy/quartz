---
id: UXPYeOWSbm7mevAolR5Ve
title: Token Generation
desc: ''
updated: 1637606590097
created: 1637605960817
---

## Nodejs Random Token Generation


``` javascript
import crypto from 'crypto'; // Built into nodejs

crypto.randomBytes(24, function(err, buffer) {
    var token = buffer.toString('hex');
    console.log(token)
});

async function doAsync() {
async function GenerateToken() {
        let token = await crypto.randomBytes(24).toString('hex')
        return token
    }
    console.log(await GenerateToken())
}
doAsync()
```

* [javascript - Secure random token in Node.js - Stack Overflow](https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js)


## Research
* [uuid-token-generator - npm](https://www.npmjs.com/package/uuid-token-generator)
  * Need to test
* [rand-token - npm](https://www.npmjs.com/package/rand-token)
  * Doesn't work as module


