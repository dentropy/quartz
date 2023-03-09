---
id: dszy3NTh87gQq7Yzakx2F
title: KeybaseListAllUsersWithTheTeamsTheyAreOn
desc: ''
updated: 1638202534032
created: 1638202524704
---

KeybaseListAllUsersWithTheTeamsTheyAreOn

``` json
GET /keybase-*/_search
{ 
  "aggs": {
    "topics": {
        "terms": {
            "field": "msg.sender.username",
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
