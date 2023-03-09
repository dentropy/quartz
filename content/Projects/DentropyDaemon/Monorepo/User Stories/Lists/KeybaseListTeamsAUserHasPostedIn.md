---
id: tDj1q2iiJmAyLjpPxUZJz
title: KeybaseListTeamsAUserHasPostedIn
desc: ''
updated: 1638201899841
created: 1638201806009
---

KeybaseListTeamsAUserHasPostedIn

``` json
GET /keybase-*/_search
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.sender.username": {"query": "dentropy"}
              }
          }
      ]
    }
  },
  "aggs": {
    "topics": {
        "terms": {
            "field": "msg.channel.name",
            "size": 100
        }
    }
  },
  "size":0
}
```
