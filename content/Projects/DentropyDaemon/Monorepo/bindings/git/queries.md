---
id: xSnaVqIwCeRa3EuIDCMkB
title: Queries
desc: ''
updated: 1640707340676
created: 1640705955184
---


## List unique email domains of users

``` json
GET /git-commits-*/_search
{
  "aggs": {
    "topics": {
        "terms": {
            "field": "authorEmailDomain",
            "size": 100
        }
    }
  },
  "size" : 0 
}
```

## List unique email domains of users

``` json
GET /git-commits-*/_search
{
  "aggs": {
    "topics": {
        "terms": {
            "field": "authorEmail",
            "size": 100
        }
    }
  },
  "size" : 0 
}
```

## List unique names of users, with the number of commits

``` json
GET /git-commits-*/_search
{
  "aggs": {
    "topics": {
        "terms": {
            "field": "authorName",
            "size": 100
        }
    }
  },
  "size" : 0 
}
```

## List commits from specific name

``` json
GET /git-commits-*/_search
{
  "query": {
    "bool": {
      "must": [
          { "match": {
              "authorName": {"query": "cazala"}
              }
          }
      ]
    }
  }
}
```

## List commits by size of commit message

``` json
GET /git-commits-*/_search
{
  "sort" : [
      {"messageWordCount" : {"order" : "desc", "mode" : "avg"}}
  ],
  "size" : 100
}
```

## List commits by most lines inserted

``` json
GET /git-commits-*/_search
{
  "sort" : [
      {"totalInsertions" : {"order" : "desc", "mode" : "avg"}}
  ],
  "size" : 100
}
```

