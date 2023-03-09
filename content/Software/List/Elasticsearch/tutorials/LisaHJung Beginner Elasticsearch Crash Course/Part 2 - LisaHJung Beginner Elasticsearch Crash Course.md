---
id: XkkQbbTmS7bjf82Ygxum9
title: Part 2 - LisaHJung Beginner Elasticsearch Crash Course
desc: ''
updated: 1628444413903
created: 1628444413903
---
# Part 2 - LisaHJung Beginner Elasticsearch Crash Course
[LisaHJung/Part-2-Understanding-the-relevance-of-your-search-with-Elasticsearch-and-Kibana-](https://github.com/LisaHJung/Part-2-Understanding-the-relevance-of-your-search-with-Elasticsearch-and-Kibana-)

Concepts:

Aggregations, summarizes your data as metrics, statistics, and other analytics. An example of an aggregation would be checking how many documents are returned from a field called category or in my case the number of messages in a keybase topic or team could be calculated using an aggregation.

    GET enter_name_of_the_index_here/_search
    
    GET enter_name_of_the_index_here/_search
    {
      "track_total_hits": true
    }
    
    
    GET enter_name_of_the_index_here/_search
    {
      "query": {
        "Specify the type of query here": {
          "Enter name of the field here": {
            "gte": "Enter lowest value of the range here",
            "lte": "Enter highest value of the range here"
          }
        }
      }
    }
    # example:
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
    # 
    GET enter_name_of_the_index_here/_search
    {
      "query": {
        "match": { "Enter the name of the field": "Enter the value you are looking for" }
      },
      "aggregations": {
        "Name your aggregation here": {
           "significant_text": { "field": "Enter the name of the field you are searching for" }
        }
      }
    }
