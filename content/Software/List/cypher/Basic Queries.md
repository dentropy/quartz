---
id: 1TwoWkSGhzGERCkSGwGvP
title: Basic Queries
desc: ''
updated: 1639967110426
created: 1639930755032
---


![](/assets/images/2021-12-19-15-07-33.png)

## Good Resources

* [Intro to Graph Databases Episode #5 - Cypher, the Graph Query Language - YouTube](https://www.youtube.com/watch?v=l76udM3wB4U&t=1s)


## Create Database

**ENTERPRISE ONLY FEATURE**

* Use docker to run multiple instances

* Sources
  * [Docker example](https://stackoverflow.com/a/51582970)
  * [Database management - Neo4j Cypher Manual](https://neo4j.com/docs/cypher-manual/current/databases/)

## List nodes's in database

``` cypher
// Just nodes
MATCH (n) RETURN n;


// Nodes that have a relationship to another node
Match (n)-[r]->(m)
Return n,r,m;

// Match A Specific node label

// Match A Specific relationship

// Match A Specific property on a node

// Match a Specific property on a relationship

// Nodes that have a specific label

// Relationships that have a specific property

```

* Sources
  * [Get all nodes and the relations of all nodes - Neo4j Graph Platform / Cypher - Neo4j Online Community](https://community.neo4j.com/t/get-all-nodes-and-the-relations-of-all-nodes/12929)
  
## Delete everything in database

``` cypher
MATCH (n)
DETACH DELETE n
```

* Sources
  * [DELETE - Neo4j Cypher Manual](https://neo4j.com/docs/cypher-manual/current/clauses/delete/)


## Input some basic data

``` cypher
//data stored with this direction

// Node, Label, Relationship Property

// Create a node with a 
CREATE (p:Person)-[:LIKES]->(t:Technology)
CREATE (ee:Person {name: 'Emil', from: 'Sweden', kloutScore: 99})

```

* Sources
  * [CREATE - Neo4j Cypher Manual](https://neo4j.com/docs/cypher-manual/current/clauses/create/)

## Matching

``` cypher
//query relationship backwards will not return results
MATCH (p:Person)<-[:LIKES]-(t:Technology)

//better to query with undirected relationship unless sure of direction
MATCH (p:Person)-[:LIKES]-(t:Technology)
```
