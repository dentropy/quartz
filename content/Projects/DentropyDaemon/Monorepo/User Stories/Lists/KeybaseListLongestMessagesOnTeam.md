---
id: wPXn2nTIsi3UfcV0xqH9f
title: KeybaseListLongestMessagesOnTeam
desc: ''
updated: 1638646036595
created: 1638204174012
---

msg.content.content_character_length

``` json
POST /keybase-*/_search
{   
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.content.type": {"query": "text"}
              }
          },
          { "match": {
              "msg.channel.name": {"query": "dentropydaemon"}
              }
          }
      ]
    }
  },
  "sort": [
      { "msg.content.content_character_length" : {"order" : "desc"}}
  ],
  "size":10
}
```
