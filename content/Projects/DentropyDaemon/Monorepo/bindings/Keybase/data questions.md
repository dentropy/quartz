---
id: vUsfplKALJeTJAa0lfG0m
title: Questions for the Data
desc: ''
updated: 1666809609462
created: 1628474425487
description: null
published: true
date: '2021-06-06T17:53:20.421Z'
editor: markdown
dateCreated: '2020-10-28T20:47:46.797Z'
---

# Questions for the Data

We are able to export the chats from keybase teams to JSON files and SQL databases but now what do we do with the data? There are a lot of questions we can ask of the data here is an attempt to organize them all.

## Overview of the Data

* Message metadata
  * Time message sent
  * URL's in a message
  * Number of characters in a message
  * Number of words in a message
  * Weather a message has been reacted too
  * Oh and the message text itself
* Ways to group the data
  * Topic
  * User

## Analysis of the data so far

### Generalized

* characters_per_user
  * total number of characters within all messages per user sorted from highest to lowest
* characters_per_topic
  * total number of characters within all messages per topic sorted from highest to lowest
* messages_per_user
  * total number of messages sent per user sorted from highest to lowest
* messages_per_topic
  * total number of messages sent per topic sorted from highest to lowest
* num_users_per_topic
  * total number of users who have sent a message in each topic sorted from highest to lowest
* reaction_per_message
  * all messages with reaction organized from most reacitons to the message to the lowest
* reaction_sent_per_user
  * total number of reaction sent from each user organized from highest to lowest
* reaction_popularity_map
  * total number of each reaction sent orgnaized from highest to lowest
* reactions_per_user
  * total number of reactions sent per user organized from highest to lowest
* recieved_most_reactions
  * total number of reactions receieved per user organized from highest to lowest
* Who edits messages the most
  * In total
  * Per Capita
* Who deletes messages the most
  * In total
  * Per Capita
* Which topic has most edited messages
  * In total
  * Per Capita
* Which topic has most deleted messages
  * In total
  * Per Capita
* Most popular domains posted

### Specific

* get_reaction_poplarity_topic
  * gets each reaction type along with the number of times it was used within a specific topic
* get_reaction_type_popularity_per_user
  * gets each reaction type along with number of times it was used for a specific user
* distribution of word length per topic
  * work in progress

## Analysis TODO

* Sum deleted and edited messages and compare on per capita basis
* Dump keybase user metadata such as linked accounts and followers
  * Being worked on by Dentropy
* Dump all attachments
* Graph of messages per topic per user
  * Compare users side by side
* Bring time analysis into this
  * Activity over time in each topic
  * Messages per hour, day, month
  * Number of people posting per day, week, hour, month
* Word Maps
  * Topic
  * User
  * Total
* Profanity???
  * What profanity was used
  * Who used it most
  * What topics have most profanity
* Percentage match of keybase users
* Topic Modeling
  * Users using the same infrequent word
  * Number of times each word is used
  * Google Ngram functionality
  * Filter out stop words
  * Find incorrectly spelt words
    * Which person incorrectly spells the most
  * python Word Similarity stuff
  * NLTK grammar stuff
  * Personality stuff
  * How concise a message is
  * Replicate functionality of Obsidian using python
  * Use the data to train models, talk to Jason about this
* Data formats for
  * GraphQL
  * SQL to CSV exporter
  * SQL to JSON exporter
  * Microsoft PowerBI
  * R
* Beyond Keybase
  * Research what Watson, Wolfram, and Python linguistic tools 
  * Research Existing Bots
  * Most active twitter users on keybase?
  * Tools to dump twitter data
  
  
## 20210606 Brainstorming

* URL Links
  * Who posts more links
  * Get all links from specific person
  * Get all links from specific channel
  * Get links with most reactions
  * Get links with most reply's
  * How can we tell who clicked on a link
    * Implement a culture of using a specific emoji
* Which people are interacting with each other.
* Which channels are a user most active in sorted
	* Compare users "activity profile's"
