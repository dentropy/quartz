---
id: mliUi3TI7eFMPMdlL1va5
title: KeybaseListMentionsOfTopics
desc: ''
updated: 1639009936958
created: 1639009768915
---

KeybaseListMentionsOfTopic

``` json
POST /keybase-*/_search
{
   "query": {
      "exists": {
        "field": "msg.channel_mention"
      }
   }
}
```
