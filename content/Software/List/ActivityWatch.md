---
id: wd0EJaDdIyQXBaHU5sSw1
title: ActivityWatch
desc: ''
updated: 1660848432856
created: 1628444413853
---

[Docs - Getting started](https://docs.activitywatch.net/en/latest/getting-started.html)
[aw-core · PyPI](https://pypi.org/project/aw-core/)
``` bash
aw-watcher-window &
aw-watcher-afk &
```

* Find a way to dump terminal logs to ActivityWatch

## Queries to do on activity watch

* Get a list of every URL visited

**Match string from events**
``` sql
select * from eventmodel
where datastr like '%Brave-browser%'
limit 100;
```

**Are the URL's even available here**

Yes the datastr has "url" in it

``` sql
select * from eventmodel
where datastr like '%"url"%'
limit 100;
```

## Find and aggragate most popular domain names

* Match url and https in event into new column

``` sql
select * from eventmodel
where datastr like '%https://%'
AND datastr like '%url%'
limit 1000;
```

* Regex actual domain name from event into new column

Regex is difficult to get working we can try JSON functionality instead

* Convert column to JSON and get the URL paramater

``` sql
select json_extract(datastr,'$') as json_object
from eventmodel
LIMIT 10;

select json_extract(datastr,'$.app') as json_object 
from eventmodel
LIMIT 10;

select typeof( json_extract(datastr,'$.url') ) as json_object 
from eventmodel
LIMIT 10;

select  json_extract(datastr,'$.url') as json_object 
from eventmodel 
where typeof(json_object) != 'null'
LIMIT 10;
```

## Now we need to get the actual domain name out

``` sql
select  json_extract(datastr,'$.url') as json_object 
from eventmodel 
where typeof(json_object) != 'null'
LIMIT 10;
```

## Reflection

I have been reading bold over the last couple days. In Bold Peter Diamandis talks about a book called The Prime Movers by Edwin Locke which identifies core mental traits in great business leaders. The one key trait they all have is vision. I am having a hard time coming up with a specific vision. I have a rough idea of what a decentralized future looks like with a knowledge graph connecting all information but I am stuck on the higher levels of abstraction. 

I have met up with some old friends and explained the idea of the Dentropy Daemon platform and they understand how it would be useful but for now it is all pie in the sky thinking. When is comes to team building I have been looking at the many discord servers I have been a part of and they all seem to slowly devolve because they lack a cohesive narrative and vision that brings them all together. I look at https://projects.theportal.wiki/ and see a couple good ideas but I really doubt any of those original projects will turn into much. The Portal movement had all this energy behind it including people with vision but the inability to execute. Law 29 is very important, plan all the way to the end.

The Dentropy Daemon platform would have to by many things. Thinking from a first principals what do users want (warning over simplified). People do not want to use social media such as facebook, twitter, discord and other platforms they want to be able to socialize. People do not want Neflix, TV, and Disney+ Subscriptions they want access to narrative media. People do not want to watch twitch and youtube they want to attach themselves to personalities and communities to make themselves feel they belong. People do not want a spotify or apple music subscription they want access to music they like everywhere they go. People play video games because the game of real life is not entertaining enough. What connects all platforms listed above is The Feed aka recommendation engines. Google and friends should be going out of their way to provide us with information before we even know we are asking for it. They should also be figuring out what is better for us and letting us know what they think through the recommendation engines and more explicit ways. I wonder if there is a way to put an abstraction on top of the social media of today that providers users a better feed for what they want. If there was a single user interface that combined a many of the sources of media as reasonable and was truly KISS(Keep it simply stupid) maybe some people will use it. Another way to think about it is where is the search engine of you. Any thoughts on this because I want to start dog fooding myself something. I have been researching this media consumption/management engine concept I mentioned here the other day. Platforms such as goodreads, IMDB, and MyAnimeList are extremity powerful but a pain in the ass to use. No one wants to log into an app or website lookup what they just watched and add that they watched it. I plan on downloading my family's Netflix account viewing history as a CSV and uploading it to IMDB using their API. In the future I plan on researching if I can use https://activitywatch.net/ to automatically log media consumed.

People do want to be part of narratives but they also want to plug and chuug into mood organs such like in [wiki.media.list.do androids dream of electric sheep](Do%20Androids%20Dream%20of%20Electric%20Sheep?). I know because I have just used my social media mood organ for months becoming more and more of a recluse.

## Links

* [media.list.Bold](../../Media/List/Bold.md)

