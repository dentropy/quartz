---
id: qqzYE0uH1kJqLCQ9d8Qec
title: Number Search
desc: ''
updated: 1628444413896
created: 1628444413896
---
# Elasticsearch Basic Number Search
    GET /amazon_products/_search
    {
      "from": 0,
      "size": 10,
      "query": {
        "range": {
          "price": {
            "gte": 10,
            "lte": 20,
    	"boost": 2.2
          }
        }
      }
    }

    GET /orders/_search
    {
       "query":{
          "range":{
             "orderDate":{
                "gte":"01/09/2017",
                "lte":"30/09/2017",
                "format":"dd/MM/yyyy"
             }
          }
       }
    }

    GET /orders/_search
    {
       "query":{
          "range":{
             "orderDate":{
                "gte":"now-7d",
                "lte":"now"
             }
          }
       }
    }
