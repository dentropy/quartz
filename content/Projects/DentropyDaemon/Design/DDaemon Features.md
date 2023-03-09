## Idea Dump

* Google ngram comparison for dendron
* Find all URL's that are the same and create a node for that document
* I want my annotations directly linkable into Dendron

## Browser Daemon

When browsing the web we always have a goal in mind. Be it socialize, research, consume media, or a cure for boredom. The Browser Daemon tracks ones metadata while browsing the web. One can tag their activities so one can search their personal history better. The browser daemon also acts as the ultimate bookmarking Application a reasonable chunk of the user experience of social media sites such as youtube, reddit, and twitter can be replaced by a bookmarking application. The chunk of user experience I am refering to is the feed. One can have all their favorite youtube channels, sub reddits, and twitter users all bookmarked and tagged to generate custom feeds. One could have feeds for memes, data science, and world news. Not only would someone be able to generate custom feeds from other feeds on the internet. They would be able to save all their favorite posts to the same platform.

* Browser history state machine append only list style
  * History Behavioral Tagging and Tracking
  * Track which tabs are open and how far scrolled down
  * Track which tabs are open and how far scrolled down
  * I want to know when I put a bookmark into the database of URL's
  * Number of browser windows open
  * Size of browser windows
  * State of browser window, is it active or hiding behind other windows
  * Number and order of browser tabs
  * State of browser tab, active or not
  * Size of window
  * Group and tag browsing behavior
    * If one spent the last hour researching a topic for an essay they can tag all new tabs created in the last hour as part of that project. One can use the same tag as bookmarks for the project.
  * Log / tag type of content
    * Video, Article, Reddit
    * People or organizations associated with content
* Annotations and Bookmarks as one system
  * Tags (Hierarchial Tags)
  * Hierarchy + Graph Organization
  * Schema Tags (Link to wikipedia article, book, movie, etc...)
  * Bookmarks should be aware of your browsing history
  * History behavioral tagging and tracking. If you are mindlessly watching youtube have your behavior tagged as such. Researching stocks on youtube, that is different and should be tagged as such.
  * Bookmark state history, append only list style
    * What bookmarks I click and when
    * When bookmarks are added
    * What device I am viewing the bookmark manager on
  * Website annotations
    * Setting to automatically back up said website
    * Highlighting with many colors
    * Tags
    * Annotations
      * Embed specific quotes from my [hypothes.is](https://hypothes.is/users/dentropy) into my notes.
    * Permissions on sharing annotations
* Collections with permissions
  * Be able to collect bookmarks, annotations, and even tagged browsing history and share it with others with permissions on a way that others can share it as well
* Browser Automation
* Better Anonymity
  * Is there anything better than session box, firefox containers
  * privacy badger, ublock origin, adnausium, brave, HTTPs Everywhere
* Behavior entailment
* Platform augmentation and Entailment
  * Edit and augment search engine results for you
  * Better feeds on yotuube and reddit
  * RSS with more features
  * The pinboard API can me amended to to support playlists and watch later for YouTube. Actually there can be a YouTube to pinboard converter. Also Twitter with twitter.follow and twitter.favorite also Reddit with reddit.subscribe and reddit.multireddit.name and reddit.collection.name and reddit.save and even messages actually pinboard and tags can abstract away the backend of many sites and even allow profiles.... Writing this gave me deja vu
  * Migrate playlists and subscriptions from youtube into the daemon
  * Migrate saved posts from reddit (As well as posts and comments) as bookmarks
* Bookmark, History, Annotation, Collection, Bookmarked website search functionality
* Bookmark, History, Annotation, Collection two way linking to your notes app of choice
* Have your browser be context aware of your history, bookmarks, social media. For example query if your friend has bookmarked the same site or watched the same youtuber or how they swipped on this particular person on tinder.
* Imagine a universal glossary that is indexed from every book you read and gave a thumbs up

## Annotation and Linking

* Annotate and link everything.
  * Query all names in a book and link them to DID for the Person
  * Query all products in a book and link them to a DID
  * Query all cultural references in a book and link them to a DID
  * Personally annotate any related material while reading the material with its own DID
* See Browser Daemon link above
* See Media Consumption Daemon
* See File / Storage Daemon

## Behavior identification and tagging

* I should be able to tag a collective of active tabs with a research question, activity, or any other object within dendron or other areas.

## File / Storage Daemon

* A version controlled file system that acts as an append only list
  * I want to know every file I have ever interacted with and have my interaction with them time stamped with as much metadata as reasonable
* Storage Options
  * [wiki.software.Catagories.Server.Storage](../../../Software/Catagories/Server/Storage.md)
  * [wiki.software.Catagories.Database](../../../Wiki/Concepts/List/Database.md)
* I have tiers of different data
  * Random downloads like ISO's and tar files of open source projects
  * Movies / Books / Games / Podcasts / Songs
  * Images
    * Personal / Web based / Meme's
* I want to have a folder that is synced across all my devices with important files I always want backed up and files I want offline

## Activity Daemon (Behavior identification and tagging)

* Where is the log file for human experience, it does not exist... yet
* Explain how I want my logs to work ideally
* Information to logs
  * DNS queries from computer
  * Terminal history
  * Window history
  * App history
  * IP addresses connected to
  * Location of all devices
  * Bio metrics such as heart rate, steps, sleep
  * Every search ever done across all website's
    * Facebook, Pornhub, Linkedin, Firefox Addon Store, Amazon, wikis
  * Whenever CTRL+f is used
    * Web pages, documents, ebooks
  * File system searches
    * Have an index of portions of the file system and log searches
  * What tabs are open in code editors
    * [wiki.software.Catagories.Code Editor](List%20of%20code%20editors)
* Personal Journal Version Control (Append only list style)
* [wiki.software.Catagories.Quantified Self](Activity%20Monitoring)
* [wiki.software.Catagories.Keylogger](See%20Keylogger%20software%20category)

## Social Media / Relationship Daemon

* Message people based on how you define your social graph rather than platform. Social media singularity.
* Generalized Social Graph
* Call Logs across all social media apps
* Time since last interaction for each person
* All messages chronologically
* Every interaction organized by person
* Time spent on each social media platform by the second
* Time spent generating each message sent
* Explain analytics on all my relationships, time since last message and so forth
* I want DentropyDaemon to be able to be able to remind me to call my girlfriend but that is a complicated condition to program in.
* Stuff to Research
  * [wiki.software.List.Monica CRM](wiki.software.List.Monica%20CRM)
* Be able to have a weighted feed from as many social networks you like.
* Find mentions of Article, Website, Person on social media
* New Anonymous social networks where people talk with voice changers, and use avatars over their body. Also have the daemon stop the revealing of any personal information.

## Media Consumption Daemon

* Have a catalog of all media you consumed, have a catalog of all media your friend consumed, recommend content from the collective library for both parties.
* Awareness of the music you listen to, skipping songs is like a down vote
* Ebook and audiobook in same format
* Every video ever watched
  * What seconds watched
  * Speed was watching
  * Subtitles dumped into database
  * At exactly what second what was being consumed
    * So basically track when pause, play buttons are clicked
* Books
  * Explain how I want to read books with every word from each character tagged and plugged into wikipedia also memes and tropes
  * What page was being viewed by the second
    * Even do what part of the page with eye tracking
  * When highlights were made
  * By the word when the audiobook was read to me
* Music
  * Exactly from what second to what second a song was played for
  * Need tagging
* Articles
* Papers
* Integrated Media Consumption
  * Use websites like TMDB, GoodReads, MyAnimeList, and others to as a back end for the media I consume and want to consume.
  * I should be able to organize and tag these pieces of media and have them automatically integrated into MyExistance.
* Audiobook Ebook Integration

## KMS (Knowledge Management System) Daemon

* Journal / Wiki Tooling
* Link to any file I have from the File / Database Daemon
* Link to any specific piece of media
* Tagging
  * Date
  * Key Value
  * Datatypes
* Import, Export, and share notes
  * Be able to export notes of one two or three degree of separation
  * Be able to export notes at a point in the higharchy
  * Be able to perform multiple queries in a export
* Multiuser
  * Permissions
* Version Control
* Extensibility
* API
  * Query Language
  * Find all misspelled words
  * Find all names of a person
  * Find all software names
  * Read Documents
  * Update Documents
* Backlinking
* Make drawings with Draw.io
* Mapping
* Integrations
  * DID Integration
  * Portions of wikipedia
  * Archwiki
* Imbed Web Annotation in notes
* Self Aware Recommendation Engine aka entailment Every name should be tagged and linked to a custom object. When I type Tim Yano the system should recommend I tag it and link it so social media and describe specific characteristics of our relationship
* The ultimate Todo app telling you to live your life you wake up brush your teeth it has that built in then has priorities for everything
* Acronym Map
* People Knowledge Management.
  * Log your friends interests, favorite restaurants, food, places, possessions

## Brainstorming Features

* Have a script that can wake you up in the morning that is context aware. Listen on your smart watch and adjust alarm accordingly. Can also plug into your IOT mattress but that hardware today sucks.
* Log all your purchases. Be able to query your friends purchases.
* Have a reminder bot that detects bad behaviors and allows you to have a conversation. Forget lunch  and feel hungry, tell you AI and it will try and remind you next time. Haven't worked our in a couple days get a reminder, that is context aware. Have an AI detect your behavior before sending you notifications.
* Date Matching via AI
* AI Mediated Relationships
* AI Lives people lives through them like in Westworld season 3

## Project Management Daemon

* Permission Managed Kan Board, and Issue Tracker

## Journal Aware

* Do what you do thought out the dat and have everything logged just like systemD with additional summary functionality. An example of this would be you are reading a book but you can't remember the name of a character or who their family member is so you google it. These activities should be linked. You have a conversation with your friend about WWII and you google the fact about WWII the friend, WWII event, and browsing history event should all be linked.

## Features

* Features
  * Implemented (Sort Of)
  * Manage a large number of docker containers via docker-compose scripts and environment variable files
  * Python library to manage running, stopped, and installed containers
* TODO:
  * WebUI
    * Login
  * API / WebUI
    * Manage Internal vs Public apps
    * DNS Management
    * Storage Volume Management, backups
    * Firewall management
    * Common container build steps (Use LinuxServer.io as much as reasonable)
  * Build from source
  * Container Registry
  * Migration to be self hosted
  * Use Portainer / Yacht App Templates
  * SMTP Server

