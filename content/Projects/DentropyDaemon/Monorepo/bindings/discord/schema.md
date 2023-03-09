---
id: yO0Qb4Dsrkbg0AeN6gytW
title: Discord Schema
desc: ''
updated: 1644024563113
created: 1639441961278
---

## Schema

* Message ID
  * "message_id"
* Message Contents
  * "content"
* User
  * "author"
    ``` json
    {
        "author" : {
            "id" : "432981598818903585",
            "name" : "dentropy",
            "discriminator" : "8658",
            "nickname" : "Paul",
            "color" : "#2ECC71",
            "isBot" : false,
            "avatarUrl" : "https://cdn.discordapp.com/avatars/............"
        }
    }
    ```
* Channel
  * "channel_id"
* Guild
  * "guild_id"
* User Mentions
  * "mentions"
* Replied
* Reactions
  * "reactions"

## Diagrams

* [Elasticsearch Schema](./assets/diagrams/Schema.Discord.Elasticsearch.drawio)
* [Elasticsearch SQL](./assets/diagrams/Schema.Discord.SQL.drawio)

## [wiki.software.list.Elasticsearch.Fielddata](../../../../../Software/List/Elasticsearch/Fielddata.md)
``` json
PUT discord*/_mapping
{
  "properties": {
    "message_id": { 
      "type":     "text",
      "fielddata": true
    },
    "content": { 
      "type":     "text",
      "fielddata": true
    },
    "author.id": { 
      "type":     "text",
      "fielddata": true
    },
    "author.name": { 
      "type":     "text",
      "fielddata": true
    },
    "author.nickname": { 
      "type":     "text",
      "fielddata": true
    },
    "channel_id": { 
      "type":     "text",
      "fielddata": true
    },
    "guild_id": { 
      "type":     "text",
      "fielddata": true
    }
  }
}
```
``` bash
curl --header "Content-Type: application/json" \
  -u $ELASTIC_USER:$ELASTIC_PASS \
  --request PUT \
--data '
{
  "properties": {
    "message_id": { 
      "type":     "text",
      "fielddata": true
    },
    "content": { 
      "type":     "text",
      "fielddata": true
    },
    "author.id": { 
      "type":     "text",
      "fielddata": true
    },
    "author.name": { 
      "type":     "text",
      "fielddata": true
    },
    "author.nickname": { 
      "type":     "text",
      "fielddata": true
    },
    "channel_id": { 
      "type":     "text",
      "fielddata": true
    },
    "guild_id": { 
      "type":     "text",
      "fielddata": true
    }
  }
} ' "$ELASTIC_NODE/discord-*/_mapping"
```
