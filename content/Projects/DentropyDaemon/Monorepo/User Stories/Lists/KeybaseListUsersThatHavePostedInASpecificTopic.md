---
id: lWcmez8YGOh18ESBH3POf
title: KeybaseListUsersThatHavePostedInASpecificTopic
desc: ''
updated: 1638202987622
created: 1638202856355
---

KeybaseListUsersThatHavePostedInASpecificTopic

``` json
GET /keybase-*/_search
{   
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.channel.topic_name": {"query": "general"}
              }
          },
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
  },
  "size":0
}
```
