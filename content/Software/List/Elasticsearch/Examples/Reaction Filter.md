---
id: di2oMvs6zsDx8tdNHReVq
title: Reaction Filter
desc: ''
updated: 1632344847351
created: 1632344847351
---

# Reaction Filter

## Get messages with Reactions

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "exists": {
                        "field": "reactions"
                    }
                }
            ]
        }
    }
}
```

## Most Reactions to a message

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "must": [{
                "exists": {
                    "field": "reactions.emojiCount"
                }
            }]
        }
    },
    "sort": [
        {
            "reactions.emojiCount": {
                "order": "desc"
            }
        }
    ]
}
```

## Most Variety of Reactions (DOES NOT WORK)

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [
                {
                    "exists": {
                        "field": "reactions"
                    }
                }
            ]
        }
    },
    "sort": {
        "_script": {
            "script": "doc['reactions'].values.length()",
            "type": "number",
            "order": "desc"
        }
    }
}
```

Script runs bot does not export correct value to sort
```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [
                {
                    "exists": {
                        "field": "reactions.emojiCount"
                    }
                }
            ]
        }
    },
    "sort": {
        "_script": {e
            "script":
            {
              "lang":"painless",
              "source": """
                if (!doc.containsKey('reactions') || doc['reactions'].empty) { return 0 } else { return doc['reactions'].size() }
                """
            },
            "type": "number",
            "order": "asc"
        }
    }
}
```
[Kibana Painless scripted field checks if field exists or is empty and returns default, otherwise value · GitHub](https://gist.github.com/jclosure/8e103dee2f7e9491845a2c0bb64c6b7a)

## Sort messages with most variety of emojis, also return most types of reactions to a single message

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "must": [{
                "exists": {
                    "field": "reactions.emojiCount"
                }
            }]
        }
    },
    "runtime_mappings": {
        "reactions.variety": {
            "type": "double",
            "script": """
                if (!doc.containsKey('reactions.emojiCount')) {
                  emit(1)
                }
                else {
                  emit( doc['reactions.emojiCount'].size() )
                }
            """
        }
    },
    "sort": {
      "reactions.variety": {
        "order": "desc"
      }
    },
    "aggs": {
        "max_price": {
            "max": {
                "field": "reactions.variety"
            }
        }
    }
}
```
