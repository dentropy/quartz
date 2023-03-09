---
id: 9LRdIfBqNbglbSdjhajto
title: Examples
desc: ''
updated: 1639009747405
created: 1628444413886
---
# Elasicsearch Queries

* [wiki.software.list.Elasticsearch.Examples.Basics](dentropydaemon-wiki/Wiki/Software/list/Elasticsearch/Examples/Basics)
* [wiki.software.list.Elasticsearch.Curl](../Elasticsearch.md)
* [](Elastic%20Practice%7Cwiki.software.list.Elasticsearch.practice#elastic-practice)

## TODO Examples

[Finding Unique Values in Elasticsearch](https://www.getargon.io/docs/articles/elasticsearch/unique-values.html)

## ADD FIELD DATA

[Elasticsearch Fielddata - A Complete Guide Including Default Settings](https://opster.com/elasticsearch-glossary/elasticsearch-fielddata/)

## My Examples

Get basic info
``` json
GET /
```

Get licence
``` json
GET /_license
```

Get cluster stats
``` json
GET /_cluster/health?pretty
```

Get list of indexes
``` json
GET /_aliases?pretty=true
```

Return some result and get total number of items in index
``` json
GET /discord-2021/_search
{
    "track_total_hits": true
}
```


Display Mapping/schema
``` json
GET /discord-2021/_mapping
```


Return random results
``` json
GET /discord-2021/_search
{ 
  "query" : {
    "function_score": {
        "random_score": {}
    }
  }
}
```


Search example stock symbol
``` json
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
``` json
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
``` json
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
``` json
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
``` json
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
``` json
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
``` json
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
``` json
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
