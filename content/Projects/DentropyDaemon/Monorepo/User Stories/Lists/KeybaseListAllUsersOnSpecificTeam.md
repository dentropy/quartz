---
id: DkG5byWq8jK3gG8bRtKdn
title: KeybaseListAllUsersOnSpecificTeam
desc: ''
updated: 1638203108740
created: 1638202376141
---

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
