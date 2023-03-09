---
id: LuMghwwC0oLDaRiqpm9AZ
title: KeybaseListTopicsAUserHasPostedIn
desc: ''
updated: 1638201684459
created: 1638200829286
---

KeybaseListTopicsAUserHasPostedIn

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
            "field": "msg.channel.topic_name",
            "size": 100
        },
        "aggs" : {
          "teams": {
              "terms": {
                  "field": "msg.channel.name"
              }
          }
        }
    }
  }
}
```
