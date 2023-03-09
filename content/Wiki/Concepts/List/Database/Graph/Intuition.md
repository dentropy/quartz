---
id: noRe6uUK51ZRE1MvR85PS
title: Intuition
desc: ''
updated: 1640021391344
created: 1640014666192
---

Hello this is Dentropy and it is my goal to use you as a tool in order to cringe my way to self actualization. Today I want to share my current intuition on graph databases.

Every app and website out these uses a database because at the end of the day the when you get to the bottom of things the file system itself is a database. You know unix philosophy, when it comes to computers, everything is a file.   applications and websites are just cool ways of displaying queries into a database. Google, Facebook, Twitter, Discord, Keybase, Notion, Evernote, Reddit, and even Email itself are all just ways of interacting with a database. Maybe the meaning of life in a specific type of infinite recursion loop into the database of the universe itself.

Databases have these things called Schemas. Schemas are rules for where things go. For example within the context of the universe the laws of physics would be the schema. Databases are technically only storing 1's and 0's but those 1's and 0's can be arranged to represent words, dates, numbers, images, videos, audio, 3D Virtual Environments, and much much more. The abstractions of 1's and 0's can be linked together in order to create a schema. There are two main forms of schemas, SQL, Structure Query Language, and NOSQL such as a Graph Database.

Now let's go take a look at a SQL database schema and compare it with a NOSQL database.

You can think of SQL as a bunch of EXCEL spreadsheets that can talk to one another. Here I have created a Schema to represent the core functionality of Discord. You can see we have our Guild's, Messages, Channel's, Users, Reactions, Attachments etc. Using SQL we can recursively look up data in order to generate the interface people are familiar with. Let's first take a look at the guilds, these names here as we go down, guild_id, guild_name, guild_iconUrl are all displayed here as row's but within a database table, think spreadsheet, they would be columns. So we could have any number of Guilds, Channels, Messages, and Users in their corresponding tables.

You can use intuition to understand most parts of this graph. Every channel is linked to a guild, from a message you can look up a user, mention, or attachment. There are issues with this schema that don't work in SQL that requires a Graph Database. These issues occur when you have multiple reactions, mentions, attachments, or embeds within a single message. Another example is how a user can be in multiple guilds and channel's.

In order to store this extra dimensional information for reactions, mentions, attachments, channel member setc. etc. We either need more table's to store data or much much more complicated SQL queries that take longer and longer to execute. So let's skip that and take a look at Graph Databases.

This is a Graph representation of Discord's core functionality. Graph's are just nodes with relationships connecting them. What's important about graph's is that both Node's and Relationships can contain their own data that can be queried. The structure of the data is built into the Schema rather than the query. Let's take a look at some of our edge cases Mentions, Attachments, Embeds, Guild Member's etc. etc.
