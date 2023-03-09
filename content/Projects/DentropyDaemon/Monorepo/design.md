---
id: rhncz3f56c5oe8wo8mege2z
title: Design
desc: ''
updated: 1644024709731
created: 1641491454020
---

## Backend API

## Requirements

* Questions
  * Do we want to use the same query builder for the lists of messages as well
  * Why not!?!? Just make the modules reusable across query types
  * A Match Guilds, Users, and Messages query will be usable everywhere
  * The aggregations are options
  * The count/size is a variable
* Types of queries
* Types of restrictions
  * Match by Guilds, Users, and Messages
  * Match within time range
  * Time frequency, messages / date
  * URL Domain

## PSA

Do not match ths soft description of a topic or a user match the complete user ID. This means the conversion object needs to be stored in the client.

Seems like it is GraphQL Time