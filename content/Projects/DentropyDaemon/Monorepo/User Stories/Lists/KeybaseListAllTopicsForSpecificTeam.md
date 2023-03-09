---
id: 0jla6m8GxbEXwD81VaO7h
title: KeybaseListAllTopicsForSpecificTeam
desc: ''
updated: 1638201511321
created: 1638201369512
---

KeybaseListAllTopicsForSpecificTeam

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
            "field": "msg.channel.topic_name",
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
