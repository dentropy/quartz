---
id: TcdXywiCtY0M0kG1RDG86
title: KeybaseListAllUsers
desc: ''
updated: 1638202540101
created: 1638202368950
---

KeybaseListAllUsers

``` json
GET /keybase-*/_search
{ 
  "aggs": {
    "topics": {
        "terms": {
            "field": "msg.sender.username",
            "size": 250
        }
    }
  },
  "size":0
}
```
