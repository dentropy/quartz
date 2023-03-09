---
id: VzHykVSi6Fq9LA4Xb0uAd
title: API
desc: ''
updated: 1632344918525
created: 1632344918525
---

## 🚀1️⃣ Get messages within last X hours

```
GET /discord-2021/_search
{ 
  "query" : {
    "range": {
      "@timestamp": {
        "gte": "2021-06-01T15:29:50+04:00"
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

## 🚀1️⃣ Remove specified guilds from results

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
          "must": {
            "match_all": {}
          },
          "must_not": [
             {"term" : { "guildID": "789608292095098881" }},
             {"term" : { "guildID": "789608292095098881" }}
          ]
        }
    }
}
```


## 🚀1️⃣ remove specified channels from results

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
          "must": {
            "match_all": {}
          },
          "must_not": [
             {"term" : { "channelID": "518493384206450725" }},
             {"term" : { "channelID": "823726229189689354" }}
          ]
        }
    }
}
```

## 🚀1️⃣ remove specified users from results

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
          "must": {
            "match_all": {}
          },
          "must_not": {
             "term" : { "authorID": "518493384206450725" },
             "term" : { "authorID": "756671008273989767" }
          }
        }
    }
}
```

## 🚀1️⃣ Remove Bot messages (messages contain this field already)

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
          "must": {
            "match_all": {}
          },
          "must_not": [
             {"term" : { "authorIsBot": "true" }}
          ]
        }
    }
}
```

## 🚀1️⃣ Remove Tenor.com links (messages will contain field "containsMeme".)

```
```
