---
id: L5j5R6xaQHBL92hhb2yJR
title: Text Search
desc: ''
updated: 1628444413897
created: 1628444413897
---
# Elasticsearch Basic Text Search
    GET /amazon_products/_search
    {
      "query": {
        "exists": {
          "field": "description"
        }
      }
    }

    GET /amazon_products/_search
    {
      "query": {
        "term": {
          "manufacturer.raw": "victory multimedia"
        }
      }
    }
