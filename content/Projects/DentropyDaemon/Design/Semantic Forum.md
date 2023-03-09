# Semantic Forum Project

[SOURCE](https://theportal.wiki/wiki/Semantic_Forum_Project)

# Introduction 

In the beginning, there was free text. Anyone could say anything they wanted in any way. But slowly, throughout history, we learned that structure helps us communicate. It's easier to talk about facts if we use logical propositions. It's easier to argue if we split our argument to points, and sort them into categories like "claim" and "rebuttal".
Structure isn't only inherent in our language; it is the basis with which we think. It's one of the most important sensemaking tools at our disposal.
And yet, our conversation online is mostly free text. When we post on a forum, or write an article, or collaborate on a wiki, we still use plain old text for most of our communication, and on the way, we lose all the structure that's in our mind.
Imagine an article without a title. It would be harder to find. Harder to understand. You might have to read a lot of it just to figure out what it's about. Now imagine an article with a title, but also a lot of other metadata, like related topics, references and rebuttals to that article. Now it's easier to find, and easier to figure out. If you have a hard time reading it, you can just read some of the comments conveniently tagged as "explanations". If you're in a hurry, look for comments tagged as "summary".
Now, the astute reader might point out that some of these already exist: Blogs have comments, tags and ping-backs. Wikipedia has categories, and a little box of metadata that you can easily skim. But now imagine this: We can abstract this into something bigger and better. Instead of having the programmers choose the structure for you, we can empower the users to create the structure themselves! Imagine you could mark your articles and comments any way that you like, and connect them to other articles, or comments, or topics, in any way that you like. Other users can use that metadata for better comprehension and navigation, and the best articles and connections will be voted up above the noise. The metadata box you see in wikipedia will become a live set of connections, and it will be trivial for users to add more, and vote on the most relevant ones. You could focus on what's important to you, instead of sifting through endless walls of text. You will be able to do all this and a lot more. We can make the implicit structure of our conversation more explicit, and everyone will benefit.

# wiki links 

[Brainstorming](/dentropydaemon/semantic-forum/brainstorming)

[Reference Design](/dentropydaemon/semantic-forum/reference-design)

[Situation Scan / guccess](/dentropydaemon/semantic-forum/guccess)

# How will it work? 

We want to harness the power of the semantic graph. Basically, our main premise is that a lot of knowledge can be expressed using a simple structure: "entity -> relation -> entity". Here are some examples:

* Physics -> isa -> Science
* Eric -> likes -> Physics
* post1 -> reply to -> post2

And so on.

By using this simple idiom, we get a flexible but powerful method of describing structure, that is intuitive for both users and for computers. That means our users will be able to manipulate the very fabric of the knowledge-base themselves, and our algorithms will have an easier time digesting it.

## What progress has been made on this? ##
* Many tools **already exist** that can:

  1) parse words from text;
  2) assign basic details to words, such as language, part-of-speech, and entity relations;
  3) assign sentiment scores and topic scores to sequences of words; and
  4) form, visualize, and score "entity" -> "relation" -> "entity" linkage mappings.  

* To date, **we have**:  

  1) scraped and assigned this kind of data from conversational text chat;
  2) scrapeed and assigned this kind of data from social media polls asking dichotomous questions; and
  3) created interactive graphical interfaces to both kinds of network graphs.
  
* We **still require** a way to:  

  1) extract actionable meaning from this kind of relational data;
  2) automate the process of database augmentation for any kind of data;
  3) curate any derived algorithm with "Human-in-the-Loop" verification; and
  4) deploy any resulting tool.
  
Point **`4`** means that we need to decide a way that a remote service, which runs the core graph structure for any locally deployed tool, is hosted.  

# How will it look? 

The basic view will look a lot like existing forums and wiki, with an "escape hatch" to add any custom connection you'd like.

But at the same time, we will provide alternative views. Some of them will be navigational (graph oriented), while others might focus on semantic search and aggregation.

Users will be able to switch seamlessly between these views. That is because each of these views will interface as a component in our client-side framework. An extensions system will allow adding custom components.

# If this idea is so good, why doesn’t it exist yet? 

The idea of a semantic graph has actually existed for a long time. Google’s Knowledge Graph and Facebook’s Social Graph are at their core, semantic graphs. They keep it private, because it’s a valuable resource.

See: https://en.wikipedia.org/wiki/Facebook_Graph_Search 

The idea of a Semantic Web has been proposed by Tim Berner-Lee, who’s credited for inventing the web. He represented it as the next step forward. One of the main obstacles for its adoption is that its decentralized nature makes it very hard to capture its value.

# Who do we need? 

We want to involve as many people as we can.

Take part of the current active discussions:
* The Portal Forum threads:
    * [How can we find Better methods to organize information and create emergent internet structures?](https://forum.theportal.dev/t/how-can-we-find-better-methods-to-organize-information-and-create-emergent-internet-structures/965)
    * #semantic-forum-project on The CoffeeHouse Discord

* '''UX experts''' - Help us design a friendly and productive experience for working with these semantic graphs.
* '''Visual artists''' - Help us visualize different ways of using the system
* '''Philosophers''' - Help us systematize and figure out the best ontologies
* '''Developers''' - Help us choose a database, backed and UI framework. Help us write an interactive demo that will showcase the potential of the project.
* '''Potential Users''' - Tell us how this fits (or doesn’t fit) with your use-case, whether you’re an expert, an organizer, or just an enthusiast. Help us come up with * scenarios and ideas. Eventually you can also help us test the system!

How can I get more involved?

Message Focusless or erezsh on Discord or on The Portal Forum

## Other Links 

[Create examples of Semantic Graphs ](https://app.conceptboard.com/board/oiz2-7coe-mb2b-ithm-yfz2#)

[gitpedia Design Document](https://docs.google.com/document/d/1XU7ICqTj5bWHGykJ60xqCs01oi6TDFXDGQerON6M_dI/edit?usp=sharing)

[gitpedia concept board](https://app.conceptboard.com/board/4x66-ag9p-6e9z-eu7n-kfr9#)

Or just start a conversation with us on [| discord!]([The_Coffeehouse)]

### Old documents that were imported to the wiki 



[Link to Original Google Doc](https://docs.google.com/document/d/1E9L9iyt17ovkyN_6Eh4b_6phUaLBxi4uPjaNYmJiuz8/edit#)

You can find more details here, [in our brain-storming notebook](https://dynalist.io/d/uudYrj0kbQlvghld8wmnlq3c)

-------

The Semantic Forum
------------------

[Imported form here](https://dynalist.io/d/uudYrj0kbQlvghld8wmnlq3c)

* * Goals
    * Build an open-source forum and knowledge-building software
            by using a semantic graph as its core structure.
    * Define an ontology for productive conversation, which can
            also help the users to navigate and find information.
    * Provide tools for effective and meaningful knowledge
            building and sensemaking
    * Provide a client-side framework for writing components (or
            \"views\") that can display and change the graph.
  * Learn the core concepts
    * Semantic network - Wikipedia
    * Ontology (information science) - Wikipedia)
    * Linked Data - Wiki \| Tim Berners-Lee TED Talk \|
            non-technical introduction
    * Other related or similar projects:
        * DBpedia - DBpedia allows users to semantically query
                relationships and properties of Wikipedia resources,
                including links to other related datasets.
        * OntoWiki - Semantic Data Wiki and Linked Data Publishing
                Engine
        * Metacademy - A \"package manager\" for knowledge
  * Why a semantic graph?
    * By connecting data in a more flexible way, we give our users
            new ways to express their thoughts and report on their
            understanding.
    * Designing the knowledge-base as a graph will make it more
            easy for algorithms to aggregate the data, and answer
            complex queries.
    * What problems are we trying to solve and what needs are we
            trying to meet?
        * Stop discussions from getting lost in data flows.
        * Enable discussions to naturally branch/diverge in
                multiple directions
        * Filter away all that is irrelevant
        * Promote discussing complex subjects
        * Preserving knowledge
        * \"Channels\" for both slow and quick respondance
        * Ways to collect, curate and condense what we can
                collectively agree upon
        * Collaboration on information navigation.
        * Navigating the tension between openness and order
            * quote from PMWeng: \"You need to have a firm enough
                    grasp on what is reliably real: a grounding
                    structure or reference frame, and you must also be
                    flexible and under-determined enough to notice and
                    digest as yet unincorporated forms and material. Too
                    much of either fails.\"
  * How can I contribute?
    * We want to involve as many people as we can.
    * Take part of the current active discussions:
        * The Portal Forum threads:
            * How can we find Better methods to organize
                    information and create emergent internet structures?
        * \#semantic-forum-project on ThePortal\'s CoffeHouse
                Discord
            * (Invite to ThePortal\'s CoffeHouse Discord)
  * How can I get more involved?
    * Message Focusless or erezsh on Discord or on The Portal
            Forum
  * Todo
    * See the \#needs-work tag
    * Get the discussion going
        * Announce this project on the portal forum
        * Create a subreddit for this project.
        * Try to get a room in the forum for this project
    * refactor into a separate discussion:
        * <https://forum.theportal.dev/t/how-can-we-find-better-methods-to-organize-information-and-create-emergent-internet-structures/965/16?u=erezsh>
    * Backend

  [Imported form here]: https://dynalist.io/d/uudYrj0kbQlvghld8wmnlq3c
