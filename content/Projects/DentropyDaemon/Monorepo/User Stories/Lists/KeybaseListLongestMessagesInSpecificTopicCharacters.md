---
id: 13lZaTk4oaigDruclvWOQ
title: KeybaseListLongestMessagesInSpecificTopicCharacters
desc: ''
updated: 1638646155370
created: 1638204130758
---

KeybaseListLongestMessagesInSpecificTopic

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
          },
          { "match": {
              "msg.channel.topic_name": {"query": "general"}
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
