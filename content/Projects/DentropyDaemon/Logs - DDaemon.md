[Quest(ion) Engine](../Quest(ion)%20Engine.md)

* [2023-01-17](../../../MyDendronExistence/Daily/Logs/2023-01-17.md)
	* Alright we need to setup a better schema, every message needs a unique identifier
	* We can do message_id or we can do it based on time
	* One requires padding the other does not
	* pkey, the timestamp makes more sense
	* We should also probably put it in its own column with message ID, and message conversation_id
	* Seems like we are heading back to the boondocks
	* Dude if you knew what queries you were playing with this would have been easily solved
	* We want to find people talking about similar stuff
	* Then what
	* You need to insert your will on the universe
	* No you need to insert your will on a single person
* [2023-01-16](../../../MyDendronExistence/Daily/Logs/2023-01-16.md)
	* Alright what is on the chopping block!??!?
	* Remove all file based code, do I want to load the values !?!?!?
	* No
	* Done and testing
	* Testing took longer than expected
	* Alright then what's next!?!?!?
	* We NLP this shit I guess!?!?
	* Then what after we NLP
	* We find people talking about matching stuff
	* We can find any two people and see what they talk about and shit
	* We will have to generate infographics and suff
	* Do we do this in a separate repo!?!?
	* Ummmmmmmmm
	* yes, we already have the code here, now we need to do the ETL which can get messy, this code is very clean
	* We also need to package this project
	* Added to the list of shit to do
	* Alright we use the sqlitedatabase then run every message through the ETL pipeline thing then save each object that comes out in a table
	* Shit you make it sound easy
	* What git repo!?!?
	* No we just make a folder
	* What does our table look like!?!?!?!?
	* Alright we doing a script or a class?
	* A class, isin't that the correct way to do things
	* Isn't it over complicating things
	* It's more pythonic and helps organize shit, if you use OO langauge use OO
	* Alright where is our NLP code
	* Alright we have the table, we have the messages
	* Wait don't messages have a UUID or something
	* We doing group or team messages first?
	* Why we do group messages
	* Let's start by circling through all the messages
	* Then we practice on a single message with the NLP
	* Then loop through the NLP
	* What if we cancle message halfway through
	* We need a primary key for this stuff
	* We can use conversation_id + sent_at_ms as a primary key
	* That will be a little long, who cares
	* Are we checking for every message
	* Over engineering but yes let's do it
	* Also we are going to probably want to load these into memory
	* If you are doing that just migrate to spark
	* I don't really like spark cause everything has to be memory based then saving, I can do memory with sqlite
	* Come up with a project large enough for spark
	* Alright quest accepted
	* Alright so what are we doing?
	* Looping through the messages
	* I really gotta work on documenting this shit
	* Are you going to put that data into the graph database
	* Well I need to know what kind of queries I want to do first don't I
	* I just want to match the entity and word
	* Can't you just do a SQL query for that
	* But we need two different entities
	* We are matching within the same table
	* SQL can do this
	* Then tell me a story about graph databases
	* Alright what's on the backlog?
	* Well why don't we just list all the text that comes out
	* We need to start using a jupyter notebook
	* So we want to list how many time each unique entity appears
	* Sounds like a SQL query to me
	* Let'w write it 
		``` sql
		SELECT
			message_id,
			result_json,
			json_extract(result_json, '$.word')
		FROM nlp_messages_t
		WHERE result_json NOT NULL;
	
		SELECT
			A.message_id,
			B.message_id,
			json_extract(A.result_json, '$.entity'),
			json_extract(A.result_json, '$.word'),
			json_extract(B.result_json, '$.word')
		FROM
			nlp_messages_t A, nlp_messages_t B
		WHERE
			json_extract(A.result_json, '$.word') = json_extract(B.result_json, '$.word')
			AND json_extract(A.result_json, '$.entity') = json_extract(B.result_json, '$.entity');

		```
	* Alright how do we do now?
	* You should probably go for a walk or something
	* We actually have something to read in the journal
	* Alright what next?
	* You going to wait for data you don't even trust
	* Also you did the code correctly this time so you can restart it later
	* True
	* What other datasets do I want to play with?
	* Discord Data, Twitter, ActivityPub
	* Why do you want all this data
	* I am looking for people to work with
	* Work with on what what kind of change do you want to see in the world
	* I want to see this Daemon thing built
	* Go watch some Persona 4
	* I wan to know more about BERT models
	* My goal is to relate to people in new and interesting ways
	* Alright we found matching words and entities
	* You should fix the ID, it is hard to find the messages, add the topic_or_group_name
	* Do we want to output to two different tables?
	* Why make things complicated
	* Alright we add columns, is_team, team_name, topic_or_group_name, conversation_id, chat_id
	* No we want separate team and group chats because we can export the data and share it easier
	* 
* [2023-01-13](../../../MyDendronExistence/Daily/Logs/2023-01-13.md)
	* Alright do we want everything as JSON files or do we want to commit to SQLite, sqlite is built into python
	* Actually do we have any pip packages at this point?
	* This matters right now because we have to parse the attachments from the existing messages then pull them out one by one
	* It would be way easier if we had a single table with all the JSON and messages and stuff, just like [ActivityWatch](../../Software/List/ActivityWatch.md)
	* Well we are going to put the data into sqlite eventually, and it is easy to parse out the sqlite data into something like potgres or elasticsearch programatially rather than just file dumping everything
	* So you wana rewrite the entire application to store data in sqlite
	* It will just be more beautiful, rather than folders of files we have sqlite
	* Do you really want a mess of files or do you want a beautiful sqlite database, one file and the zipped extensions
	* Ya sqlite is the way to go, but not over done
	* Alright we doing a schema for this now
	* YES
	* We need example code
	* We need to do this all in the constructor
	* Do we want a new keybase export class
	* No
	* For SQL messages, do I want to get them all or do the pagiation 1000 each time
	* 1000 each time for sure
	* Alright we go the sqlite migration done, that was done in one day, good job
	* What is next?
	* We search for attachments in sqlite
* [2023-01-12](../../../MyDendronExistence/Daily/Logs/2023-01-12.md)
	* How do we want to deal with teams?
	* We have each team have a JSON file in the root directory with their name then have a folder with the files
	* Ya that works
* [2023-01-11](../../../MyDendronExistence/Daily/Logs/2023-01-11.md)
	* Working on [Keybase Binding](../Keybase%20Binding.md)
	* Alright what is the work log
	* Dentropy you need a gittea server for you code
	* No just use built in github stuff
	* Crap you are right
	* No we do it here for now
	* Wait we have a list that can go right into the project trakcer easily
* [2023-01-10](../../../MyDendronExistence/Daily/Logs/2023-01-10.md)
	* Hello world, here I am over a year later
	* It is your neurotic pal dentropy here to work on a project that has his own name on it that isin't getting anywhere
	* I feel like I have learned a couple thing over the last year and bit, about myself, about people
	* What is the relationship between software and the people that use it?
	* Software in feedback loops that operate on either an individual level or a collective level
	* The Medium is the message
	* The dentropydaemon is supposed to be a new medium we use to relate to ourselves and others with additional context
	* I really need to get the capitalization on that right
	* I like dentropydaemon cause dd is a linux command
	* It should probably be Dentropy Daemon but I can take the liberty to do DentropyDaemon
	* Do I remember how Nouns work in english?
	* Nope
	* Alright doesn't matter actually deliver something and someone else will decide for you
	* There is no successful software with corresponding psyop
	* Developing software as a single person is easy
	* Developing software as a group can be difficult
	* Developing software then marketing it is a separate story I am not familar with and likely filled with corruption
	* But what do people want from their software?
	* The software today is like a mood organ from [do androids dream of electric sheep](../../Media/List/do%20androids%20dream%20of%20electric%20sheep.md)
	* Alright what is the Dentropy Daemon?
	* All your metadata in a single queriable system that can also be queried by others
	* Why don't your deploy that image app what was it called?
	* [Photoprism](../../Software/List/Photoprism.md) then put everything you have there
	* Also deploy wallabag
	* These things have API's that can be pulled together
	* Then get a Calibre server with all your ebooks
	* You already have AudioBookShelf for your audiobooks 
		* Does that have a API
	* I have all this data and don't use it to actually shape the world
	* That is because you don't know what you want the world to look like
	* No I have ideas and values I want to spread, I have just nudered myself to a certain point because I know no one cares about what I care about
	* This is going to be cliche but you need to think like Steve Jobs, you need to tell people what they want
	* I need to use OSINT tools to find people that would want to work with me and have similar interests.
	* I can get the git repos of all my favourite projects then find all the people that work on them then find them on social media them try to productively engage them in a public space
	* I could gain a following this way
	* Is that a data engineering project that can be completed in a short amount of time with clear deliverable results that involves chaining tools together in a way that has not exactly been done before
	* YES
	* Nice
	* The DentropyDaemon is supposed to help me learn more about myself, like if I had a backdoor to the NSA I would use it to find specific kinds of people
	* What kinds of people?
	* Hmmm ones with Homelab's, One's that actually contribute to open source, one's that engage in communits I want to be a part of, one's that have similar ideology that kind of stuff
	* So you are going to do an audit on yourself by figuring out where you belong!?!?!?
	* Ya basically, plus I already have the tools for this somewhere
	* Remember the end goal of DentropyDaemon is to have a digital representation of my psyche that I can pull out and play with and give access to others.
	* Alright here is the project I did with Git, [dentropy/udacity-capstone](https://github.com/dentropy/udacity-capstone)
	* But we do not want to do that this time, we want to deal with an old fashioned SQL database in a way that is easily migratable
	* Can I extract a ORM template for a database that already exists, I should
	* Does this matter, am I using an ORM the way it is supposed to be used!?!?!?
	* No you are going to write raw SQL anyways and you should, this is not an API
	* Alright what next?
	* Why don't we make a list of 100 of my favorite open source project, no no no, we go through my list of tools on [Raindropio](../../Software/List/Raindropio.md) as well as list all the other ones I like to use
	* We can write a script to query raindrop or we can export everything and process it
	* Ya that works
	* Alright so what are the deliverables
		* Export Raindrop, or sign up for it to export
		* Then pull out all the tools in a jupyter notebook
		* Then sort them by how much I like them
		* Then see if I can write a description to them
		* Oooo Raindrop has an API
	* What feels off about this ima mediate on it
	* The problem I feel is that I have not catalogued or index where all my data is, how much of it exists, what format it is, what services it is on
	* You know I can store sqlite databases inside my cloud storage provider with little to no fuss.......
	* I should develop my own coding curriculum or education program
		* And have a skill tree for myself
	* Wow there is a really cool migraiton tool to move stuff from facebook, reddit, instagram, and twitter to raindrop
	* Should I try it on my account?
	* Ummm let's do sqlite databases first
	* Wait what are we doing
	* Pulling everything from Raindrop that has the URL github or has git in the URL as well as anything under TOOLS, I may need to label them open source
	* I should repackage the dentropydaemon keybase project with search
	* The thing could just be static HTML pages and JSON like I want to do with facebook and other social media exports.
	* Alright decide on one thing and do it.
	* This project needs a story
	* Intro OSINT
	* Well we just want to sort out my tools I find interesting, we need catagories, there is no point in having a list of tools unless they actually get used
	* Alright I do not like this project, we get perople's emails from git repos, then search them up on OSINT tools, then find other info about them
	* I wanted to do NLP stuff, I already have exports from keybase and discord and those are easy to get and that builds on top of the dashboard I already have up and running
	* If I get a next gen dashboard I can start looking for another job because I will have ETL pipelines I can spin up on a whim.
	* Can I do ETL pipelines in Gitlab CI?
	* That does not matter, what matters is having a way of getting the data then automating it later
	* You can have self destructing docker containers
	* Serverless is what I am thinking of
	* Alright skills to learn
	* Dentropy write tutorials
	* Subconscious I need to focus
	* Alright what are we doing
	* We are indexing keybase to sqlite via python this is version 4, and this time we are indexing everything
	* Where are out previous attempts
	* Document this shit bro
* [daily.journal.2021.10.31](2021-10-31)
  * 13:40
    * I see a vision in the mirror for what the the dentropy daemon is supposed to be. It is a bigger idea than me yet I am the only one working on it. I am a mediocre project manager at best therefore am currently unqualified to lead a project like this. I may be saying that because my metacognition assumes that good leaders don't want to be leaders. Either way there is a vision, reality, and imbalance between the two.
    * I need to get these ideas planted into some communities to get some feedback
      * [Community.list.Conclience Project](Conclience%20Project)
      * [Community.list.Ryerson Zone System](../../../MyDendronExistence/Community/list/Ryerson%20Zone%20System.md)
      * [Community.list.Creative Destruction Lab](../../../MyDendronExistence/Community/list/Creative%20Destruction%20Lab.md)
      * [Community.list.Citizen Lab](../../../MyDendronExistence/Community/list/Citizen%20Lab.md)
      * [](Tower%20of%20Thiel%7CRelationships.Relationship%20Catagories.Tower%20of%20Thiel#tower-of-thiel)
    * Alright we have a vision and a set of people we need to move through in order to gain influence, power, and experience
    * This is still not specific enough to support [wiki.concepts.list.Theory of Mind](../../Wiki/Concepts/List/Theory%20of%20Mind.md)
    * Should I create a personality section of this dendron?
    * YES
    * Adding to TODO list
butts