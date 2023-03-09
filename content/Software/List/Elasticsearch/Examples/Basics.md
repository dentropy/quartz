---
id: wv9RScQFnLW0UyHxdc6ii
title: Basics
desc: ''
updated: 1638221929013
created: 1628444413898
---

[23 Useful Elasticsearch Example Queries - DZone Big Data](https://dzone.com/articles/23-useful-elasticsearch-example-queries)
[ElasticSearch Commands Cheat Sheet – BMC Software | Blogs](https://www.bmc.com/blogs/elasticsearch-commands/)

## [List all Indices](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/cat-indices.html)


```
GET /_cat/indices/*?v&s=index 
```

Get number of documents

``` json
GET /INDEX_NAME/_search
{
  "track_total_hits": true
}
```
## [Get field metadata](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-get-field-mapping.html)

`GET /my-index-000001/_mapping/field/user`

## List all Fields

``` 
GET /INDEX_NAME/_mapping
```

## Test an index

``` json
GET /INDEX_NAME/_search
{
  "query": {
    "match_all": {}
  }
}
```

## Match a specific field

```
GET /discord-2021/_search
{
  "query": {
    "match": {
      "guildID": {
        "query": "789608292095098881"
      }
    }
  }
}
```

## List same field across many indices


**Return some result and get total number of items in index**
```
GET /discord-2021/_search
{
    "track_total_hits": true
}
```


**Display Mapping/schema**

```
GET /discord-2021/_mapping
```


## Return random results
```
GET /discord-2021/_search
{ 
  "query" : {
    "function_score": {
        "random_score": {}
    }
  }
}
```


## Search example stock symbol
```
GET /discord-2021/_search
{ 
  "query" : {
    "query_string": {
      "query": "GME",
      "default_field": "messageContent"
    }
  }
}
```

```
GET /discord-2021/_search
{
    "query": {
        "bool": {
            "must": [{
                "query_string": {
                    "query": "GME",
                    "default_field": "messageContent"
                }
            }]
        }
    }
}
```


## Get number of unique values in a field
```
GET /discord-2021/_search?size=0
{
    "aggs": {
        "restaurant_count": {
            "cardinality": {
                "field": "guildName.keyword"
            }
        }
    }
}

```


## Get unique values from a field
```
GET /discord-2021/_search
{
    "aggs": {
        "city": {
            "terms": {
                "field": "guildName.keyword"
            }
        }
    }
}
```

## Sort by size of text field
```
POST /discord-2021/_search
{
   "query": {
      "exists": {
        "field": "messageContent.keyword"
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

## Return some result and get total number of items in index
```
GET /discord-2021/_search
{
    "track_total_hits": true
}
```


## Display Mapping/schema
```
GET /discord-2021/_mapping
```


## Return random results
```
GET /discord-2021/_search
{ 
  "query" : {
    "function_score": {
        "random_score": {}
    }
  }
}
```


## Search example stock symbol
```
GET /discord-2021/_search
{ 
  "query" : {
    "query_string": {
      "query": "GME",
      "default_field": "messageContent"
    }
  }
}
```


Sort by most recent
```
GET /discord-2021/_search
{ 
  "query" : {
    "query_string": {
      "query": "GME",
      "default_field": "messageContent"
    }
  },
  "sort": [
      {
        "timestamp": {
          "order": "desc"
        }
      }
    ]
}
```


Filter based on time alone
```
GET /discord-2021/_search
{ 
  "query" : {
    "range": {
      "@timestamp": {
        "gte": "2021-01-01",
        "lte": "2021-06-01"
      }
    }
  },
  "sort": [
      {
        "@timestamp": {
          "order": "desc"
        }
      }
    ]
}
```


Filter based on time and stock sorted by most recent
```
GET /discord-2021/_search
{
    "query": {
        "bool": {
            "must": {
                "query_string": {
                    "query": "GME",
                    "default_field": "messageContent"
                }
            },
            "should": {
                "range": {
                    "@timestamp": {
                        "gte": "2021-01-01",
                        "lte": "2021-06-01"
                    }
                }
            }
        }
    },
    "sort": [{
        "@timestamp": {
            "order": "desc"
        }
    }]
}
```


Get number of unique values in a field
```
GET /discord-2021/_search?size=0
{
    "aggs": {
        "restaurant_count": {
            "cardinality": {
                "field": "guildName.keyword"
            }
        }
    }
}

```


Get unique values from a field
```
GET /discord-2021/_search
{
    "aggs": {
        "city": {
            "terms": {
                "field": "guildName.keyword"
            }
        }
    }
}
```


Sort by size of text field
```
POST /discord-2021/_search
{
   "query": {
      "exists": {
        "field": "messageContent.keyword"
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


Number of messages per guild
```
POST /discord-2021/_search
{
   "query": {
      "exists": {
        "field": "messageContent.keyword"
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

Number of messages per User
```
POST /discord-2021/_search
{
   "query": {
      "exists": {
        "field": "messageContent.keyword"
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

Number of messages per Channel
```
POST /discord-2021/_search
{
   "query": {
      "exists": {
        "field": "messageContent.keyword"
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


