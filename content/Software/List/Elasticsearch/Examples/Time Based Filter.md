---
id: h092VyP9NiXL66oGlhRjf
title: Time Based Filter
desc: ''
updated: 1632344860972
created: 1632344860972
---

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

