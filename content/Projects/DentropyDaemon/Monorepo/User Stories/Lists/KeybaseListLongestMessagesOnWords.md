---
id: UHVq3XUT6izyCj9nINT4L
title: KeybaseListLongestMessagesOnWords
desc: ''
updated: 1638646173281
created: 1638645907844
---

## Need to update query

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
      { "msg.content.content_word_length" : {"order" : "desc"}}
  ],
  "size":10
}
```
