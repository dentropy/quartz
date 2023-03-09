---
id: 4gf676tq7m5x77h6p23jk5r
title: Dentropy Daemon Scoping
desc: ''
updated: 1628474425357
created: 1628474425357
description: null
published: true
date: '2021-01-16T00:50:48.790Z'
editor: undefined
dateCreated: '2021-01-16T00:49:34.772Z'
---

## [Scoping](https://deseng.ryerson.ca/dokuwiki/design:scoping)

“But even this is not possible if we do not have a baseline - a
description of the way things currently are - against which we can
assess our designs for potential improvements.”

Notice two key features of these examples:

1.  They all describe the current state of affairs, saying nothing about
    some eventual design intervention.
2.  They all imply a comparison to an expectation. It is this “conflict”
    between reality and expectation that marks the imbalance that the
    designers must resolve.

## What is the current situation

* People are servers. If you are not paying for someone to run a server with your data you are the product.
* People spend about [11 hours a day consuming media][].
* People are turned into information dungpipes with companies auctioning off their attention.
* Everyone hands their data away for free
* All data is basically stored and managed in centralized gated communities
* Data is not interoperable across communities
* Data in these gated communities is hard to query
* Most data is chaos and not tagged or effectively linked
* Most data is not linked to where it should be
* Data is not interoperable across gated communities

People do not want a netflix or disney+ account they want to be entertained with audio visual naratives. People do not want to use facebook or twitter they want to socialize. People do not want to use iCloud or Google Drive they just want their files, photos, and videos backed up. People do not want to use GSuite or Office365 they want powerful information display formatting systems.

## [Product Strategy Specification](https://deseng.ryerson.ca/dokuwiki/design:product_strategy_specification)

Situation Scan
--------------

* I do not own most my digital data because it is segregated across
    gated communities
* My self is constantly changing and documenting that change is
    important to understand who I am, was, and will be. This information
    is being lossy compressed, lost, and modified without me knowing.
* There is no way to extract meaningful insights from all my data.
* There is no way to easily search all this data.
* My journal is cumbersome to edit
* My journal is not formatted in a easily indexable searchable format
* It is hard to import existing information into my journal
  * My journal should be an ontology of all information that links
        to be being
* The data in my journal is hard to link together
* The only way I can edit my journal on is a desktop computer
* Everything in my journal is in text format

Reference Design
----------------

* Check the notion
* Basically the software suite people use to run their lives

Situated use cases 
------------------

1.  Users go to work
2.  Users consume media from applications
3.  Access to information costs money
4.  People have many differnet online accounts and personas
5.  Information should be easily linked and navigated

* The net is vast and beautiful eh Major

1.  Users run companies

Usage Scenario
--------------

* Operates just like every other web application out there for normies
  * Someone sees an ad on youtube about how they can own their own data using the bitwit protocol. They are forwarded to a page where they make an account and watch a bunch of propaganda. They can now login to the web application and they can loginto their google account, facebook account, and even their freaking password manager.
* Can be fully self hosted for the homelab people out there
  * Someone learns about this new meta protocol called bitwit where they can make money off their homelab and partake in information black markets plus the entire software stack is open souce so the home lab person can compile the kernel themselves. There are a lot of build options for this kernel each with different functionality...

### Human Factor Demands

* Be as easy to use as any existing app
* Be “hacker” friendly
* Install as a Daemon on computer, browser, or other system

## [Notes from Design Wiki](http://deseng.ryerson.ca/dokuwiki/design:scoping)

"But even this is not possible if we do not have a baseline - a description of the way things currently are - against which we can assess our designs for potential improvements."

Notice two key features of these examples:

1. They all describe the current state of affairs, saying nothing about some eventual design intervention.
2. They all imply a comparison to an expectation. It is this “conflict” between reality and expectation that marks the imbalance that the designers must resolve.

## What is the current situation

* My journal is cumbersome to edit
* My journal is not formatted in a indexable format
* It is hard to import existing information into my journal
* The data in my journal is hard to link together
* The only way I can edit my journal on is a desktop computer
* Everything in my journal is in text format

  [11 hours a day consuming media]: https://www.nielsen.com/us/en/insights/article/2018/time-flies-us-adults-now-spend-nearly-half-a-day-interacting-with-media/
