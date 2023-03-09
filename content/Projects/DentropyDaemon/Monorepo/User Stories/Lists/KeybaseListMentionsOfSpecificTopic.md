---
id: jvNPIW6eC4Xc6DcCVgEnT
title: KeybaseListMentionsOfSpecificTopic
desc: ''
updated: 1639010791265
created: 1639009787590
---

KeybaseListMentionsOfTopics


``` json
POST /keybase-*/_search
{
   "query": {
      "bool": {
            "must_not": {
                "query_string": {
                    "query": "null",
                    "default_field": "msg.channel_mention"
                }
            },
            "must":{
               "exists": {
                  "field": "msg.content.text.teamMentions"
               }
            }
      }
   },
   "size":250
}
```
