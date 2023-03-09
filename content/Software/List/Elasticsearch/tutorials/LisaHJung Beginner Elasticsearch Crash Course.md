---
id: FnQmc98NFXWuQPCiCrON3
title: LisaHJung Beginner Elasticsearch Crash Course
desc: ''
updated: 1628444413899
created: 1628444413899
---
# LisaHJung Beginner Elasticsearch Crash Course
[LisaHJung/Beginners-Crash-Course-to-Elastic-Stack-Series-Table-of-Contents](https://github.com/LisaHJung/Beginners-Crash-Course-to-Elastic-Stack-Series-Table-of-Contents)

Part 1:

    GET _cluster/health
    
    GET _nodes/stats
    
    PUT Name-of-the-Index
    
    POST Name-of-the-Index/_doc
    {
      "field": "value"
    }
    
    PUT Name-of-the-Index/_doc/id-you-want-to-assign-to-this-document
    {
      "field": "value"
    }
    
    # The ID can be a number
    PUT Name-of-the-Index/_create/id-you-want-to-assign-to-this-document
    {
      "field": "value"
    }
    
    GET Name-of-the-Index/_doc/id-of-the-document-you-want-to-retrieve
    
    POST Name-of-the-Index/_update/id-of-the-document-you-want-to-update
    {
      "doc": {
        "field1": "value",
        "field2": "value",
      }
    } 
    
    DELETE Name-of-the-Index/_doc/id-of-the-document-you-want-to-delete

Homework

    PUT places
    PUT places/_create/1
    {
        "name":"switzerland"
    }
    PUT places/_create/2
    {
        "name":"Hong-Kong"
    }
    PUT places/_create/3
    {
        "name":"Mexico"
    }
    PUT places/_create/4
    {
        "name":"Brazil"
    }
    PUT places/_create/5
    {
        "name":"South Africa"
    }
    GET places/_doc/1
    GET places/_doc/2
    GET places/_doc/3
    GET places/_doc/4
    GET places/_doc/5
    POST places/_update/2
    {
      "doc": {
        "name":"Hong Kong"
    
      }
    }
    GET places/_doc/2
    DELETE places/_doc/2
    GET places/_doc/2
    GET places/_search
    {
      "query": {
        "match_all": {}
      }
    }
