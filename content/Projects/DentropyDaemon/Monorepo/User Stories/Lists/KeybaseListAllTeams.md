---
id: D2BWUarWSm9P9f4oXk58o
title: KeybaseListAllTeams
desc: ''
updated: 1638201759118
created: 1638201726144
---

``` json
GET /keybase-*/_search
{ 
  "aggs": {
    "topics": {
        "terms": {
            "field": "msg.channel.name",
            "size": 250
        },
        "aggs" : {
          "teams": {
              "terms": {
                  "field": "msg.channel.name"
              }
          }
        }
    }
  },
  "size":0
}
```
