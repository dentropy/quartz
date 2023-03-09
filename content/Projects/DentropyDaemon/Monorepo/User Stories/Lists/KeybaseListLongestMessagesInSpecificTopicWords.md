---
id: tLw02uvJkRZgGHA4ybpr3
title: KeybaseListLongestMessagesInSpecificTopicWords
desc: ''
updated: 1638646196085
created: 1638645857564
---

## NEED TO UPDATE QUERY

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
          },
          { "match": {
              "msg.channel.topic_name": {"query": "general"}
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
