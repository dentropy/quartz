---
id: DwPc1Qi4bYy5jKymhYwUT
title: Sort
desc: ''
updated: 1633886213566
created: 1633886069665
---

**Sort by size of text field**

``` json
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

**Number of messages per X**

``` json
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
