---
id: vxaNaYtyx2x1z464mpNff
title: Queries
desc: ''
updated: 1640038071844
created: 1639966088575
---

## Learning

## Nodes

``` cypher
() or (p)
()                           // anonymous node (no label or variable) can refer to any node in the database
(p:Person)                   // using variable p and label Person
(:Technology)                // no variable, label Technology
(work:Company)               // using variable work and label Company
(p:Person:Mammal)            // Double label
(p:Person {name:'Veronica'}) // Label with property
```

## Relationships

Relationships are wrapped with hyphens or square brackets

```
--> or -[h:HIRED]->
```

Direction of relationship is specified with <>

```
(p1)-[:HIRED]->(p2) or (p1)<[:HIRED]-(p2)
```

Relationships have properties

```
-[:HIRED {type: 'fulltime'}]->
```

## Basics

``` cypher
//data stored with this direction
CREATE (p:Person)-[:LIKES]->(t:Technology)

//query relationship backwards will not return results
MATCH (p:Person)<-[:LIKES]-(t:Technology)

//better to query with undirected relationship unless sure of direction
MATCH (p:Person)-[:LIKES]-(t:Technology)
```


## Practice

Let's create a guild with channels and specific people only have access to specific channels

* `codium Software.List.neo4j.drawio`
* Node names
  * User
  * Channel
  * Guild
* Relationships
  * GuildChannel (Guild to Channel)
  * Join (Users to Channel)
  * MemberOf (Guild to User)
* We have Paul, Amy, Tom, and Sarah
* We have Channel's General, Admin, Ladies, and Boys for ddaemon guild
* We have a guild with Tom and Paul called GamerNight, with the Channel CSGO

[wiki.software.list.neo4j.errors](../neo4j/errors.md)
[wiki.software.programming language.cypher.Basic Queries](Basic%20Queries.md)

``` cyper
// Check existing nodes and relationships
MATCH (n) RETURN n;
// Match N
MATCH (n)
DETACH DELETE n


``` cypher
CREATE (g:Guild    {name:'ddaemon'})
RETURN g;
CREATE (g:Guild    {name:'GamerNight'});
CREATE (u:User     {name:'Paul'});
CREATE (u:User     {name:'Amy'});
CREATE (u:User     {name:'Tom'});
CREATE (u:User     {name:'Sarah'});
CREATE (u:Channel  {name:'General'});
CREATE (u:Channel  {name:'CSGO'});
CREATE (u:Channel  {name:'Admin'});
CREATE (u:Channel  {name:'Ladies'});
CREATE (u:Channel  {name:'Boys'});

MATCH (guild:Guild     {name:'ddaemon'})
MATCH (channel:Channel {name:'General'})
CREATE (guild)-[:GuildChannel]->(channel);

MATCH (guild:Guild     {name:'ddaemon'})
MATCH (channel:Channel {name:'Admin'})
CREATE (guild)-[:GuildChannel]->(channel);

MATCH (guild:Guild     {name:'ddaemon'})
MATCH (channel:Channel {name:'Ladies'})
CREATE (guild)-[:GuildChannel]->(channel);

MATCH (guild:Guild     {name:'ddaemon'})
MATCH (channel:Channel {name:'Boys'})
CREATE (guild)-[:GuildChannel]->(channel);

MATCH (user:User       {name:'Paul'})
MATCH (channel:Channel {name:'Boys'})
CREATE (user)-[:Join]->(channel);

MATCH (user:User       {name:'Tom'})
MATCH (channel:Channel {name:'Boys'})
CREATE (user)-[:Join]->(channel);

MATCH (user:User       {name:'Amy'})
MATCH (channel:Channel {name:'Ladies'})
CREATE (user)-[:Join]->(channel);

MATCH (user:User       {name:'Sarah'})
MATCH (channel:Channel {name:'Ladies'})
CREATE (user)-[:Join]->(channel);

MATCH (user:User       {name:'Paul'})
MATCH (channel:Channel {name:'General'})
CREATE (user)-[:Join]->(channel);

MATCH (user:User       {name:'Amy'})
MATCH (channel:Channel {name:'General'})
CREATE (user)-[:Join]->(channel);

MATCH (user:User       {name:'Tom'})
MATCH (channel:Channel {name:'General'})
CREATE (user)-[:Join]->(channel);

MATCH (user:User       {name:'Sarah'})
MATCH (channel:Channel {name:'General'})
CREATE (user)-[:Join]->(channel);

MATCH (user:User       {name:'Paul'})
MATCH (channel:Channel {name:'Admin'})
CREATE (user)-[:Join]->(channel);

MATCH (guild:Guild  {name:'ddaemon'})
MATCH (user:User    {name:'Amy'})
CREATE (user)-[:MemberOf]->(guild);

MATCH (guild:Guild  {name:'ddaemon'})
MATCH (user:User    {name:'Tom'})
CREATE (user)-[:MemberOf]->(guild);

MATCH (guild:Guild  {name:'ddaemon'})
MATCH (user:User    {name:'Paul'})
CREATE (user)-[:MemberOf]->(guild);

MATCH (guild:Guild  {name:'ddaemon'})
MATCH (user:User    {name:'Sarah'})
CREATE (user)-[:MemberOf]->(guild);

MATCH (guild:Guild  {name:'GamerNight'})
MATCH (user:User    {name:'Paul'})
CREATE (user)-[:MemberOf]->(guild);

MATCH (guild:Guild  {name:'GamerNight'})
MATCH (user:User    {name:'Tom'})
CREATE (user)-[:MemberOf]->(guild);

MATCH (user:User       {name:'Paul'})
MATCH (channel:Channel {name:'CSGO'})
CREATE (user)-[:Join]->(channel);

MATCH (user:User       {name:'Tom'})
MATCH (channel:Channel {name:'CSGO'})
CREATE (user)-[:Join]->(channel);
```

``` cypher
//Check Exists
MATCH (user:User       {name:'Tom'})
MATCH (channel:Channel {name:'CSGO'})
UPDATE (user)-[:Join]->(channel);
RETURN (user)-[:Join]->(channel)

MATCH (g:Guild  {name:'hello'})
RETURN COUNT(g);


MATCH (u:Channel {name:"General"})
DELETE u;

MATCH (a)-[b]-(u:Channel {name:"General"})
RETURN a, b, u;

MATCH (a)-[b]-(u:Channel {name:"General"})
DELETE b;


MATCH (g:Guild) RETURN COUNT(g);
DELETE g
```

``` cypher
MATCH (user:User)
MATCH (guild:Guild)
MATCH (channel:Channel)
return user, channel, guild

MATCH (guild:Guild)
return guild.name

MATCH (channel:Channel)
return channel.name

MATCH (user:User)
return user.name

MATCH (guild:Guild)
return guild

MATCH (guild:Guild)
MATCH (channel:Channel)
return guild, channel

MATCH (user:User)
MATCH (channel:Channel)
return user, channel

MATCH (user:User)
MATCH (guild:Guild)
return user, guild

MATCH (channel:Channel {name:"Ladies"})-[:Join]-(user:User)
RETURN channel, user

MATCH (channel:Channel {name:"Ladies"})-[:Join]-(user:User)
RETURN user.name

MATCH (user:User)-[:MemberOf]->(guild:Guild)
RETURN user, guild

MATCH (user:User)-[:MemberOf]->(guild:Guild)
RETURN user.name, guild.name
```

## Scratchpad

``` cypher

MATCH (movie:Movie)
RETURN movie.title

CREATE (g:Guild {name:'ddaemon'})-[:GuildUser]->(u:User {name:'Paul'});
CREATE (g:Guild {name:'ddaemon'})-[:GuildUser]->(u:User {name:'Amy'});
CREATE (g:Guild {name:'ddaemon'})-[:GuildUser]->(u:User {name:'Tom'});
CREATE (g:Guild {name:'ddaemon'})-[:GuildUser]->(u:User {name:'Sarah'});
CREATE (u:User {name:'ddaemon'})-[:GuildUser]->(u:User {name:'Sarah'});


CREATE INDEX ON:Guild(Tag)

CREATE CONSTRAINT ON (u:User) ASSERT u.name IS UNIQUE;
CREATE CONSTRAINT ON (u:Guild) ASSERT u.name IS UNIQUE;
CREATE CONSTRAINT ON (u:Channel) ASSERT u.name IS UNIQUE;

```