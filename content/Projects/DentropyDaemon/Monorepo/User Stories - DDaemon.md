A list of queries that can be done on social media data. Here is a list of queries that can be done on discord

## Design

1. List our all the possible queries and graph's one would want to use
1. List the [](types%20of%20graph's%7Cwiki.concepts.list.graphs#types-of-graphs)
  * Find and test [wiki.software.Catagories.Data Visualization](Implementations)
1. Generate template graph code inside learning-data-visualization git repo

## [Project Management.ddaemon-webapp.Query Data Visualizations](Query%20Data%20Visualizations)

![AnalysisQueries.svg](AnalysisQueries.svg)


## Queries List

* Who has posted in most topics
* What to analyze
   * Graph User activity across guilds
   * Graph User activity across channel's in guild
* Characters Per Message
   * Over Time
* Average for User
   * Average per period of time in channel
   * Good for finding deep back and forths amount invested individuals
* Get number distinct message types
* Basic Queries queries
  * ✅️ Most [messages|edits|deletes|URL's|reactions sent] per
    * User // msg.sender.username
    * Across teams // msg.channel.name
    * Across team // msg.channel.name
    * For specific topic // msg.channel.topic_name
  * ✅️ Sort longest [content_character_length|content_word_length] message per
    * User
    * Across teams
    * Across team
    * For specific topic
  * ✅️ Reaction popularity per 
    * User
    * Across teams
    * Across team
    * For specific topic
* Compound queries (Require painless scripting or recursive query or generate the metadata in another index)
  * ❌️ Most reactions recieved by user **WHEN DUMPING INDEX WHO RECEIVES REACTION**
    * Across teams
    * Across team
    * For specific topic
  * ✅️ Average [content_character_length|content_word_length] message per
    * User
    * Across teams
    * Across team
    * For specific topic
  * ❌️ Longest average [content_character_length|content_word_length] message per
    * User **Use additional index for calculating these statistics, also need a job queue**
    * Across teams
    * Across team
    * For specific topic
  * ✅️ Total number of [messages|edits|deletes] for
    * User
    * Across teams
    * Across team
    * For specific topic
  * ❌️ Ratio of total [messages|edits|deletes] per
    * User **Store the total messages per X in an additional index, also need a job queue**
    * Across teams
    * Across team
    * For specific topic
* Time Queries
  * ❌️ Average messages per day per
    * User
    * Across teams
    * Across team
    * For specific topic
  * ❌️ Sort Most active days per
    * User
    * Across teams
    * Across team
    * For specific topic

## Social Media Queries

* Total messages per
  * User across servers
  * User on server
  * Channel
  * Server
  * User on channel
* Messages per period of time
	* Time Periods
  	* Day of week
  	* Time of day
  * What to analyze
    * User across servers
    * User on server
    * Channel
    * User on channel
    * User on server
* Characters Per Message
  * Over Time
  * Average for channel
  * Average for User
  * Average per period of time in channel
    * Good for finding deep back and froths among invested individuals
* Reactions / Emoji's
	* Most per message
  * Popularity used by specific user
  * Popularity within specific channel
  * Popularity within specific server
* Which user has been tagged the most

# Analysis Queries

A list of queries that can be done on social media data. Here is a list of queries that can be done on discord

* [🚀1️⃣ means we need for Version 1. High priority](Ver 1.0 Queries)
  * 🚀1️⃣ Get messages within last X hours
  * 🚀1️⃣ Remove specified guilds from results
  * 🚀1️⃣ remove specified channels from results
  * 🚀1️⃣ remove specified users from results
  * 🚀1️⃣ Remove Bot messages (messages contain this field already)
  * 🚀1️⃣ Remove Tenor.com links (messages will contain field "containsMeme". 
* [✅ Basics](dentropydaemon-wiki/Wiki/Skills/Learning%20Pathways/SysAdmin/Basics.md)
  * ✅ Get number of items in index
  * ✅ Get mapping (schema) of index
  * ✅ Return Random Results
  * ✅ Search single stocks symbol across messages
  * ✅ Get unique values per field
  * ✅ Sort by size of text field
* [❌ Time based filter](Time based filter)
  * ✅ Before
  * ✅ After
  * ✅ Sort most recent
  * ✅ Sort by oldest
  * ❌ Design issue, tweak for relevance
  * Messages per period of time
    * ❌ Average Character Length Per Message Per Day
    * ❌ Number of Messages per
      * ❌ Day
      * ❌ Week
      * ❌ Month
* [❌ Number of Messages Filter](Number of Messages Filter)
   * ❌ Per Channel per Guild
     * Sum of messages in on Server / Number of Channels
   * ❌ User per guild
     * Number of Channels with message from user / Number of Channels
   * ✅ Total number of messages per
     * ✅ Guild, Channel, User, User in Guild, User in Channel, Stock
  * ❌ Average number of messages per (REQUIRES JAVASCRIPT OR SCHEMA UPGRADE)
     * ❌ Channel per Guild
     * ❌ User per Guild
     * ❌ User per Channel
     * ❌ Stock per Guild
     * ❌ Stock per Channel
* [❌ Message Size Filter](Message Size Filter)
   * ✅ Sort by longest message per
     * ✅ Guild, Channel, User, User in Guild, User in Channel, Stock
   * ✅ Calculate Average Message Size (Characters)
     * ✅ Guild, Channel, User, User in Guild, User in Channel, Stock
   * ❌ Calculate Average Message Size (Word Count)
     * ❌ Guild, Channel, User, User in Guild, User in Channel, Stock
   * ❌ Sort by Longest Average Message Size (REQUIRES JAVASCRIPT OR SCHEMA UPGRADE)
     * ❌ Guild, Channel, User, User in Guild, User in Channel, Stock
* [❌ Reaction Filter](Reaction Filter)
   * ❌ Most variety per message
   * ❌ Number of reactions per channel per guild
   * ❌ Sort by variety of reactions
     * ❌ Guild, Channel, User, User in Guild, User in Channel, Stock
   * ❌ Most reactions to Message
     * ❌ Guild, Channel, User, User in Guild, User in Channel, Stock
   * ❌ Most reactions per
     * ❌ Guild, Channel, User, User in Guild, User in Channel, Stock
   * ❌ Type of Reaction Popularity
     * ❌ Guild, Channel, User, User in Guild, User in Channel, Stock
* ❌ Stock Ticker Popularity Filter
  * ✅ We need a list of stock tickers "Ticker Symbol List" on Google Drive
  * ❌ Stock Ticker Symbol Files managed via git or have a corresponding git repo to make deployment/deployment easier, use it as a submodule. Also unleashes us from the clutches of google.
   * ❌ Filter by
     * ❌ Most mentioned stocks per guild
     * ❌ A Stocks most popular channel's
     * ❌ Which stocks a user mentions most
* General Filters
   * ❌ Remove Bot messages
   * ❌ Remove Tenor.com links
   * ❌ Emoji Removal
   * ❌ Welcome Messages

## Reminders

* [How to get analyzed word count by Elasticsearch?](http://5.9.10.113/36025764/how-to-get-analyzed-word-count-by-elasticsearch)
* [Courses.Data Visualization with D3, JavaScript, React](Data%20Visualization%20with%20D3,%20JavaScript,%20React)
* SET [wiki.software.list.Elasticsearch.Examples.Fielddata](../../../Software/List/Elasticsearch/Fielddata.md) IN ELASTICSEARCH
* [wiki.ddaemon.monorepo.bindings.keybase.queries](bindings/git/queries.md)
* [Project Management.ddaemon-webapp.Query Data Visualizations.analysis queries.sort by most](sort%20by%20most)

## Advanced Search Interface

* Keywords with weighting
* Select specific users
* Select specific topics
* Contains URL
* Tag of a specific user

## See the most messages form a user, topic, or team

## Measure activity per hour, day, week, and month using a heat map

## Shapeshift the way you communicate. Make your messages seems like they come from someone else.

## [wiki.ddaemon.monorepo.User Stories.Blockchain Queries](User%20Stories/Blockchain%20Queries.md)

## Feature Backlog

* Word Cloud
* Sentiment Analysis
* Tagging 
  * Clouding
* Name Density Recognition
* Relationship Extraction, look at relationships between name and entities

## Links

* [](Types%20of%20graph's%7Cwiki.concepts.list.graphs#types-of-graphs)
* [wiki.concepts.list.User Stories](.md)
* [wiki.ddaemon.design.user stories](Dentropy%20Daemon%20User%20Stories)
* [Project Management.ddaemon-webapp.Query Data Visualizations.analysis queries](User%20Stories/Queries%20for%20DDaemon.md)
