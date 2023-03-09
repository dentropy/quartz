---
id: COvBXkSCLjSXaOOaWd2Ru
title: Keybase Elastic Queries
desc: ''
updated: 1641278749683
created: 1634030902992
---

```
GET /keybase-*/_search
```

[wiki.software.list.Elasticsearch.Examples.Fielddata](../../../../../Software/List/Elasticsearch/Fielddata.md)


## Finally learned how to do double aggregation in elasticsearch

``` json
GET /keybase-*/_search
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.sender.username": {"query": "dentropy"}
              }
          }
      ]
    }
  },
  "aggs": {
    "topics": {
        "terms": {
            "field": "msg.channel.topic_name",
            "size": 100
        },
        "aggs" : {
          "teams": {
              "terms": {
                  "field": "msg.channel.name"
              }
          }
        }
    }
  }
}
```

## Getting list of teams and topics

Going to require a new key that stores the team name and the topic as a single string otherwise requires a lot of additional circular queries

``` json
GET /keybase-*/_search
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.sender.username": {"query": "dentropy"}
              }
          }
      ]
    }
  },
  "aggs": {
    "topics": {
        "terms": {
            "field": "msg.channel.topic_name",
            "size": 100
        }
    },
    "teams": {
        "terms": {
            "field": "msg.channel.name",
            "size": 100
        }
    }
  }
}
```

## Topics posted in

``` json
GET /keybase-*/_search
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.sender.username": {"query": "dentropy"}
              }
          },
          { "match": {
              "msg.channel.name": {"query": "dentropydaemon"}
              }
          }
      ]
    }
  },
  "aggs": {
    "departments": {
        "terms": {
            "field": "msg.channel.topic_name",
            "size": 100
        }
    }
  }
}
```

## General Search


``` json

GET /keybase-*/_search
{
    "query": {
        "match": {
            "msg.content.text.body": "Google Keep"
        }
    },
    "size": 10
}

GET /keybase-*/_search
{
    "query": {
        "terms": {
            "msg.content.text.body": [
                "google",
                "Keep"
            ],
            "boost": 1
        }
    },
    "size": 10
}
GET /keybase-*/_search
{
  "query": {
    "match_phrase_prefix": {
      "message": {
        "msg.content.text.body": "the"
      }
    }
  },
  "size": 10
}


GET /keybase-*/_search
{
  "query": {
    "match": {
      "message": {
        "msg.content.text.body": "the"
      }
    }
  }
}



GET /keybase-*/_search
{
  "query": {
    "bool": {
      "must": [{
        "match": {
          "msg.content.type": {
            "query": "text"
          }
        }
      }]
    }
  },
  "match_phrase_prefix": {
    "message": {
      "msg.content.text.body": "the"
    }
  },
  "size": 10
}

```

## Most Reacted to message

``` json
GET /keybase-*/_search
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.content.type": {"query": "text"}
              }
          }
      ]
    }
  },
  "aggs": {
    "departments": {
        "terms": {
            "field": "msg.reactions.reactions",
            "size": 100
        }
    }
  }
}
```

## Most Reacted to Message in a topic

``` json
GET /keybase-*/_search
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.content.type": {"query": "reaction"}
              }
          }
      ]
    }
  },
  "aggs": {
    "departments": {
        "terms": {
            "field": "msg.content.reaction.b",
            "size": 100
        }
    }
  }
}
```

## User Messages Across Team

``` json
GET /keybase-*/_search
{
    "query": {
        "bool": {
            "must": [
                  {
                    "match": {
                      "msg.channel.name": {
                        "query": "dentropydaemon"
                      }
                    }
                  },
                  {
                    "match": {
                      "msg.content.type": {
                        "query": "text"
                      }
                    }
                  },
                  {
                    "match": {
                     "msg.sender.username": {
                        "query": "dentropy"
                      }
                    }
                  }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.channel.topic_name"
            }
        }
    },
  "size": 0
}
```

## Get all users that posted in a topic

``` json
GET /keybase-*/_search
{
    "query": {
        "bool": {
            "must": [
                  {
                    "match": {
                      "msg.channel.name": {
                        "query": "dentropydaemon"
                      }
                    }
                  },
                  {
                    "match": {
                      "msg.content.type": {
                        "query": "text"
                      }
                    }
                  },
                  {
                    "match": {
                      "msg.channel.topic_name": {
                        "query": "platforms"
                      }
                    }
                  }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.sender.username"
            }
        }
    },
  "size": 0
}
```

## List all teams

``` json
{
    "query": {
        "bool": {
            "must": [
                {
                    "exists": {
                        "field": "msg.channel.name"
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.channel.name"
            }
        }
    },
  "size": 0
}
```

## Channel's a user posed in

``` json
GET /keybase-*/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "msg.channel.name": {
              "query": "complexweekend.may2021"
            }
          }
        },
        {
          "match": {
            "msg.content.type": {
              "query": "text"
            }
          }
        },
        {
          "match": {
            "msg.sender.username": {
              "query": "dentropy"
            }
          }
        }
      ]
    }
  },
  "aggs": {
    "departments": {
      "terms": {
        "field": "msg.channel.topic_name",
        "size": 100,
        "order": {
          "_key": "asc"
        }
      }
    }
  },
  "size": 0
}
```

## User's alphabetically

``` json
GET /keybase-*/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "exists": {
                        "field": "msg.channel.name"
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.sender.username",
                "size":100,
                "order": { "_key": "asc" }
            }
        }
    },
  "size": 0
}

```

## Match specific message type

``` json
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.content.type": {"query": "reaction"}
              }
          }
      ]
    }
  }
}
```

## Reaction popularity of

* specific user
* specific topic
* specific team

``` json
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "msg.content.type": {"query": "reaction"}
              }
          }
      ]
    }
  },
  "aggs": {
    "departments": {
        "terms": {
            "field": "msg.content.reaction.b",
            "size": 100
        }
    }
  }
}
```

## Total number of each message type type

``` json
{
    "query": {
        "bool": {
            "must": [
                {
                    "exists": {
                        "field": "msg.content.type"
                    }
                },
                { "match": {
                    "msg.channel.topic_name": {"query": "general"}
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.content.type"
            }
        }
    }
}
```

## Most X

``` json
GET /keybase-dentropydaemon/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "exists": {
                        "field": "msg.content.type"
                    }
                },
                { "match": {
                    "msg.channel.topic_name": {"query": "general"}
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.content.type"
            }
        }
    }
}
```

## Sort by longest messages (word length) across team

``` json
{
  "query": {
    "bool": {
      "must": [
        { "match": {
            "msg.content.type": {"query": "text"}
            }
        }
      ]
    }
  },
  "sort" : [
      {"msg.content.content_word_length" : {"order" : "desc", "mode" : "avg"}}
  ]
}
```

## Users who sent most messages across team

``` json
{
    "query": {
        "bool": {
            "must": [
                { "match": {
                    "msg.content.type": {"query": "text"}
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.sender.username"
            }
        }
    }
}
```

## Who sent most messages in specific topic


``` json
{
    "query": {
        "bool": {
            "must": [
                { "match": {
                    "msg.content.type": {"query": "text"}
                    }
                },
                { "match": {
                    "msg.channel.topic_name": {"query": "platforms"}
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.sender.username"
            }
        }
    }
}
```

## Messages with most URLs

``` json
{
  "query": {
    "bool": {
      "must": [
        {
            "exists": {
                "field": "msg.url_num"
            }
        }
      ]
    }
  },
  "sort" : [
      {"msg.url_num" : {"order" : "desc", "mode" : "avg"}}
  ]
}
```

## Who sent most reaction

``` json
{
    "query": {
        "bool": {
            "must": [
                { "match": {
                    "msg.content.type": {"query": "reaction"}
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.sender.username"
            }
        }
    }
}
```

## Reaction popularity across team

``` json
{
    "query": {
        "bool": {
            "must": [
                { "match": {
                    "msg.content.type": {"query": "reaction"}
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.content.reaction.b"
            }
        }
    }
}
```

## Average message length for User (dentropy)

``` json
{
    "query": {
        "bool": {
            "must": [
                { "match": {"msg.content.type": {"query": "text"}}},
                { "match": {"msg.sender.username": {"query": "dentropy"}}}
            ]
        }
    },
    "aggs": {
        "avg_length": { "avg": { "field": "msg.content.content_word_length" } }
    }
}
```

* Basic Queries queries
  * ✅️ Most [messages|edits|deletes|reactions sent] per
    * User // msg.sender.username
    * Across teams // msg.channel.name plus index keybase-*
    * Across team topics // msg.channel.name
    * For specific topic // msg.channel.topic_name

## Most Messages

``` json
{
    "query": {
        "bool": {
            "must": [
                { "match": {
                    "msg.content.type": {"query": "text"}
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.sender.username"
            }
        }
    }
}
```

## Most Edits

``` json
{
    "query": {
        "bool": {
            "must": [
                { "match": {
                    "msg.content.type": {"query": "edit"}
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.sender.username"
            }
        }
    }
}
```


## Most Deletes

``` json
{
    "query": {
        "bool": {
            "must": [
                { "match": {
                    "msg.content.type": {"query": "reaction"}
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.sender.username"
            }
        }
    }
}
```

## Most Reactions Sent

``` json
{
    "query": {
        "bool": {
            "must": [
                { "match": {
                    "msg.content.type": {"query": "delete"}
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.content.url_num"
            }
        }
    }
}
```

## Most URL's

**COMPOUND QUERY REMOVING FROM SCOPE**

The goal is to show who sent the most URL's. It is better to sum the normal URL field rather than the total number.

May have to sum the total number of URL's per user. May be better to just display URL's as the next feature after graphs.

``` json
{
    "query": {
        "bool": {
            "must": [
                { "terms": {
                    "field": "msg.content.urls"
                    }
                }
            ]
        }
    },
    "aggs": {
        "departments": {
            "terms": {
                "field": "msg.sender.username"
            }
        }
    }
}
```
