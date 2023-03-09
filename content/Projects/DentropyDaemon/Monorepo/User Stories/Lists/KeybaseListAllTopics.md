---
id: g3Gh6anSxxOGM5Qu60Tkf
title: KeybaseListAllTopics
desc: ''
updated: 1638821918236
created: 1638201098146
---

KeybaseListAllTopics

``` json
GET /keybase-*/_search
{ 
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


``` json
GET /keybase-*/_search
{  "query": {
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
        }
    }
  },
  "size":0
}
```

``` json
GET /keybase-*/_search
{  "query": {
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
            "field": "msg.conversation_id",
            "size": 100
        }
    }
  }
}
```


``` json
GET /keybase-*/_search
{  "query": {
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
    "conversation_id": {
        "terms": {
            "field": "msg.conversation_id",
            "size": 100
        },
        "aggs":{
          "topics":{
            "stats" : {
              "field": "msg.channel.topic_name",
              "size": 100
            }
          }
        }
    }
  }
}
```
