---
id: 39fcvxtsi4cbiaas8tq2s3i
title: git binding
desc: ''
updated: 1647011937609
created: 1636861861751
---

## Best Candidate

[wiki.software.list.mergestat](../../../../Software/List/mergestat.md)

## Reviewed Projects

* [GitHub - dmitryn/GitStats: Statistics generator for git repositories. Fork of http://gitstats.sourceforge.net/](https://github.com/dmitryn/GitStats)
  * Requires Python 2
* [GitHub - IonicaBizau/git-stats: 🍀 Local git statistics including GitHub-like contributions calendars.](https://github.com/IonicaBizau/git-stats)
  * Just does git commit stats
* [GitHub - dreamyguy/gitlogg: 💾 🧮 🤯 Parse the 'git log' of multiple repos to 'JSON'](https://github.com/dreamyguy/gitlogg)
  * Does not work on Ethereum EIPs repo
* [nielskrijger/gitstat: Generates git history json datafile for](https://github.com/nielskrijger/gitstat)
  * Works on EIPs repo
  * Seems to have a loop on Dendron and ddamon-monorepo
* [git log json format · GitHub](https://gist.github.com/overengineer/b69e578f5cf7457dc7d4ff8c3b7850bc)
  * Testing on EIPs -- TODO
  * Testing on Dendron -- works
  * Testing on ddaemon-monorepo -- TODO
* [evilsocket/gitstats: Git Repository Analyzer.](https://github.com/evilsocket/gitstats)
* [tarmstrong/git2json: Convert git logs to JSON for easy analysis](https://github.com/tarmstrong/git2json)
* [file - Git log output to XML, JSON, or YAML? - Stack Overflow](https://stackoverflow.com/questions/4600445/git-log-output-to-xml-json-or-yaml)

## Steps to index git repos

* [✅] Get a JSON file with a list of git URL's that can be cloned
* [✅] Run a script and clone all those repos
  * `meta-git-clone.sh`
* [✅] Have a script go inside every git repo and export all the commits as JSON, save to another folder
  * `GitToJSON.sh`
* [❌] Process the git commit metadata and save it to yet another folder
  * Parse Email
  * Parse email Domain
  * Parse name
  * Parse second name
  * Parse URL's from message
  * Check URL's in message
  * Message word count (check `-` and ` `)
  * Message character count
  * Calculate Character Count / Word Count
  * Sum insertions and deletions
* [❌] Process the git committers data and merge it with another folder
* [❌] ndjson conversion script
* [❌] Dump every repo to their own unique index
* [❌] When all repos are dumped write a script to calculate the metadata such as committers and git repos

## Tickets

* [wiki.ddaemon.monorepo.bindings.git.schema](Git%20Schema)
* `meta-git-clone.sh` does not take filename as CLI argument
* `GitToJSON.sh` should detect if there is a CLI argument


## Init

* Figuring out a way to assess the quality of the GitHub activity would be nice. Some projects just have a bunch of shitty pull requests that never get approved…
* We should also be scoring the quality of the commits as well
* And score on a multidimensional level (I.e. commit quality, influence, volume of quality commits, etc…)
* Once we have something like that in place, we can begin to track whenever the top—say 200–devs create a new project

## Basic Queries

* Commits per author
  ``` bash
  git shortlog -s -n 
  ```
* Commits per day/week/year
* Lines of code over time
* Graphs
* Lines of code per author
  ``` bash
  git ls-files | while read f; do git blame -w -M -C -C --line-porcelain "$f" | grep -I '^author '; done | sort -f | uniq -ic | sort -n --reverse
  ```

* [graph - Generating statistics from Git repository - Stack Overflow](https://stackoverflow.com/questions/1828874/generating-statistics-from-git-repository)

## Questions for the data

* Source Code
  * Check Method Names
* Queries for git repos such as 
  * [ethereum/EIPs: The Ethereum Improvement Proposal repository](https://github.com/ethereum/EIPs/)
    * Who has their name on the most EIP's
    * Graph their names over time
* Graph repo activity over time
* Get semantic versioning of the repo
* Number of branches
* List unique names from a repo
* Same name but different email across repo or repos?
* PGP Signatures
  * Heatmap of when the PGP signatures run out
  * Expired PGP signatures still being used
  * PGP signatures being updated
* Domain's of Emails
  * Number of different email domains within single repo
  * Number of different email domains across team
* Most popular email domain across all repos
* WHo committed the most code across all repos
* Sort commit comment's be length
* Who committed the most characters/lines of commits
* Average word length of a commit/users commits in a repo
* Heatmap of times a repo is committed to
  * We can estimate the time zone of a team or the members on the team if they have a regular schedule
* Measure how much of a users code is still in the production branch
  * How many lines need to be written by a user in order to get to production

## Questions about questions for the data

* What are key words or phrases we should be looking for within the commits or even code itself
* What are patterns of behavior from professional developers we can measure
  * What are the give always of a junior developer


## Repos that product errors cloning

* https://github.com/Loopring/lightcone 
* https://github.com/nemtech/nem2-workshop-nem-applied-to-supply-chain
* https://github.com/kusamanetwork/kusama.network
* https://github.com/Abracadabra-money/wonderland-frontend
* https://github.com/curvefi/curve-vue
* https://github.com/0xProject/contracts
* https://github.com/XYOracleNetwork/xyo-solidity
* https://github.com/oceanprotocol/ocean
* https://github.com/oceanprotocol/squid-js
* https://github.com/oceanprotocol/keeper-contracts
* https://github.com/oceanprotocol/pleuston
* https://github.com/singnet/singnet


## Links

* [wiki.software.List.git](.md)
