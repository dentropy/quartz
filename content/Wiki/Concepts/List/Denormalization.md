---
id: 6E2IGmxlteV8rJ36GlqtF
title: Denormalization
desc: ''
updated: 1642691041128
created: 1642602322107
---

## Definition

Must be done in read heavy workloads to increase performance. You put the same data in two different tables in a way that the data has to be updated in both places rather than one.

We don’t want or need extra copies of our data, this is data redundancy. We want to be able to update data in one place and have that be the source of truth, that is data integrity.

JOINS on the database allow for outstanding flexibility but are extremely slow. If you are dealing with heavy reads on your database, you may want to think about denormalizing your tables. You get your data into normalized form, and then you proceed with denormalization. So, denormalization comes after normalization.

## Links

* [wiki.concepts.list.Database](Database.md)

## Sources

* [Denormalization - Wikipedia](https://en.wikipedia.org/wiki/Denormalization)
* Udacity