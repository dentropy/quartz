---
id: sB89j6FEW0q59GWdSHfdz
title: Message Size Filter
desc: ''
updated: 1632344772328
created: 1632344772328
---

## Longest messages per Guild

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                    "term": {
                        "guildID": "789608292095098881"
                    }
                },
                {
                    "exists": {
                        "field": "messageContent.keyword"
                    }
                }
            ]
        }
    },
    "sort": {
        "_script": {
            "script": "doc['messageContent.keyword'].value.length()",
            "type": "number",
            "order": "desc"
        }
    }
}
```

## Longest messages per User

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                    "term": {
                        "authorID": "444198214330089497"
                    }
                },
                {
                    "exists": {
                        "field": "messageContent.keyword"
                    }
                }
            ]
        }
    },
    "sort": {
        "_script": {
            "script": "doc['messageContent.keyword'].value.length()",
            "type": "number",
            "order": "desc"
        }
    }
}
```

## Longest messages per Channel

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                    "term": {
                        "channelID": "812108327063519273"
                    }
                },
                {
                    "exists": {
                        "field": "messageContent.keyword"
                    }
                }
            ]
        }
    },
    "sort": {
        "_script": {
            "script": "doc['messageContent.keyword'].value.length()",
            "type": "number",
            "order": "desc"
        }
    }
}
```

## Longest messages per User in Guild

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                    "term": {
                        "guildID": "789608292095098881"
                    }
                }, {
                    "term": {
                        "authorID": "444198214330089497"
                    }
                },
                {
                    "exists": {
                        "field": "messageContent.keyword"
                    }
                }
            ]
        }
    },
    "sort": {
        "_script": {
            "script": "doc['messageContent.keyword'].value.length()",
            "type": "number",
            "order": "desc"
        }
    }
}
```
## Longest messages per User in Channel

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                    "term": {
                        "channelID": "812108327063519273"
                    }
                }, {
                    "term": {
                        "authorID": "444198214330089497"
                    }
                },
                {
                    "exists": {
                        "field": "messageContent.keyword"
                    }
                }
            ]
        }
    },
    "sort": {
        "_script": {
            "script": "doc['messageContent.keyword'].value.length()",
            "type": "number",
            "order": "desc"
        }
    }
}
```

## Longest messages mentioning Stock

Almost Working Template
```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": {
                "exists": {
                    "field": "messageContent.keyword"
                }
            }
        }
    },
    "sort": {
        "_script": {
            "script": "doc['messageContent.keyword'].value.length()",
            "type": "number",
            "order": "desc"
        }
    }
}
```

The working Query
```
{
    "query": {
        "bool": {
            "must": [{
                "exists": {
                    "field": "messageContent.keyword"
                }
            }, {
                "query_string": {
                    "query": "GME",
                    "default_field": "messageContent"
                }
            }]
        }
    },
    "sort": {
        "_script": {
            "script": "doc['messageContent.keyword'].value.length()",
            "type": "number",
            "order": "desc"
        }
    }
}
```

## Average Message Size

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                "exists": {
                    "field": "messageContent.keyword"
                }
            }]
        }
    },
    "runtime_mappings": {
        "messageContent.calculated_length": {
            "type": "double",
            "script": "emit(doc['messageContent.keyword'].value.length())"
        }
    },
    "aggs": {
        "avg_message_length": {
            "avg": {
                "field": "messageContent.calculated_length"
            }
        }
    }
}
```

## Average message size of messages in guild

GET /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                "term": {
                    "guildID": "789608292095098881"
                }
            },{
                "exists": {
                    "field": "messageContent.keyword"
                }
            }]
        }
    },
    "runtime_mappings": {
        "messageContent.calculated_length": {
            "type": "double",
            "script": "emit(doc['messageContent.keyword'].value.length())"
        }
    },
    "aggs": {
        "avg_message_length": {
            "avg": {
                "field": "messageContent.calculated_length"
            }
        }
    }
}

## Average message size of messages in channel

GET /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                "term": {
                    "channelID": "823726229189689354"
                }
            },{
                "exists": {
                    "field": "messageContent.keyword"
                }
            }]
        }
    },
    "runtime_mappings": {
        "messageContent.calculated_length": {
            "type": "double",
            "script": "emit(doc['messageContent.keyword'].value.length())"
        }
    },
    "aggs": {
        "avg_message_length": {
            "avg": {
                "field": "messageContent.calculated_length"
            }
        }
    }
}

## Average message size of messages by user

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                "term": {
                    "authorID": "444198214330089497"
                }
            },{
                "exists": {
                    "field": "messageContent.keyword"
                }
            }]
        }
    },
    "runtime_mappings": {
        "messageContent.calculated_length": {
            "type": "double",
            "script": "emit(doc['messageContent.keyword'].value.length())"
        }
    },
    "aggs": {
        "avg_message_length": {
            "avg": {
                "field": "messageContent.calculated_length"
            }
        }
    }
}
```

## Average message size of messages by user in guild

```
GET /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                "term": {
                    "guildID": "789608292095098881"
                }
            }, {
                "term": {
                    "authorID": "444198214330089497"
                }
            },{
                "exists": {
                    "field": "messageContent.keyword"
                }
            }]
        }
    },
    "runtime_mappings": {
        "messageContent.calculated_length": {
            "type": "double",
            "script": "emit(doc['messageContent.keyword'].value.length())"
        }
    },
    "aggs": {
        "avg_message_length": {
            "avg": {
                "field": "messageContent.calculated_length"
            }
        }
    }
}
```

## Average message size of messages by user in channel

```
GET /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                "term": {
                    "guildID": "789608292095098881"
                }
            }, {
                "term": {
                    "authorID": "444198214330089497"
                }
            },{
                "exists": {
                    "field": "messageContent.keyword"
                }
            }]
        }
    },
    "runtime_mappings": {
        "messageContent.calculated_length": {
            "type": "double",
            "script": "emit(doc['messageContent.keyword'].value.length())"
        }
    },
    "aggs": {
        "avg_message_length": {
            "avg": {
                "field": "messageContent.calculated_length"
            }
        }
    }
}
```

## Average message size mentioning a stock

```
GET /discord-2021/_search
{
    "query": {
        "bool": {
            "must": [{
                "exists": {
                    "field": "messageContent.keyword"
                }
            }, {
                "query_string": {
                    "query": "GME",
                    "default_field": "messageContent"
                }
            }]
        }
    },
    "runtime_mappings": {
        "messageContent.calculated_length": {
            "type": "double",
            "script": "emit(doc['messageContent.keyword'].value.length())"
        }
    },
    "aggs": {
        "avg_message_length": {
            "avg": {
                "field": "messageContent.calculated_length"
            }
        }
    }
}
```
