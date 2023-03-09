---
id: yzeCj7eWARDSZdjom79tm
title: Generate Password
desc: ''
updated: 1634173367162
created: 1634172579468
---

``` bash
tmpPASSWORD=`tr -cd '[:alnum:]' < /dev/urandom | fold -w31 | head -n1`
```
