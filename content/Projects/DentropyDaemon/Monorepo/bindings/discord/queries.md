---
id: 3dPfolyjxqgqAGYgL8tZQ
title: Discord Elastic Queries
desc: ''
updated: 1641594352341
created: 1639441785968
---

[wiki.ddaemon.monorepo.bindings.discord.schema](Discord%20Schema)

## Error response

``` json
{
    "name": "ResponseError",
    "meta": {
        "body": {
            "error": {
                "root_cause": [
                    {
                        "type": "parsing_exception",
                        "reason": "Unknown key for a START_OBJECT in [bool].",
                        "line": 1,
                        "col": 9
                    }
                ],
                "type": "parsing_exception",
                "reason": "Unknown key for a START_OBJECT in [bool].",
                "line": 1,
                "col": 9
            },
            "status": 400
        },
        "statusCode": 400,
        "headers": {
            "content-type": "application/json; charset=UTF-8",
            "date": "Fri, 07 Jan 2022 22:25:28 GMT",
            "content-length": "235"
        },
        "meta": {
            "context": null,
            "request": {
                "params": {
                    "method": "POST",
                    "path": "/_search",
                    "body": "{\"bool\":{\"should\":[{\"terms\":{\"guild_id\":[\"453243919774253079\"](%5C%22453243919774253079%5C%22)}},{\"terms\":{\"author.id\":[\"432981598858903585\"](%5C%22432981598858903585%5C%22)}}]}}",
                    "querystring": "size=100",
                    "headers": {
                        "user-agent": "elasticsearch-js/7.16.0 (linux 5.13.0-7620-generic-x64; Node.js v16.8.0)",
                        "x-elastic-client-meta": "es=7.16.0,js=16.8.0,t=7.16.0,hc=16.8.0",
                        "content-type": "application/json",
                        "content-length": "118"
                    },
                    "timeout": 30000
                },
                "options": {},
                "id": 295
            },
            "name": "elasticsearch-js",
            "connection": {
                "url": "https://elasticsearch.complexityweekend.xyz/",
                "id": "https://elasticsearch.complexityweekend.xyz/",
                "headers": {},
                "deadCount": 0,
                "resurrectTimeout": 0,
                "_openRequests": 0,
                "status": "alive",
                "roles": {
                    "master": true,
                    "data": true,
                    "ingest": true,
                    "ml": false
                }
            },
            "attempts": 0,
            "aborted": false
        }
    }
}
```

## Double match

GET /discordmessages/_search
{
    "size": 24,
    "query": {
        "bool": {
            "should": [
                {
                  "terms": {
                    "guild_id": [
                        "453243919774253079"
                    ]
                  }
                },
                {
                  "terms": {
                    "author.id": [
                        "432981598858903585"
                    ]
                  }
                }
            ]
        }
    },
    "aggs": {
        "keys": {
            "terms": {
                "field": "channel_id",
                "size": 24
            }
        }
    }
}

## Match multiple user_id's

``` json
{
  "query": {
    "bool" : {
      "filter" : {
        "terms": {
          "message_id": ["794381934976303105", "794389703591329812"]
        }
      }
    }
  },
  "size":32
}
```

## Most Per Text Messages, for a guild, including the channel's a user posted in

``` json
GET /discord*/_search
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "guild_id": {"query": "453243919774253079"}
              }
          }
      ]
    }
  },
  "aggs": {
    "topics": {
        "terms": {
            "field": "author.id",
            "size": 250
        },
        "aggs" : {
          "teams": {
              "terms": {
                  "field": "channel_id",
                  "size": 250
              }
          }
        }
    }
  },
  "size" : 0
}
```

## Get all message from a specific time range

``` json
GET discordmessages/_search/
{
    "query": {
        "bool": {
          "must": [
              { "match": {
                  "guild_id": {"query": "453243919774253079"}
                  }
              },
              { 
                "range": {
                    "timestamp": {
                        "gte": "2021-01-01",
                        "lt": "2021-01-02"
                    }
                }
              }
          ]
        }
    }
}
```

``` json
GET /discord*/_search
{
  "query": {
    "range": {
      "timestamp": {
        "gte": "now-48d/d",
        "lt": "now-47d/d"
      }
    }
  }
}
```
## Get channel's a user posted in

``` json
GET /discord*/_search
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "author.id": {"query": "432981598858903585"}
              }
          }
      ]
    }
  },
  "aggs": {
    "topics": {
        "terms": {
            "field": "channel_id",
            "size": 100
        },
        "aggs" : {
          "teams": {
              "terms": {
                  "field": "author.id"
              }
          }
        }
    }
  }
}
```
