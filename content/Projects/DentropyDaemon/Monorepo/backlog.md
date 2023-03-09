---
id: pe0u41aipnz5n2uycetduju
title: Backlog
desc: ''
updated: 1644014638914
created: 1641326182418
---

## [](dentropydaemon-wiki/Projects/DentropyDaemon/Monorepo/backlog%7Cwiki.ddaemon.monorepo.Roadmap#backlog)

## Feedback

* Fix the documentation for my project
* Polish
* Additional Charts
* Backend API
* Tell a bit of a story through the data
* User Stories

## General Backlog

* Reference design for backend API
* Start thinking about caching

## Epics

* Reaction type queries
* Multi team/user/topic select
* Messages per hour
* Create API Backend rather than proxying the elasticsearch queries
* Modular Query Builder function (Which can be moved to the backend later)
  * Add team / user select programmatically to each query rather than hard coding it in the JSON
  * Add specific team, user, and topic to query programmatically
  * Get most reactions to a specific message
  * Reply queries
  * Per capita queries
* Finish adding the elasticsearch error response function in all components

## Tech Debt

* Review names for all reducers
* Skim through everything
  * Place better console.logs as comments for later debugging
  * Remove the unused components
* Margin and CSS stuff

## Delete Specific Index

``` bash
source .env
curl -XDELETE -iL -u $ELASTIC_USER:$ELASTIC_PASS "$ELASTIC_NODE/discordguild*"
```

## Discord Binding

* How many users in a guild
* Add scripts for dumping and indexing each separate index
* Get the character count of the contents
* Get the number of attachments, mentions, embeds etc
* Parse out any domain names

## DataViz Backlog

* What about specific user and topic queries
  * A specific user is not going to work because we want to graph the different message types
  * What about their activity across channel's?
  * For this it requires doing an aggregation on a separate field
  * This is worth doing
  * User message types is not going to work
* General search functionality
* Replies Graph
  * Topic's across team
  * User
* Datagrid that can list complete messages
  * Combine the data grid components?
  * Longest
  * Replies
  * Most Reaction's

## Git Binding

* DOCUMENT THE THING [ddaemon.monorepo.bindings.git.README](HERE)

**Repo Errors**

https://github.com/Loopring/lightcone 
https://github.com/nemtech/nem2-workshop-nem-applied-to-supply-chain
https://github.com/kusamanetwork/kusama.network
https://github.com/Abracadabra-money/wonderland-frontend
https://github.com/curvefi/curve-vue
https://github.com/0xProject/contracts
https://github.com/XYOracleNetwork/xyo-solidity
https://github.com/oceanprotocol/ocean
https://github.com/oceanprotocol/squid-js
https://github.com/oceanprotocol/keeper-contracts
https://github.com/oceanprotocol/pleuston
https://github.com/singnet/singnet

## Keybase Binding

* Parse Reactions
