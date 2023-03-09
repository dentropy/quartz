Project source code available at [github.com/dentropy/ens-indexing](https://github.com/dentropy/ens-indexing)

## Summary

ENS may be used for a couple dapps but it is mostly a relic of something that was supposed to be. There are about 450,000 registered domain names and about 10,000 of them with actual records. The domains registered for .onion sites do not even work because they are V2 addresses. A lot of the libraries are not maintained and should be depreciated even in ecosystems like Python. I guess I should list all the interesting domains before putting this project away.

## Goal
<!-- What are you trying to accomplish -->

Scrape all [wiki.software.List.ENS  Ethereum Name Service](../../Software/List/ENS%20%20Ethereum%20Name%20Service.md) domains and records.

## Context
<!-- Background information -->

[wiki.software.List.ENS  Ethereum Name Service](../../Software/List/ENS%20%20Ethereum%20Name%20Service.md) allows individuals to buy domains to set records that contain text. This text can be anything from a sentence, username, URL, Onion address, or content via IPFS or similar protocols.

## Interesting Finds

* [bebahan.eth](https://app.ens.domains/name/bebahan.eth/details)
* [bebeau.eth](https://app.ens.domains/name/bebeau.eth/details)

## Success Criteria
<!-- milestones for this project -->

* Index all ENS currently registered domain names
* Index what records are available for each ENS domain name
* Index resolved records for each ENS domain name

## [projects.ens indexing.logs](Logs%20-%20ENS%20Indexing.md)
<!-- For longer projects, keep a rough log of major events-->

## Outputs
<!-- any outputs that were generated from this project. eg. slides, videos, etc-->

<!-- Everything below this line is work needed to achieve the stated goal-->

## Tasks
<!-- use this space to track current tasks. alternatively, you can also link to your daily journal note -->

#### Get list of all registered domains

* [ENS Subgraph](https://thegraph.com/hosted-service/subgraph/ensdomains/ens)
  * [ensdomains/ens-subgraph: ENS data source for The Graph](https://github.com/ensdomains/ens-subgraph)
  * [How to skip more than 5000 elements in a graph query? : thegraph](https://old.reddit.com/r/thegraph/comments/nx97nk/how_to_skip_more_than_5000_elements_in_a_graph/)
  * "Queries should avoid using very large skip values since they generally perform poorly. For retrieving a large number of items, it is much better to page through entities based on an attribute as shown in the last example."
* [.eth names Registered Dune Analytics](https://dune.com/queries/7507/14878)

#### Get all records attached to domain

* [talentlessguy/get-ens: 🗝️ Get text records of an ENS address with ease](https://github.com/talentlessguy/get-ens)

## Notes
<!-- use this space for arbitrary notes -->

* [How can I find all registered ENS domains and subdomains? - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/80454/how-can-i-find-all-registered-ens-domains-and-subdomains)

## Lookup
<!-- relevant prior work or resources -->

* [wiki.software.List.sqlite](../../Software/List/sqlite.md)
* [Python](../../Software/List/Python.md)
  * [wiki.software.List.pandas](../../Software/List/pandas.md)
* [wiki.software.list.nodejs](../../Software/List/nodejs.md)
  * [wiki.software.list.Puppeteer](../../Software/List/Puppeteer.md)
  * [wiki.software.List.ethersjs](../../Software/List/ethersjs.md)
