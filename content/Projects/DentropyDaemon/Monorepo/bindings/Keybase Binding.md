## Dentropy Daemon Keybase Binding

The goal of #dentropyDaemon is to create a unified privacy oriented API for all data a individual generates. Keybase does not store data in a nice queriable therefore we need to transfer the data there into something easier to query. The goal of the keybase binding is to generate a complete export from a keybase account. This includes your selection of all private messages, all team chats, all shared folders, and all git repos.

## Tool Building

There are two distinct parts of the keybase binding, export and analysis. I (Paul) believe we should keep these systems tools separate. Whatever techniques we develop for analysis will be applicable for other bindings such as discord, facebook, and telegram. The problem now is what level of analysis can be done in the export before it reaches the analytical tools.

## Social Media

* [wiki.ddaemon.monorepo.bindings.keybase.README](keybase%20datapipeline)
* * [wiki.ddaemon.monorepo.bindings.keybase.schema](Keybase%20Schema)

To date, a lot of the project revolves around scraping text data and linking it up in a graph structure for visualization. Open questions include:
* ***Can we build a model and API that helps mediate events such as the **[Complexity Weekend](https://www.ComplexityWeekend.com)** hackathons?***
  + *By providing real-time actionable insight to event facilitators and organizers?*
  + *By suggesting emerging shared ontologies during interdisciplinary discussions?*
  + *By providing a feedback interface for community-driven value-state assignment?*
  + *By indicating the emergence of **Surprise** or other graph-defined endpoints indicating that interesting conversation is happening in a particular locale (channel).*
* ***Can we build a tool that facilitates communication by helping us write more effectively?***

## Export

The goal of the export tooling is to export the data from keybase so it can be consumed by the generalized Analyze and Shape tools (see below). These export tools will be able to export the entire state of keybase so that it can theoretically be plugged into another social media platform in case keybase is destroyed. This means exporting the following.

* Every message, message metadata, and attachments sent and recieved personally and through teams and groups. 
* [KBFS](https://book.keybase.io/docs/files) files
* [git](https://book.keybase.io/git) repos
* Meta data of everyone one follows, follows them, and the people on their teams
  * Where user has verified their keybase identity
  * Blockchain addresses and PGP public keys 
  * Who follows these people
  * Who these people follow

These export tools should be able to keep an existing export up to and or sync up old exports rather than requiring an entirely new export to be created.

This export tool must be able to export each type of data separtely.

Some analysis should be done on the data within the export itself.

There should be export tools to convert the generalized export into data science formats such as JSON, CSV, Excel, and more. These exports can then be fed into the generalized social media analysis tools.

Another feature is a dockerized REST API to help with Exporting and making the data available to the analysis tools.

## Analyze and Shape

Once the data is exported we can start generating insights on the data which can be used to shape human behavior. There are many types of analysis including,

* General Statistics
  * [Questions for the Data](/dentropydaemon/human-programable-interface/social-media-singularity/keybase-binding/data-questions)
* Topic Modeling
* Sentiment Alaysis
* Generative Modeling using GPT3 and friends
* Natural language processing


## Further Reading

* [Exponential Organizations][https://www.openexo.com/exponential-organizations-book] 
* [Infinite Games for Infinite Teams][https://www.remotorconsulting.com/uploads/4/8/4/2/48428829/infinite_games_for_infinite_teams__4_.pdf] 

## Links

* [wiki.software.List.keybase](.md)
