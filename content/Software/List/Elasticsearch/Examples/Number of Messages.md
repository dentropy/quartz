---
id: H1wywPVkKYXq3lbT8DV2M
title: Number of Messages
desc: ''
updated: 1632344967459
created: 1632344820034
---

## Total number of messages per Guild

```
GET /discord-2021/_search
{
  "query": {
    "match": {
      "guildID": {
        "query": "789608292095098881"
      }
    }
  }
}
```

## Total number of messages per Channel

```
GET /discord-2021/_search
{
  "query": {
    "match": {
      "channelID": {
        "query": "823726229189689354"
      }
    }
  }
}
```

## Total number of messages per User

```
GET /discord-2021/_search
{
  "query": {
    "match": {
      "authorID": {
        "query": "405104611913891840"
      }
    }
  }
}
```

## Total number of messages per User in Guild

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                    "term": {
                        "guildID": "789608292095098881"
                    }
                },
                {
                    "term": {
                        "authorID": "789641431287070731"
                    }
                }
            ]
        }
    }
}
```

## Total number of messages per User in Channel

```
POST /discord-2021/_search
{
    "query": {
        "bool": {
            "filter": [{
                    "term": {
                        "channelID": "789608292095098881"
                    }
                },
                {
                    "term": {
                        "authorID": "789641431287070731"
                    }
                }
            ]
        }
    }
}
```

## Total number of messages mentioning a stock

```
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
