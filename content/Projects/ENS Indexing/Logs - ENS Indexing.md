
[ENS Indexing](ENS%20Indexing.md)

## [daily.journal.2022.10.20](2022-10-20)

* NEXT STEPS:
  * Output the following queries to JSON and CSV
    * Every unique subdomain
    * List of the actually useful subdomains
    * The records for each of these actually useful subdomains
    * Write a script that does this and add it to the main repo
  * Analytics
    * Checkout aw-experiments for template code
    * Longest descriptions
    * Top Level Domain frequency
    * What domains have the most records
    * Find the records that did not make it to the second table

Alright what's next?

We are going to extract all the different kinds of records that are set.

Are you going to use sqlalchemy or the the sql engine in jupyter.

Let's just copy [projects.aw-experiments](../ActivityWatch%20Experiments.md)

What datasets do we want?


## [daily.journal.2022.10.19](2022-10-19)

Look into this

[dappquery/ens-domain-lifecycle-dashboard: ENS Domain Lifecycle](https://github.com/dappquery/ens-domain-lifecycle-dashboard)

## [daily.journal.2022.10.11](2022-10-11)

Alright let's get back to work.

Infura won't let me download enough data so I need a Ethereum node.

I am going to document the project then go as Gem Finders for help.

Rename the old repo.

## [daily.journal.2022.10.06](2022-10-06)

Alright I have all the JSON files, what now?

Why we dump all them into sqlite.

Is that what we really want to do?

Ya it will make everything else from here easier. Rather than tracking the JSON files.

I just need to make sure I can read the JSON inside sqlite.

You should write a tutorial for JSON and sqlite.

Alright let's get the list of all the files.

THen let's find the sqlite boiler plate, one column cause we lazy like that

THen let's write the loop for all the files.

We got all the domains inside the sqlite database, gotta use JSON queries though to get them out

Alright let's get those subdomains out via nodejs

Now how do I query the sqlite JSON stuff?

[](JSON%20Support%7Cwiki.software.List.sqlite#json-support)

Let's start by simply pulling the domain and records associated with it.

Can we do this as a single query?

Yes we need two columns one is the raw text of the ETH domain name. The other is the list JSON.

Alright, let's wrote this query

``` json
{
  "id": "0x09faa9b27cfe75f197eed7e260c4b6a82cd31d358dd25a4fb3561682b6c6495d",
  "name": "thelaangels.eth",
  "labelName": "thelaangels",
  "labelhash": "0xfb416a10883fc953d1cce4128dbb009dc007e63d756629db19424384442c7f5e",
  "subdomainCount": 0,
  "resolvedAddress": null,
  "owner": {
    "id": "0xad6fd306eb68294bbe1bd4147eef008ea4c840f8"
  },
  "resolver": {
    "addr": null,
    "id": "0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41-0x09faa9b27cfe75f197eed7e260c4b6a82cd31d358dd25a4fb3561682b6c6495d",
    "texts": ["avatar"],
    "coinTypes": null
  },
  "ttl": null,
  "isMigrated": true,
  "createdAt": "1653484500"
}
```

``` sql

SELECT *
FROM ENS_NAMES

SELECT *
FROM  ENS_NAMES, json_each(ENS_NAMES.ENS_RECORD_JSON) json

SELECT *
FROM  ENS_NAMES, json_each(ENS_NAMES.ENS_RECORD_JSON) JSON
LIMIT 100

SELECT JSON.name
FROM  ENS_NAMES, json_each(ENS_NAMES.ENS_RECORD_JSON) JSON
LIMIT 100


SELECT json_extract(ENS_RECORD_JSON,'$.name')
FROM  ENS_NAMES
LIMIT 100

SELECT json_extract(ENS_RECORD_JSON,'$.name'), json_extract(ENS_RECORD_JSON,'$.resolver.texts')
FROM  ENS_NAMES
LIMIT 100

SELECT json_extract(ENS_RECORD_JSON,'$.name'), json_extract(ENS_RECORD_JSON,'$.resolver.texts')
FROM  ENS_NAMES
ORDER BY json_extract(ENS_RECORD_JSON,'$.name')
LIMIT 100

SELECT json_extract(ENS_RECORD_JSON,'$.name'), json_extract(ENS_RECORD_JSON,'$.resolver.texts')
FROM  ENS_NAMES
ORDER BY json_extract(ENS_RECORD_JSON,'$.name')
LIMIT 100 OFFSET 100
```

Looks like we got ourselves a query

Now do we have ourselves a schema to dump into?

What we doing about errors.

Don't worry we will deal with errors.

So we need two tables then, one for working queries and one for dead queries.

Yes, what data do we get from Ethers.js

-----

Now do we want to query a single ENS name at a time or do we want to query a bunch.

Prematrure optimization equals death.

Good one, we have to batch all the subdomains together though.

Alright get a list and do all the inserts.

Okay what about errors?

Two lists then we do them every time.

Alright, so we adding the subdomain to the schema?

Why of course

Alright we have our schema, but can we do our queries?

What do we want these queries to do?

I want to query the database for a ENS name that has not been done yet.
Then I want to resolve all it's subdomains.
Then I want to put all those subdomains inside the database.

Do we want to deal with callback hell?

AAAAHAAHAHAHAH

Fuck it let's grab that wrapper

[kriasoft/node-sqlite: SQLite client for Node.js applications with SQL-based migrations API written in Typescript](https://github.com/kriasoft/node-sqlite)

------

Alright we got async / await working for sqlite in nodejs

What's next?

Why we need a better query and schema upgrade.

Ya let's finish that schema upgrade

------

Alright we got ourselves a updated schema.

What's next?

Why we need a new query that looks in the other tables for the ens_name.

``` sql
SELECT json_extract(ENS_RECORD_JSON,'$.name') query_ens_name, json_extract(ENS_RECORD_JSON,'$.resolver.texts') text_records
FROM  ENS_NAMES
WHERE
    query_ens_name NOT IN  (SELECT DISTINCT ens_name FROM ens_records_resolved) AND
    query_ens_name NOT IN  (SELECT DISTINCT ens_name FROM ens_records_resolved_errors)
ORDER BY query_ens_name
LIMIT 1
```

Now that looks like a beautiful query

What's next?

Why we plug this query into the script

Alright we got the query now let's test resolving it

We got our result, what is next?

We need some insert queries.

Awww I don't like these.

Also you need to learn how to deal with async await errors again

Awe fuck me.

Alright there is already some INSERT query code in here

------

What now?

Why we put the finishing touches on.

You need async / await error correction

Try Catch is good enough, REMEMBER

Why did it not work earlier

Who cares write the code

So we using recursion? Or Looping

We should use recursion

## [daily.journal.2022.10.04](2022-10-04)

Alright where were we?

I have a sqlite database and a bunch of scripts that are poorly documented. IDK how to even query the .ONION domains, I have not scraped the blockchain raw. I have not found any very interesting domains. I lost my code that could query what actually had results from The Graph. I sorta don't want to work on this anymore. I guess I am just going to dump the code on github? Including the huge list of JSON files!?!?!?

Why not they will store all the crap no problem.


Alright let's dump all the code to github.

We still need to write a blog post about what we learned.

No we need to write a project report about the outcome and next steps right here in Dendron.

Let me upload the code first.

Alright let's get that query for The Graph for stuff with actual records.

``` graphql
query {
  queryPost(filter: {
    id: ["0x1", "0x2", "0x3", "0x4"],
  }) {
    id
    title
    text
    datePublished
  }
}

query 
    allPeople(filter: { people: { pet: {ne: null} } }) {
    people {
       pet
    }
}

```
* [express - Graphql query only not null objects - Stack Overflow](https://stackoverflow.com/questions/37969096/graphql-query-only-not-null-objects)
* [Search and Filtering - GraphQL](https://dgraph.io/docs/graphql/queries/search-filtering/)
* [GraphQL API - The Graph Docs](https://thegraph.com/docs/en/querying/graphql-api/#filtering)
  * THIS ONE IS IMPORTANT

``` javascript


query {
  domains(where: {
    resolver_not: null
  }) {
    id
    name
    labelName
    labelhash
    parent {
      id
    }
    subdomains {
      id
    }
    subdomainCount
    resolvedAddress {
      id
    }
    owner {
      id
    }
    resolver {
      addr {
        id
      }
      id
      texts
      coinTypes
    }
    ttl
    isMigrated
    createdAt
  }
}


query {
  domains(where: {
    resolver_: {
      texts_not: null
    }
  }) {
    id
    name
    labelName
    labelhash
    parent {
      id
    }
    subdomains {
      id
    }
    subdomainCount
    resolvedAddress {
      id
    }
    owner {
      id
    }
    resolver {
      addr {
        id
      }
      id
      texts
      coinTypes
    }
    ttl
    isMigrated
    createdAt
  }
}
```

Cool I can now get all those records again, but how do I now get the missing records? We need to sort these right? Oh that can be done with a filter.

* [GraphQL API - The Graph Docs](https://thegraph.com/docs/en/querying/graphql-api/#filtering)
* [GraphQL API - The Graph Docs](https://thegraph.com/docs/en/querying/graphql-api/#pagination)
``` javascript

query {
  domains(where: {
    resolver_: {
      texts_not: null
    }
  },
  orderBy: labelName, 
  orderDirection: asc
  first : 500,
  skip  : 100) {
    id
    name
    labelName
    labelhash
    parent {
      id
    }
    subdomains {
      id
    }
    subdomainCount
    resolvedAddress {
      id
    }
    owner {
      id
    }
    resolver {
      addr {
        id
      }
      id
      texts
      coinTypes
    }
    ttl
    isMigrated
    createdAt
  }
}
```

I can not paginate past 5000, what is some other way to increment?

createdAt is unix time we can use that.

``` javascript
query {
  domains(where: {
    resolver_: {
      texts_not: null
    },
    createdAt_gt: 1661166382
  },
  orderBy: createdAt, 
  orderDirection: asc,
  first : 1000
  ) {
    id
    name
    labelName
    labelhash
    subdomains {
      id
    }
    subdomainCount
    resolvedAddress {
      id
    }
    owner {
      id
    }
    resolver {
      addr {
        id
      }
      id
      texts
      coinTypes
    }
    ttl
    isMigrated
    createdAt
  }
}
```

Beautiful now let's dump everything.

I got the script dumping everything, I am happy with today's work. Seems like I just got over 10,000 ENS names with interesting records.

## [daily.journal.2022.09.28](2022-09-28)

* Where were we?
  * We have all the domains in a long series of JSON files
  * We have imported, almost all, the domain names into a sqlite database
  * We have started retrieving what records exist for each domain name
  * We have not written any code to index resolved records
* What are the issues with the current codebase?
  * Errors indexing from the JSON
  * Errors fetching the domain metadata from The Graph
  * Not storing all metadata from The Graph
  * The error's database has a fuck tone of duplicates
* Decision time
  * Do we want to fix up the code and do this properly or speed run to the end and fix everything after?
  * I definitely want to speed run to the end, we can always rerun the code
  * Alright for The Graph record resolution just run the existing script right now?
  * Sure why not, good to test what we have
  * Then what?
  * Why we work on the domain name resolution code using ethers.js
  * Alright let's get this shit done

We are now getting the stuff from The Graph.

Good is it actually working?

Umm let's check

The ens_metadata table is getting more and more results every second

Wonderful, now how do we want to go about resolving these records?

Well we should probably copy the table, then start resolving them into another table.

Can I copy table's between sqlite databases.

Let's answer that first.

[](Copy%20table%20from%20one%20database%20to%20another%7Cwiki.software.List.sqlite#copy-table-from-one-database-to-another)

Answer achieved

------

Alright let's copy that database and start reading it from nodejs

Alright I guess

------

Alright what's next?

We can read the sqlite database.

Are you going to define tables in javascript?

Does this really matter? This is ETL, you do what you need at each step

I guess that just sounds gross

Speedrunners do not appreciate real art

Wow strong words there dude

Strong words get things done.

Okay back to work.

Now what data structure do we want?

Three columns, one for ENS name, one for record name, one for record contents

Can you quickly write me a schema

Why of course, brb

-----

I got sqlite working but it only works with callbacks ahhh

I guess I should just follow the pattern and feed the function I want to be called after into the callback

Well we do not need to 

[Use SQlite3 in async / await mode - blog.pagesd.info](https://blog.pagesd.info/2019/10/29/use-sqlite-node-async-await/)
[javascript - Cannot await for sqlite3.Database.get() function completion in Node.js - Stack Overflow](https://stackoverflow.com/questions/62456867/cannot-await-for-sqlite3-database-get-function-completion-in-node-js)


Requires an additional dependency to use Async/Await fuck that
Well maybe we will come back to it

Let's review what needs to be done

We need to query the database AND log and error if we need.

Is our database writing the table over and over again?

We need an error table.

------

Alright I can get the ENS names from the graph and their records, at least some of them

I can resolve those records and put them in the database

Wait can I even resolve one of those onion addresses like in [List of ENS Names that Resolve to Tor .Onion Websites | by brantly.eth | The Ethereum Name Service | Medium](https://medium.com/the-ethereum-name-service/list-of-ens-names-that-resolve-to-tor-onion-websites-99140a4c674f)

I can't resolve onion domains. Why would anyone even bother putting a onion domain on ENS. It put's a target on your back. And seeing how hard it is for me to scrape everything I am not going to get anything working for me.

I can't even resolve these existing sites that have onion addresses.

Who else do I even know that you can store onion addresses on the blockchain. No one.

The correct thing to do at this point is look for events coming and going from the ENS and Resolver contract to figure out how the .Onion domain is set.

Well that is going to take a couple days to figure out, and if I figure out how to do that I can scrape everything raw myself without having to use dune.

The price we pay for speed I guess.

Alright are we setting up our own node or using Infura

We use Infura until we get banned.

What are we going to be using Infura for.

Well if we are going to go look for specific events we might as well index every node registered.

How are the subdomains registered again?

Subdomains have controllers like https://etherscan.io/address/0xd3ddccdd3b25a8a7423b5bee360a42146eb4baf3#code for stateofus.eth which also acts as the resolver.

Wow this is going to be a lot of work is it worth it?

Is it really a lot of work? Once it is all polished and stuff it will look cool.

What am I doing that TheGraph is not .

Letting people query the actual record content.

Would it be better to add this into the graph itself!?!?

What if it is already there.

Next time we go to social media to find an answer to this.


## [daily.journal.2022.08.20](2022-08-20)

Let's query dune analytics from nodejs.

There is no Dune API, [source](https://docs.dune.com/faq/does-dune-have-an-api)

Let's switch to using thegraph

Alright I got the graph queries working in nodejs. Now the question is can I loop through them all and put them in a sqlite database.

Let's review the sql first though.

We need a schema, well we can dump it all as raw JSON so who cares.

True that, so just create a string table.

I got basic table creation, and inserts working.

Now can I pool like 100 of these inserts togethers, that is over kill get the data into the database first. Remember we only need to get all the data once.

Cool find, [ywnbaw.eth](https://app.ens.domains/name/ywnbaw.eth/details)

You will never be a real woman. You have no womb, you have no ovaries, you have no eggs. You are a homosexual man twisted by drugs and surgery into a crude mockery of nature’s perfection.  All the “validation” you get is two-faced and half-hearted. Behind your back people mock you. Your parents are disgusted and ashamed of you, your “friends” laugh at your ghoulish appearance behind closed doors.  Men are utterly repulsed by you. Thousands of years of evolution have allowed men to sniff out frauds with incredible efficiency. Even trannies who “pass” look uncanny and unnatural to a man. Your bone structure is a dead giveaway. And even if you manage to get a drunk guy home with you, he’ll turn tail and bolt the second he gets a whiff of your diseased, infected axe wound.  You will never be happy. You wrench out a fake smile every single morning and tell yourself it’s going to be ok, but deep inside you feel the depression creeping up like a weed, ready to crush you under the unbearable weight.  Eventually it’ll be too much to bear - you’ll buy a rope, tie a noose, put it around your neck, and plunge into the cold abyss. Your parents will find you, heartbroken but relieved that they no longer have to live with the unbearable shame and disappointment. They’ll bury you with a headstone marked with your birth name, and every passerby for the rest of eternity will know a man is buried there. Your body will decay and go back to the dust, and all that will remain of your legacy is a skeleton that is unmistakably male.  This is your fate. This is what you chose. There is no turning back

## Convert JSON files to CSV

* Files
  * ScrapedDataToCSV.py
  * RawENSNames.csv

I have indexed all the JSON files, what do I want to do with them? What is the end result of this project?

I want to put all the JSON files into either a single CSV file then sqlite or sqlite then CSV files

CSV would likely be the easiest, I would not have to describe a schema.

Perfect let's do it.

Are we using node or python?

Definitely python, zero dependencies.

## Use Pandas to put RawENSNames.csv into a sqlite database

Alright what now?

We want the CSV to be put into sqlite then work on the project from there right?

Yes we are not pandas' our way to victory

Are you going to use pandas to get the CSV into sqlite

That sounds like a great idea, super simple too.

Alright let's write it.

By the way are we using ethers or graphql to get the additional ENS data?

We will decide that when we get there.

## Back to importing the data into sqlite

The CSV will not load into pandas due to a LOW memory error. We will not load the data into sqlite directly then output a CSV.

## Review how to query TheGraph

* Files
  * ENSResolution
    * TheGraph00[1-3].py

There was an error with some of the ENS names being imported into sqlite. I should also commit less often. I can just put a comment in the code saying how to speed it up. I don't really care about debuing this at this point.

So I have all the ENS names, in a SQLite database. What is next?

Well we need to resolve all these names of course.

How are we going to resolve them?

* node with ethers.js 
* ens pip package
* ENS Subgraph from TheGraph

We have out options but what data do we want first?

Why let's test each option and see how it works.

But still what data do we want?

We want to know all the records set for each DNS name. I do not care about additional metadata like who own's the ENS record, or what resolver it uses, or when these records were set.

Alright, let's get these examples. I want to try the ens pip package first.

So the ens package looks really old. It seems to not be querying the graph at all and even talks about doing bid's which is not how ENS works anymore. That package should be depreciated or something.

Alright TheGraph it is. Now how do we do requests with graphql again?

## We can query The Graph to get what records are on the blockchain

Files:

Everything in ENSResolutionViaPython, ensJS is in a few steps

We now know how to query the graph, now we need to decide what data we want and where it does and how we want to query the graph?

Do we want to put in batches of 10, 100, 250 or one at a time.

We definitely want to do batches, but we can write scripts that can do both very easily if we are smart about this

So what data do we want?

Well what data is there?

* DOMAIN
  * id: ID!
  * name: String
  * labelName: String
  * labelhash: Bytes
  * parent: Domain
  * subdomains: [Domain!]!
  * subdomainCount: Int!
  * resolvedAddress: Account
  * owner: Account!
  * resolver: Resolver
  * ttl: BigInt
  * isMigrated: Boolean!
  * createdAt: BigInt!
  * events: [DomainEvent!]!

So do we want this data?

I certainly want all of it

Alright we got all the possible data and it doesn't look like any errors for subdomains.

Wait we do not know how this actually results, where are the records

ENS libraries are not going to work with python nicely, maybe Web3.py will work?

``` json
{
  "data": {
    "domains": [{
      "id": "0x0000bbae7712644a845bbacef48211a6add7cc0fdd2e66ea6f96e8e868e42fc3",
      "name": "ywnbaw.eth",
      "labelName": "ywnbaw",
      "labelhash": "0x68efb92b0746620ce55190d1dd1fd1ae71e19b092a14a5a86fd85c8f7deb0f7d",
      "parent": {
        "id": "0x93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae"
      },
      "subdomainCount": 0,
      "resolvedAddress": {
        "id": "0xf47ecf6e9af93b10eaa655e7036b00a5bc9d21d5"
      },
      "owner": {
        "id": "0xf47ecf6e9af93b10eaa655e7036b00a5bc9d21d5"
      },
      "resolver": {
        "addr": {
          "id": "0xf47ecf6e9af93b10eaa655e7036b00a5bc9d21d5"
        },
        "id": "0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41-0x0000bbae7712644a845bbacef48211a6add7cc0fdd2e66ea6f96e8e868e42fc3",
        "texts": ["url", "avatar", "description", "notice", "keywords", "com.discord"],
        "coinTypes": ["60"]
      },
      "ttl": null,
      "isMigrated": true,
      "createdAt": "1646942908"
    }]
  }
}
```

Alright what Schema do we want?

We want all those text records in their own table, coin records in their own table? No that would be stupid all these belong to a single record
Where do we have lists?

texts, and coin_types

Alright everything else goes in a table

What do we call these tables

ens_metadata , ens_txt_records, ens_coin_records

Wait lists do NOT work like at all in SQL

I would have to learn how to manage lists in SQLite, SO not happening

Store the list as JSON?

Yes that's what we can do

So only ens_metadata

Wait can't I just query TheGraph for the metadata?

No we did this before. TheGraph only has the records, I need to resolve the records myself. Imagine if TheGraph has all the racist stuff said in ENS!?!?!?

Okay we are now trying to resolve what domains have what records, then we resolve the records. Should we rename the table. ens_records ens_records_resolved or something like that, eh sure. but we do have all the metadata. Alright here we go. We are going to now parse the json from the response so we can insert it into the database.

We can now query TheGraph and put a single query into the database, a seperate database for now

##

What's next?

Well do we want to do 400,000 queries on the graph or not?

Ahhhh that's going to be a tough one, but running this once for a couple hours is going to be easier than actually writing proper code. Just like we did with puppeteer.

So we just take TheGraph007.py and and update it to read then write to the database.

Yes new file though. Also use the correct database, and log errors to like a real file this time not the terminal

Alright what is the name of the file

ScrapeTheGraph.py

Alright we have to query the database for what domains we need to query.

Okay we are already connected to it.

Well not the correct one.

What query do we want?

Let's do the schema update first.

Alright we got it.

Okay what now?

Well we need to query the database for ens names from ENS_NAMES that are not in ens_metadata

Alright let's comment out the code and do this

Also get ONE at a time, cause we lazy like that


