---
id: 4jIgOLjAtJBE4OyHyUJez
title: KeybaseListMentionsOfSpecificTeam
desc: ''
updated: 1639010567312
created: 1639009777883
---

``` json
POST /keybase-*/_search
{
   "query": {
      "bool": {
            "must":{
               "exists": {
                  "field": "msg.channel_name_mentions"
               }
            }
      }
   },
   "size":250
}
```


``` json
POST /keybase-*/_search
{
   "query": {
      "bool": {
            "must_not": {
                "query_string": {
                    "query": "none",
                    "default_field": "msg.channel_mention"
                }
            },
            "must":{
               "exists": {
                  "field": "msg.channel_mention"
               }
            }
      }
   },
   "size":250
}
```
