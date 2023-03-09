## Reminders

* [Project Management.ddaemon-webapp.logs](ddaemon%20webapp%20logs)
* Key base Data Ex filtration
* Getting Started with Discord Bot Development
* Rubber Duck Debugging
* Diagram it out
* [Project Management.ddaemon-webapp.User Stories](../../../../../Wiki/Concepts/List/User%20Stories.md) BEFORE developing a feature

## Current Task

* REREAD THE USER STORIES
* Review all user stories for the list queries and create a list of tech debt
* Gotta fix the way the reducers values are named for the Query Selector especially for the lists

## Research Notes

* [wiki.software.Catagories.Frontend.Datagrid](Frontend%20Datagrid)
* [wiki.software.Catagories.Data Visualization](../../../../../Software/Software%20Catagories/Data%20Visualization.md)

## Design

* [wiki.software.Catagories.Data Visualization](../../../../../Software/Software%20Catagories/Data%20Visualization.md)
* Do I want the graph itself to be stored in the context?
* Do I want to store each part of the graph as a separate reducer and use a separate context?
  * Yes but that is over optimization at this point
* Reactions and Replies
  * Do I want to do an aggregation for reactions to a message for slack?
  * First I would have to seach all replies, then I would have to do an aggregation on the specific messages replied to


## Feedback

* Query replies
* Per Capita message types
* URL's per person
* Emoji's sent by specific user distribution
* Emoji's received by specific user
* Graph of who interacts via emoji's
* Time based stuff
* Search across teams
* Who is across multiple teams
* CRM Integration
* Hashtag support
* Completed
  * Who has not posted in X Channel

## [Project Management.ddaemon-webapp.User Stories](../../../../../Wiki/Concepts/List/User%20Stories.md)

## Features*

* Graph select
* Get an example query for every graph you want to query
  * [Project Management.ddaemon-webapp.Query Data Visualizations.analysis queries](../../User%20Stories/Queries%20for%20DDaemon.md)
    * Get list of all users
    * Emoji analysis
    * View context of messages
    * Support for multiple teams
    * Most popular domain names
* Error correction

## Bindings

* keybase-binding-nodejs
  * Get the attachments
    * Import topic list
    * Check if topic has been exported
    * Export or import topic
    * Find all attachments and save to attachments folder
  * List group chats
  * Export group chat
  * TODO ALSO EXTRACT CHARACTER COUNT, URLS, AND WORD COUNT FOR EDITS
* discord-binding
  * Document how to get token
  * Document what is missing in [Paul Mullins / DiscordChatExporter Helper · GitLab](https://gitlab.com/dentropy/DiscordChatExporter-Helper)
* facebook-binding
* reddit-binding
* pinboard-binding

## Issues

* We want a generalized way to do the elasticsearch queries
  * Why not have a switch statement and for each graph require a specific set of key's
  * This way it will be easy to get the graph title managed here as well
  * I guess this requires a custom component with props, yes it does
  * I need to add a props section to this wiki
* There is not title for the graph
  * Research vega title
* I want to make the sidebar built into the graph render component

## Steps to add a graph

* Create component template
* Requirements
  * Graph name:
  * Graph ID:
* Add component to KeybaseRoot.js
* Add graph radio button to QuerySelect.js
* Add to switch statement in KeybaseRoot.js
* Automatically select Topic and Team in the left sidebar

## Nice to haves

* List users that are accounted for in the other part of the pie chart

## Elastic Keys

* user = msg.sender.username
* topic = msg.channel.topic_name.keyword
* team = msg.channel.name
* Message type = msg.content.type
