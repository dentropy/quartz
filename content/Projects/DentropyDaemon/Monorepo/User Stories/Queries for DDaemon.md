## Query Inspiration

* [wiki.ddaemon.monorepo.bindings.keybase.queries](../bindings/git/queries.md)
* [wiki.software.list.Elasticsearch.Examples.Basics](../../../../Wiki/Skills/Learning%20Pathways/SysAdmin/Basics.md)
* [wiki.software.list.Elasticsearch.size length filter](../../../../Software/List/Elasticsearch/size%20length%20filter.md)

## Reminders

* We already indexed the character length as well as word length
* Should we also index number of reactions, YES it will make things much easier
* **I need to fix the indexing of topic names, entire string not there**
* **I should count the reactions as a int when initially indexing**
* **I should index the size of each message when initially indexing**
* **Skip Pagiation for now, just get 250**
* **Don't try and get everything working at once**
* We can look for the most of a specific character or word
*  [User Stories - DDaemon](../User%20Stories%20-%20DDaemon.md)

## Query Brainstorming
* Who sent the most messages
* Who sent the most message, within a certain time range
* Who sent reacted the most per message sent
* Who replied the most per message sent
* Who sent the more ( reactions
* Who was replied to the most
* Longest active user
* Shortest active user
* Average Half Life of a User

## Base Queries (Not in dashboard)

* [✅] List all users
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListAllUsers](Lists/KeybaseListAllUsers.md)
* [✅]List all teams
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListAllTeams](Lists/KeybaseListAllTeams.md)
* [✅] List all topics
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListAllTopics](Lists/KeybaseListAllTopics.md)
* [✅] List all topics for specific team
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListAllTopicsForSpecificTeam](Lists/KeybaseListAllTopicsForSpecificTeam.md)
* [✅] List all user on specific team
  * Built into left sidebar
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListAllUsersOnSpecificTeam](Lists/KeybaseListAllUsersOnSpecificTeam.md)
* [✅] List search results
  * There is a separate general search module
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListSearchResults](Lists/KeybaseListSearchResults.md)

## List

* [❌] List messages before a specific message
  * **NEED SOCIAL INTERFACE RECREATION MODULE**
* [❌] List messages after  a specific message
  * **NEED SOCIAL INTERFACE RECREATION MODULE**
* [❌] List most recent messages from team
* [❌] List most recent messages posted in topic
* [✅] List all users with the teams they are on
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListAllUsersWithTheTeamsTheyAreOn](Lists/KeybaseListAllUsersWithTheTeamsTheyAreOn.md)
* [✅] List topics a user has posted in
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListTopicsAUserHasPostedIn](Lists/KeybaseListTopicsAUserHasPostedIn.md)
  * [✅] List topics a user has NOT posted in
    * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListTopicsAUserHasNOTPostedIn](Lists/KeybaseListTopicsAUserHasNOTPostedIn.md)
* [✅] List teams  a user has posted  in
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListTeamsAUserHasPostedIn](Lists/KeybaseListTeamsAUserHasPostedIn.md)
  * [✅] List teams  a user has NOT posted in
    * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListTeamsAUserHasNOTPostedIn](Lists/KeybaseListTeamsAUserHasNOTPostedIn.md)
* **ALL BUGS BELOW ARE BECAUSE ALL USERS ARE LISTED RATHER THAN USERS ON TEAM**
* [✅] List users  that have posted in team
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListUsersThatHavePostedInTeam](Lists/KeybaseListUsersThatHavePostedInTeam.md)
  * [✅] List users  that have NOT posted in team
    * KeybaseListUsersThatHaveNOTPostedInTeam
      * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListAllTopicsForSpecificTeam](Lists/KeybaseListAllTopicsForSpecificTeam.md)
      * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListTopicsAUserHasPostedIn](Lists/KeybaseListTopicsAUserHasPostedIn.md)
* [✅] List users  that have posted in a specific topic
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListUsersThatHavePostedInASpecificTopic](Lists/KeybaseListUsersThatHavePostedInASpecificTopic.md)
  * [✅] List users  that have NOT posted in a specific topic
    * KeybaseListUsersThatHaveNOTPostedInASpecificTopic
      * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListAllUsersOnSpecificTeam](Lists/KeybaseListAllUsersOnSpecificTeam.md)
* [✅] List longest messages in specific topic(Characters)
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListLongestMessagesInSpecificTopicCharacters](Lists/KeybaseListLongestMessagesInSpecificTopicCharacters.md)
* [✅] List longest messages on team (Characters)
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListLongestMessagesOnTeam](Lists/KeybaseListLongestMessagesOnTeam.md)
* [✅] List longest messages in specific topic(Words)
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListLongestMessagesInSpecificTopicWords](Lists/KeybaseListLongestMessagesInSpecificTopicWords.md)
* [✅] List longest messages on team (Words)
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListLongestMessagesOnWords](Lists/KeybaseListLongestMessagesOnWords.md)
* [✅] List mentions of teams
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListMentionsOfTeams](Lists/KeybaseListMentionsOfTeams.md)
* [✅] List mentions of topics
  * Do we want to list the most recent mention of topics or do we want to just be able to search channel mentions?
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListMentionsOfTopics](Lists/KeybaseListMentionsOfTopics.md)
* [❌] List mentions of specific topic
  * **NEED TO UPDATE INDEX TOOL**
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListMentionsOfSpecificTopic](Lists/KeybaseListMentionsOfSpecificTopic.md)
* [❌] List mentions of specific team
  * **NEED TO UPDATE INDEX TOOL**
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListMentionsOfSpecificTeam](Lists/KeybaseListMentionsOfSpecificTeam.md)
* [❌] List mentions of specific user
  * **NEED TO UPDATE INDEX TOOL**
* [❌] List mentions of users
  * **NEED TO UPDATE INDEX TOOL**
* [❌] List messages reacted to most in specific topic
  * **NEED TO UPDATE INDEX TOOL**
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListMessagesReactedToMostInSpecificTopic](Lists/KeybaseListMessagesReactedToMostInSpecificTopic.md)
* [❌] List messages reacted to most on team
  * **NEED TO UPDATE INDEX TOOL**
  * [wiki.ddaemon.monorepo.User Stories.Lists.KeybaseListMessagesReactedToMostOnTeam](Lists/KeybaseListMessagesReactedToMostOnTeam.md)
* [❌] List messages reacted to most on team
  * **NEED TO UPDATE INDEX TOOL**
  * KeybaseListMessagesReactedToMostOnTeam
* [❌] List most replied to messages in specific topic
  * **NEED TO UPDATE INDEX TOOL**
  * KeybaseListMostRepliedToMessagesInSpecificTopic
* [❌] List most replied to messages on team
  * **NEED TO UPDATE INDEX TOOL**
  * KeybaseListMostRepliedToMessagesOnTeam
* [❌] Most recent messages in [Everything, Team, Topic]
* Advanced (Requires new component set)
  * List messages from set of User,Topic, or Team chronologically

## Ways to measure things

* Existence of characteristic exists
  * User has or hos not posted in Topic or Team
  * User has or has not replied to or mentioned another user
* Longest
  * Message relative to User, Topic, and Team
* Most
  * Reactions to Message across topic, team, or specific user
  * Replies to message across topic, team, or specific user
  * Messages within or from a specific topic, team, or user
  * Mentions of user across topic or team
  * Mentions of topic, across team
* Time / Chronology
  * Oldest
  * Newest
  * Restricted time range
