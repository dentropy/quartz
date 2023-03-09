---
id: rwvs0j4yt7qneie7cv6qpbp
title: Knowledge Curation
desc: ''
updated: 1628474425408
created: 1628474425408
description: null
published: true
date: '2021-01-07T17:24:25.230Z'
editor: undefined
dateCreated: '2020-11-05T02:21:33.986Z'
---

# Knowledge Curation

Organizing all the worlds information and making it available to all is a useless talk unless I can organize my own information. [Jordan Peterson Describing my Data][]

Have a log and interpretation of every piece of media ever consumed including movies, web pages, books, youtube, reddit, academic papers, and more.


## Media Management

So aparently Americans now spend about 11 hours a day consuming media. Media is possibly the number one way people inject memes into their mind. I want to track Anime, Books, Documentaries, Movies, Podcasts, TVShows, Music, and Youtube Videos. I want to know when I watched and or read what and attach metadata to any piece of media. The first step is to find indexs of each kind of media. For books it is easy to use the ISBN system but when it comes to movies there are prioritary systems that require an API key. Then there are  podcasts which traditionally use RSS which is decentralized therefore has the ability to fail over long periods of time. Magazines should be added at later date.

The goal is to find platforms that users can plug their data into in order to consolodate the metadata of all media they consume.

## Links

[Media Management](/dentropydaemon/memex/media-knowledge-curation/media-management)
[Github awesome-knowledge-management](https://github.com/brettkromkamp/awesome-knowledge-management)

## Technical features 

* Local first
* Cloud aware to keep all devices in sync
* Exportable
* End to end encrypted
* Redundant data backup
* Distributed

## Personally curated wiki

[Wiki Software](/tools/wiki-software)

## Manage bookmarks,highlights, and annotations on the web

* Features
  * Tag content
  * Backup Web pages
  * Annotate / highlightbackup web pages
  * Every annotation/bookmark/tag has an ID that can be rederenced anywhere else in the memex
* [Pocket](https://app.getpocket.com/)
  * Propietary can not self host
  * Can not annotate
* [hypothes.is](https://hypothes.is)
  * Propietary can not self host
  * Only annotates live web pages
  * Does not work on mobiles
* [Rumin](https://getrumin.com/)
  * Propietary can not self host
  * In private alpha
  * [rumin web clipper](https://github.com/jhlyeung/rumin-web-clipper)
    * Take screenshot of current web page
    * recordings current time in video
    * Take notes on current clipping
    * Tagg clipping
* [Memex](https://getmemex.com/)
  * Self hosted
    * Must be installed in a browser, aka can not access from any computer
  * Can not sync multiple computers / phones
  * PDF annotating functionality coming
  * Best UX
* [Instapaper](https://www.instapaper.com/)
  * Propietary can not self host
  * No Tags
  * Works only for annotating
* [pinboard](https://pinboard.in)
  * Propietary can not self host but paid for therefore likely secure
  * 2010 UX, not mobile friendly and not previews of pages
  * Does not support highlight and annotations but can comment on pins

## Identify books in generilzed schema then track progress of books with highlighting and annotations

* Features
  * Tag content
  * Annotate EPUB and PDF's
  * Export annotations

* [Polar](https://getpolarized.io/)
  * Not self hosted propietary backend
  * Supports tagging
  * Works only for annotating
* Calibre
  * Self hoted
  * Need to test web version
  * Worried about annotate export
* Reference books across web
  * Just us ISBN
  * <https://openlibrary.org/>
    * When using the Open Library API searching for something like 12 Rules for Life returns 3 seperate results for the same book.
    * I also could not find "1000 Reasons why The Singularity is near" and "Anime Trope System" in the Open Library but it was on GoodReads. Goodreads is a much better platform. Goodreads seems to have an API that will allow for client applications to be built. Goodreads is also much faster.
  * Goodreads seems like the way to go.

## Track browsing history

* Record browsing history
  * Record how long on each web page
  * Record how long videos are played
  * Record how fast one scrolls down a page
  * Be able to group parts of my browsing history into specific activities
* Vendor Specific Browser sync is not up to the job
* Solutions
  * <https://github.com/karlicoss/promnesia>
  * Packet Capture?
  * Custom Browser Extension?

## Track video consumption accross streaming services such as movies, tvshows documentaries, and anime plus video hosting sites

* I want to know every piece of video content I consume specified to the second. This does not necessarily include videos on reddit and instagram but should include movies, tv shows, anime, youtube, and educational platforms such as MasterClass and Udacity.

Search: netflix watch history csv to IMDB site:github.com

* <https://alternativeto.net/software/imdb/>
* <https://www.themoviedb.org/>
* <https://trakt.tv/>
  * <https://github.com/damienhaynes/TraktRater>
    * <https://github.com/damienhaynes/TraktRater/issues/13>
* <https://github.com/annahensch/suggest-a-netflix-show>
* <https://www.kaggle.com/shivamb/netflix-shows>
* <https://trakt.tv/>
* Can write a chrome extension for ActivityWatcher that monitors what I watch
* Anime
  * <https://alternativeto.net/software/my-anime-list/>

## Track audio consumtion across streaming services such as music and podcasts

* Podcasts
  * Search up Podcast API
* Music
  * <https://www.quora.com/Is-there-an-equivalent-of-the-ISBN-for-music?share=1>
  * [Consolodated propiety service](https://songwhip.com/)

## Random Important Links

* [reddit - Self-hosted note taking app for university](https://old.reddit.com/r/selfhosted/comments/araea8/selfhosted_note_taking_app_for_university/)
* [Is there a way to port a git history of markdown files to mediawiki or alternatively just port the file structure of markdown files to mediawiki?](https://stackoverflow.com/questions/62186373/is-there-a-way-to-port-a-git-history-of-markdown-files-to-mediawiki-or-alternati)
* [Desktime - propietary ActivityWatch](https://desktime.com/features)

  [Jordan Peterson Describing my Data]: https://www.youtube.com/watch?v=Vp9599kwnhM
