---
id: QIq38K3CL7paFEKA3SfKb
title: practice
desc: ''
updated: 1631975869401
created: 1628444413887
---
# Elastic Practice

## TODO

*   Contains Text
*   Sort Most Recent

## Practice

``` javascript
GET keybase001/_search

GET news_headlines/_search

GET news_headlines/_search
{
  "track_total_hits": true
}


GET news_headlines/_search
{
  "query": {
    "range": {
      "date": {
        "gte": "2015-06-20",
        "lte": "2015-09-22"
      }
    }
  }
}

GET news_headlines/_search
{
  "track_total_hits": true
}

GET news_headlines/_search
{
  "aggs": {
    "by_category": {
      "terms": {
        "field": "category",
        "size": 100
      }
    }
  }
}

GET keybase004/_search
{
  "aggs": {
    "by_category": {
      "terms": {
        "field": "category",
        "size": 100
      }
    }
  }
}

GET news_headlines/_search
{
  "query": {
    "match": { "category": "ENTERTAINMENT" }
  },
  "aggregations": {
    "popular_in_entertainment": {
        "significant_text": { "field": "headline" }
    }
  }
}

GET keybase004/_search

GET keybase004/_search
{
  "query": {
    "match": {
      "content.type": "text",
      "operator":"AND",
      "category":"ask-the-facilitators"
    }
  }
}

GET keybase004/_search
{
  "sort": [
    {
      "_size": {                      
        "order": "desc"
      }
    }
  ],
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "content.type": "text"
          } 
        },
        {
          "match": {
            "category":"ask-the-facilitators"
          }
        }
      ]
    }
  }
}


GET keybase004/_search
{
  "script_fields": {
    "size": {
      "script": "_source['content.text.body'].value.size()"        
    }
  },
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "content.type": "text"
          } 
        },
        {
          "match": {
            "category":"ask-the-facilitators"
          }
        }
        
        
        
        
      ]
    }
  }
}


GET keybase004/_search
{
  "query": {
    "exists": {
      "field": "content.text.body"
    }
  },
  "sort": 
    { "_script": 
      { "script": "doc['topic'].values.size()" } 
    }
  }
}

GET keybase004/_search
{
    "query": {
        "bool" : {
            "filter" : {
                "script" : {
                    "script" : {
                        "source": "doc['topic'].values.size() > 100",
                        "lang": "painless"
                      }
                }
            }
        }
    }
}

GET keybase004/_search
{
  "query": {
    "match_all": {}
  },
  "sort": {
    "_script": {
      "script": { 
        "source":"doc['topic']values.size()",
        "lang":"painless"
      }
    }
  }
}

GET keybase004/_search
{
    "query": {
        "match_all": {}
    },
    "sort": {
        "_script": {
            "script" : {
                "lang": "painless",
                "source": "_source['topic'].value.size()"
            }
        },
        "order" : "desc"
        }
}

PUT keybase004
{
  "mappings": {
    "_size": {
      "enabled": true
    }
  }
}

GET /discord-2021/_search
{ 
  "query" : {
    "query_string": {
      "query": "GME",
      "default_field": "messageContent"
    },
  "sort": [
    {
      "timestamp": {
        "order": "desc"
      }
    }
  }
}
```
