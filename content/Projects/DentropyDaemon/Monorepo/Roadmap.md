---
id: b21go3enn3fflkc1bjtcynt
title: DDaemon Webapp Roadmap
desc: ''
updated: 1644026896400
created: 1638753929746
---

![AnalysisQueries.svg](AnalysisQueries.svg)

## [wiki.ddaemon.monorepo.backlog](backlog.md)

## Short term backlog

* Recreate graphs from keybase-binding for discord-binding in the dashboard
* Features for all Bindings
* Recreate messaging interface
* Keybase Migration
* Data Scraping
  * Reactions Index
    * Write a bot for scraping
    * Get an export for discord itself
  * Keybase Binding
    * Query conversation_ID rather than topic_name for all queries
    * Add the time based query feature
    * Fix up the keybase importer
      * The reactions do not need to be their own key's they should be a list and automatically aggregated
* Data Visualization
  * EntityID to Entity Name for users and teams


## Version 1.0 Backlog

* Most Per
  1. More Graphs Types
  1. Reactions
* General Search
  1. Specify more specific search
* [wiki.ddaemon.monorepo.User Stories.Lists](Message%20Lists)
  1. Reaction queries
* Time based queries
* Per Capita Queries across same catagories as Most per
* Basic meme search
  * Mentions of Stocks, Crypto, People etc. etc.
* [wiki.ddaemon.monorepo.bindings](Additional%20Social%20Media%20Bindings)
  * Manual import for [wiki.ddaemon.monorepo.bindings.discord](bindings/Discord%20Binding.md) and [wiki.ddaemon.monorepo.bindings.proposed.Matrix](../../../Software/List/Matrix.md) export using a bot similar to the one built for keybase
* API with Auth
* User authentication for dashboard, Social Media DID Application, keybase social proofs using [wiki.software.list.CeramicDOTNetwork](../../../Software/List/Ceramic.md)
  * This will allow easy bootstraping of future messaging protocols to the chat sync service
  * Privacy is required for this
* Live chat sync for Matrix, Keybase, and Discord [wiki.ddaemon.monorepo.bindings](Social%20Media%20Bindings)


## Beyond Ver 1.0.0 (in order of priority)

* Chrome Extension with multiple backends
* Sentiment Analysis (Need help with this)
* Meme Vectors (I need to talk with a *professional* linguist)
* Persona refactoring / Anonymizer
  * Feature request from [Relationships.People.Bleunight](../../../../MyDendronExistence/Relationships/People/Bleunight.md)
* Frontend / Web browser extension that can plug into multiple data sources. This would allow for personal data to be searched, such as facebook, email, whatsapp, and signal to be searched beyond the general discord
* Meta Social Bookmarking feature similar to [wiki.software.List.Memex](../../../Software/List/Memex.md) and [wiki.software.List.Hypothes](../../../Software/List/Hypothes.md)
* End to end encryption!?!?!?!
* Decentralized hosting via decentralized storage(IPFS, Filecoin, Arweave, Sia, Maidsafe, Storj) and decentralized compute such as [Internet Computer protocol](https://dfinity.org/)

## Raw Drawings

* [AnalysisQueries.draw.io](./assets/diagrams/AnalysisQueries.drawio)
