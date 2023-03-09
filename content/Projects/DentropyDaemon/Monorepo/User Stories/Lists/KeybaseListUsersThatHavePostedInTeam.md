---
id: dlK1nnSD4IMtk1btg24iy
title: KeybaseListUsersThatHavePostedInTeam
desc: ''
updated: 1638202279175
created: 1638201953120
---

KeybaseListUsersThatHavePostedInTeam

``` json
GET /keybase-*/_search
{   
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.channel.name": {"query": "dentropydaemon"}
              }
          }
      ]
    }
  },
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
