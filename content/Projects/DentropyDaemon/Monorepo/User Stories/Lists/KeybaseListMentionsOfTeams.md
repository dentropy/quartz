---
id: dnjUgX2pYdISMFBhFrEeT
title: KeybaseListMentionsOfTeams
desc: ''
updated: 1639013483746
created: 1639012062419
---

``` json
POST /keybase-*/_search
{
   "query": {
      "exists": {
        "field": "msg.content.text.teamMentions"
      }
   }
}
```

``` json
POST /keybase-*/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "exists": {
                        "field": "msg.content.text.teamMentions"
                    }
                },
                {
                    "match": {
                        "msg.channel.name": {
                            "query": "dentropydaemon"
                        }
                    }
                }
            ],
            "must_not": [
                {
                    "query_string": {
                        "query": "null",
                        "default_field": "msg.content.text.teamMentions"
                    }
                }
            ]
        }
    }
}
```
