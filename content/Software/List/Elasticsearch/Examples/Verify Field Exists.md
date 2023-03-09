---
id: RMYYOkLenrE1JbMZkh0vg
title: Verify Field Exists
desc: ''
updated: 1633884860486
created: 1633824688832
---

``` json
{
    "query": {
        "bool": {
        "must": [{
            "exists": {
            "field": "msg.content.type"
            }
        }]
        }
    }
}
```
