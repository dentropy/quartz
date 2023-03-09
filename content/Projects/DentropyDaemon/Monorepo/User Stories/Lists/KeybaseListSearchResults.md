---
id: 39otb70xCAdIMQf2wf9HF
title: KeybaseListSearchResults
desc: ''
updated: 1638646063890
created: 1638472534930
---

msg.content.content_word_length

``` json
POST /keybase-*/_search
{
    "query": 
    { 
        "query": {
            "match": {
                "msg.content.text.body": "test"
            }
        }
    }
}

```
