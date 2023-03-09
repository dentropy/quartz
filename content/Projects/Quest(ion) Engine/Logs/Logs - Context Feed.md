## Reminders
* ["Why doesn't social media, and media in general, recycle the past?" / Twitter](https://twitter.com/PaulWMullins/status/1600586790536187905)

[2022-12-14](2022-12-14.md)
* Alright what's next?
	* We need to finish these checks
		* Then we have all the other chains that need checks too
		* No we are reusing them remember
	* But this is not async
	* Yes you need a dag you can do that later
	* Dag's have a complex way of sorting shit
	* Good artists copy great artists steal
	* What is this check_hash function thing?
	* Does this already exist on ceramic
	* No we need to list the checks
	* What does the hash check?
	* Alright we have the these tests
	* Well we need to write tests for these tests
	* Alright mocha chai time
	* We have the database working now
	* What is next?
	* We need to have more transaction types and validation
		* Our validation does not work correctly
	* What about how we reuse all this code
	* As we doing assert's or not
	* Well asserts do throw an error so they should be fine
	* Alright are we going to reuse the checks or now?
	* We should be reusing the checks
	* What is the problem now?
		* I can't get errors thrown when there is a problem
		* Can't your just return false
	* My brain is fried this is not working, need to go on a walk
[2022-12-13](2022-12-13.md)
* Alright let's finish this....
	* We need a schema, a vault, validation code, Transaction Builder, an API, and a frontend
	* Can we do this by midnight
	* No by 3am? Sure
	* Alright we have a schema
	* You creating a vault now?
	* Seems like it
	* Addresses
		* 0x9b3D8208357155c9962EcE54C124C26ca907c3fE
		* 0x2869176b453C675fB78f120AcF2BFa6FA816b0A5
		* 0xB983B84AD18A92448727647Ff98EC95Fd2201C9A
		* 0x6e87E93AF1EF140f17e4720EC4de291D4241e4B2
		* 0x921285EBDb852F94b91E2987CA708E83603eBa70
	* Safe Address
		* gor:0xBe5f41538bF903a39e20ce1290cd4595044B4e05
	* Alright what next?
		* Validation Code
		* Wait should we write code that put's data into the database first then write validation code
		* No we write validation code first
		* Are we just going to use the types I already have 
		* Of course
		* What flow do we want this test to have?
		* We want to have a tone of transactions built and added to each of the signature chains
		* Wait does our type have the previous signature in the datatype?
		* Nope
		* Alright we need to add that
		* Wait what do we sign, the hash of the previous block
		* How are blocks even created
		* You did not read mastering Ethereum or mastering Bitcoin, you do not deserve this job.
		* Alright how would I do things?
		* We we need the previous block hash in the transaciton we are signing
		* Well that was added
		* Alright what now?
		* We have validation code
		* We need validation code for each transaction
		* Oh ok
		* So what do we need to do?
		* Check all the fields are present
		* Alright so how do we do this in typescript?
		* Do what in typescript
		* Use a fucking type
		* Let's list all the fields from a typescript variable
	* Alright we got a working type now
	* What next?
	* What next?
	* We need validation code that works with the database
	* We also need code to insert into the database
	* Also what if we want multiple context feed's?
		* Run process on separate domains for now
	* Alright what next then?
	* We insert this into the database
	* We are going to need our hashing and signing code
	* Alright do the types belong in their own folder?
	* Yes but call it types
	* Then we can have a tests dev or test folder
	* We call it dev
	* What next?
		* Well we want to get our transaction for the user chain inside the database
		* Well we need some validation code
		* Like what
		* For the gnosis_safe.json, check correct ChainID
		* Call to see the addresses are authentication on the chain
		* Alright write it then
	* We need to decide where to put the gnosis_safe.json code
	* Just put it in the root
	* ethers is a bad folder name
	* What column's do we have that are different?
		* Content, Tag
	* Ya it would be easier if we just had everything not needed in JSON
	* Plus we know how to scope things
	* Alright we not fixing the ORM?
	* We have an updated schema
	* Update the types on Obsidian
	* Good we got that done
	* What is next?
	* Hmmmm we need more type and we need to get the data in the database
	* Okay explain to me how we put this into the database?
		* Well we have our type right
		* We strip our the components that go in their own column
		* Then we dump the rest into the last JSON column
		* Can't we just dump everything into a single row
		* Yes but then we would have a problem with some constraints
		* Oh ya we need to add those
		* Oh there are validators in sequalize
		* This stuff is going to be useful
		* Wait aren't we doing alot of this stuff already manually
		* Yes but sqlite doesn't care so we need to
		* Oh ya
		* Alright what next?
		* We insert
		* No we need to fix these scripts
		* We have the schema with other stuff not good
		* Alright so what do we want to do?
		* Turn the type into an object
		* Extract a bunch of the key value pairs from the object
		* Insert everything
		* Nice let's do it
	* Cool we got data in the table now
		* We need to create separate types for hashing and signatures
		* Then we need to have separate validation code
		* Are we going to have a separate table of users, adding and removing them
		* Ya that would make sense
		* Alright what is next?
		* We create validation scripts for the rest of the types?
		* Why of course we need to do that eventually
		* Did we even check the signature for the type we just completed
		* Nope but we can do that later
		* Oh shit what is the previous signature hash is invalid
		* Well we are doing nonce so we are stuck with it
	* 21:28
		* Alright what are we doing now?
		* We are doing that select query
	* We have our select query what now?
		* Well we need to pull the data out of the database and check if it is still valid
		* I gotgot about that
	* 21:53
		* This would all be so much easier if I just stored everything in raw JSON
		* Shall we just add another column to make our solves easier, then just track the nonce
		* Sure why not
	* 22:14
		* We have the hashes in the database matching
		* What is next?
		* Why don't we get the other types validated
		* No we have the hash but we need to do the signature too
	* 22:21
		* What now?
		* We have successfully tested the insert and check
		* Now what do we do?
		* We need to have a chain so we can have an API
		* We need more transaction types
		* We need selects
		* Like what
			* Contract Address
		* We need a users table
			* Ya we know
		* The first chain_validation needs to make sure the nonce is not there
		* What queries do we need
			* Check nonce
			* Get signature
			* PreviousSignatureHash
		* Alright what is next?
			* We need to get the signature hash
	* 23:30
		* Alright we got two transactions done
		* We still need a users table
		* Yes yes we do
		* We also need a posts table?
		* Can we just query the system and cache it
		* Ya I guess
		* What is next?
		* Next chain_link_validation, just get them all done, have script to create a chain, then develop an API, then get a frontned
		* Alright 
			* So how is this adminSignatureList supposed to work?
			* Well do we want this to work with or without gnosis
			* It is waaay easier with Gnosis
			* How do we keep them in sync
			* We require an additional signature
			* Alright what now?
			* We going to require everyone else sign on for this dam user?
			* Are we going to check if they were not already added
			* Wait USC0001 was add safe member, USC0002 is add community member
			* Alright time to change these asserts
		* Alright what are we signing, the address we are adding lower case.
		* For AddSafeMember we do not need addressAdded but we do for AddCommunityMember
		* Alright how are we checking community members?
		* We use remove
		* What is next?
		* We write a transaction and put it on the sig chain
		* Then we can write tests for everything
		* Root block
		* Adding each admin member
		* Adding each community member
		* Then work in rekeying
		* Then to adming strike
		* Then do Remove address and user
		* Ummm we require a user table for rekeying and removing addresses
		* Ummm we do not need one for removing address
		* Are we going to do media posts without the user table
		* No that would be stupid
		* Do we want to use standard code for nonce, previousSignatureHash, pseudonym, unixTime, signingAddress etc. etc.
		* Ya that would be easier
		* Then we can throw the errors as well
		* Are we going to use mocha chai test in order to add blocks?
		* Ya we are going to need to rewrite all these asserts
		* Well no we just need to get all these test things separately
	* 00:02
		* It is tomorrow
[2022-12-12](2022-12-12.md)
* Alright
	* We are reimplimenting twitter, utility, I know how to code
	* Are we talking about our relationship with social media
	* Do you have a specific question
	* No
	* Then fuck that
	* Alright what are the features of twitter
		* Tweet, Hashtag, Reply, Quote, @
	* Wait isin't this just a poor activity pub implimentation
	* Comsci students do that shit too
	* Also crypto signature activity pub IS NOT A THING
		* Can it be an extension
	* Shit if I planned correctly I could implement that
	* Degenerate me
	* Alright we have message types
	* Fuck we have graph properties, like how do we manage AT's
	* We prioritise features
		* Just raw tweet, message type
		* Reply to tweet, message type
		* Quote tweet, message type type
		* At Tweet, data parsing
	* Where are these message types
	* We need a main page for everything, rather than Alphabetical Order
	* Should tags be separate or parsed out? They need to be a separate transaction anyways what is the difference between how I want to use tags verses say twitter and raindrop.io
	* Does the metadata DID require the postDID?
	* Well is is a signature chain using the content
	* Each chain has booting data, the user chain has Type 0, the posts are linked to the previous post, the metadata is linked to the post
	* Fuck how do we track users? We have pseudonum's and keys....
	* Just require everyone own a NFT and look at key's that have access, that can't be too hard
	* How do we rotate keys on the sign chain?
	* The block chain is the single source of truth.
	* No owning a NFT is too much, and allows tracking and shit.
	* This is an added feature.
	* Private torrent trackers, lose your account get a new one.
	* Think about rekeying with PGP, cool that works
	* What is next?
	* We have our types, just code them out
	* What about our transaction restaurants
	* Get the types out first, worry about serialisation and validation later
	* alright what do we do after we have these types we have to actually use them
	* Do we develop a schema to dump these types into so we can have an actual chain?
	* Ya sure why not
	* Alright we got out types not we need a way to actully chain them together
	* We just doing SQL JSON?
	* Do you really need sequalize? Or just use sqlite with JSON queries!?
	* So we just doing validation into the system
		* Ya
	* But what about when the chain goes another way
		* We can check that nonce
	* No we need to pull some data out of the system that is universal
		* nonce
		* unixTime
		* hash
		* signingAddress
		* signature
	* Then we just store the rest as JSON?
		* YES
	* This could all fit in a single table
		* No we have unique nonce
	* But we have multiple metadata tables
	* We have a forein key with a nonce to use as the constraint
	* This is doable, I can do the ORM schema next
	* Then we need the validation code to validate what goes in
	* Well I think we are going to have a folder for each chain and each transaction get's its own file
	* So like react components!?!?
	* Yes
	* What are we taking design inspiration from?
		* Gnosis Chain - last signature counts for quorum
		* PGP - user are their keys, until we have NFT integration
		* Cardano - types of transactions
		* React - transaction types get their own file
		* Cypher - We tag connections between media
	* Wait can we actually tag stuff like in cypher like between posts and metadata itself
	* Wait the nonce is not for the chain but the user, we need to track both a chanLength as well as signatureNonce
		* Ya that makes more sense
		* Also needed for chain security?
		* Well it increments so what you are adding too much complexity
		* We have signed time stamps that should be good enough, for now
		* Ya I agree
		* Crap we should probably use BigNumber rather than actual numver
		* Will that matter in sqlite
		* Premature optimization
		* It will work in sqlite if we just do JSON stuff
		* Then we can't sort easily
		* Sorting strings
		* Dam that makes sense
		* We need a universal provider
		* Or do we create one on the fly every time
		* we can create one on the fly for now
	* Wait do we actually want the hash and signature inside the type itself?
	* We need to hash and sign the type itself so no
	* Do we create two types, one that has the other type within it
	* Ya that makes sense
	* Cool we have our first validate example up and running
	* What is next?
	* Well we need to dump it into the database
	* I think we will only need to write this method once for each table
	* Agreed
	* Do we want a universal schema

[2022-12-09](2022-12-09.md)
* What now?
	* We make that video
	* Okay what now?
	* Write the script
[2022-12-07](2022-12-07.md)
* Now what?
	* We need to map out these different transaction types
	* I have been thinking alot about the network protocol for this, libp2p, ceramic, simple web server it get's complicated fast
	* Ideally this entire thing can be built on ceramic, but a express sqlite implimentation would be nice
	* Wouldn't activitypub be more ideal than ceramic
	* Crap I guess I am learning activitypub
	* Ya then you don't have to deal with any database schema complexity
	* Alright that works, we can just use Pleroma in a docker container
	* Then run a separate service
	* No you should use misskey, you are already using nodejs
	* What about that activitypub go implimentation
	* I wana look at that thing
	* Also ActivityPub is not private like at all
	* Neither is ceramic
	* Whatever we can deal with this when the time comes
	* Alright we need out types
	* No we need fucking user stories bro
	* Oh ya
	* We did them but they sorta suck
	* I need to talk to social media power users
	* No they don't want someone to ask how do they work
	* I need an interface for social media
	* I need a mask to wear
	* We can sterotype people on social media
		* The Grandma, we don't want them on the platform
		* Or do we we do eventually
		* We need to do a proper comparison with ActivityPub, Matrix, 4chan, and Lemmy
	* Alright what is flow of actual stuff?
		* First we have a group of people bootstrap a gnosis safe
		* Then we have the people register on the chain of users
		* What does the user interface look like?
		* How is this any different than matrix?
		* Additional Metadata Posts?
		* You can't shorten the chain after
		* This is just matrix posts
		* Okay properally tagged and mapped out reddit is better
		* We want to replace reddit and 4chan and matrix all in one
		* The everything app
		* What does that mean
		* Who are the first users?
		* What would a social media overlay look like?
		* Like how are we supposed to use these tags
		* The protocol is called context feed
		* The protocol needs to be able to think obtaining more and more context over time
		* We should not be deleting posts we should recycle the past
		* Well that is a useful realization
		* Alright we need a user flow diagram
		* Dude just follow [Design Roadmap](Design%20Roadmap.md)
		* Alright we need an embodiement
	* Try User Flow Again
		* Create Gnosis Safe
		* Bootstrap chain of identities
			* How is this done, there needs to be a gossip protocol
			* Urbit would do this nicely
			* This is literally what activitypub is for
			* This is also what matrix is for
			* What is the communication backend?
			* How do people share their signed messages
			* Tox!?!?!?
			* Lol no that would be super dificult
			* Then how do they share their messages
			* Matrix would be ideal
			* You going to learn the Matrix SDK in like days
			* I am a coding chad or not
			* Alright we can decide on this later
		* Bootstrap chain of posts
			* How are people supposed to share this
			* Separate Matrix channel?
			* Ya why not, this is what they are for
		* Bootstrap context chain for each post
			* Start another channel
			* No there is a threads API we can use for this now
		* Users are separate from the posts?
			* Ya of course
		* This may actually work but requiring a matrix, and ethereum key makes things complicated
		* This is literally what matrix spaces are for
		* What is Urbit more similar to Matrix or ActivityPub
		* Definitely Matrix, you clone the chats from other servers on your server
		* Alright then use matrix
		* Can we do a matrix plugin?
			* Actually that would be absolutely based
		* Not learning that in 3 days
		* Alright what next?
		* We do our message types
		* Wait can we really just stream messages?
		* YES we just need a bot to delete shit, and we can do that with matrix
		* Alright that works
		* This is how we integrate them
		* Cool what do we do now?
		* Types of messages
* Alright we found out what we are going to do next
* I have been going on walks and just start talking as if I was doing a presentation to myself, so let's record the presentation and get some feedback from actual people
* So let's write this script somewhere
* Here first, then move it
* Alright

## Context Feed, A Sense making Protocol

Hello World, Dentropy Here,

I want to develop a protocol the generates collective intelligence. I want this protocol to produce both dank memes as well as useful investigations into nuanced topics. At some point pepe is going to get his PHD.

Alright let's start our investigation from first principals. A General Theory of Collaboration some might say. 


[2022-12-06](2022-12-06.md)
* Now what
	* We do a signature message verification example
	* Then we do all the typescript types
	* Then we decide what schema we want for a database
	* Alright signature time
* We got the signature examples done
	* I remember they have an extra 20 bytes in front of their message, I don't think we need to store it though
* Where are our types we need to generate
	* Below
* Aren't there example types for addresses and stuff?
	* [TypeChain/types.ts at master · dethcrypto/TypeChain](https://github.com/dethcrypto/TypeChain/blob/master/packages/typechain/src/typechain/types.ts)
	* Well we probably want a list to store the transactions rather than an object with stuff
[2022-11-30](2022-11-30.md)
* Let's verify those signatures
[2022-11-28](2022-11-28.md)
* Next Steps
	* Preactice doing actualy signatures
	* Verify message of siganture
	* Document the signature block types
	* Create Typescript types for each signature blocks
	* Boot a user signature chain
* Wrote out the user stories
* Let's scope out the compotnents
	* Create Gnosis Safe Treasury
	* Booting signature chain from Gnosis Safe
		* Point script at safe and get all the signatures
		* Booting signature data structure, we are going to need signature types
		* Type 0 - Link Gnosis Safe
			* Contract Address: address
			* ChainID: int
			* MemberAddQuarum: int
			* Number of booting users: int
			* List of booting users: []
			* Unix Time: bigint
			* Who is Signing: address
			* HASH, SIG
			* Admin Signing Time:
		* Type 1 - Add Safe Member
			* Who is Signing: address
			* Unix_time
			* HASH, SIG
		* Type 2 - Add community member
			* Unix_time
			* AdminSigList: []
		* Type 3 - Set Name
			* Unix_time
			* Address
			* Name
			* HASH, SIG
	* User signature chain
	* Media signature chain
	* Momments and metadata signature chain
* Let's scope out the first component, booting signature chain from gnosis safe
	* Have a Gnosis Safe
	* Read the addresses from a gnosis safe
	* Generate the signature chain
		* What message does everyone sign
		* Doing Gnosis Safe metadata is identifiable enough
		* How do we name the addresses
		* The order they came in of course
		* Then we can have a username setting part of the signature chain
	* How do we deal with number of people
		* That is part of the metadata
	* What metadata do we want
	* What do I need to know
		* How to read the required members in a safe
	* getOwners() from  base/OwnerManager.sol is the file we are looking for
	* Let's get the ABI for the Gnosis Safe
	* What is the contract address now?
		* https://github.com/safe-global/safe-deployments/blob/main/src/assets/v1.3.0/gnosis_safe.json
	* Wow that could not be easier
	* Alright we can now pull the owners from a safe
	* 
* Thinking
	* Do we need the signatures from the gnosis safe or do we just read who the owners currently are
	* How do we deal with the owners being updated
	* How do we deal with the owner of the safe changing without having to update the signature chain
	* Do we just require that everyone accepting the new block check the blockchain to see if it was changed
	* All owners are going to post time stamped signatures
	* If someone finds a transaciton hash for the change of owners that is within time constriants then the signature chain is reverted
	* Well the system can get out of date, when the owners change someone just says the owners changed and signs a block of all the new owners. Doesn't matter. No it does matter because those owners are managing new users. The users need to be watching the owner's.
	* What about everyone adding a new signature of the owners
	* We do not sign it, we just have a sorted list of the users updated with the time.
	* No we can have the owners update it themselves
	* For every user added the people need to check if the gnosis safe is still the same as the contract
	* Reject the new users otherwise
	* The people need to rekey after a safe change
	* Rekeying is good opsec, rekey the safe, rekey the DAO
	* The concept that the people in control of the safe and the people managing the community can be different.
	* Alright what do we want to do next?
	* We are going to have to regenerate the same addresses as metamask for testing purposes
	* Alight we are generating the same addresses via the mnemonic
	* And we not have the same 5 accounts
	* I guess we can create a 5 member safe, 2 quaum
	* We have a Gnosis Safe, 0x6840C52be978Bcae50A8f43d814c498d6e380946
	* Test the script
	* Works
	* How do we deal with adding and emoving the admins
	* Oh we have the time solution, the admins need to reconnect every X days
