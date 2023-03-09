## Description

In the end this is supposed to be a graphql API that can query everything required to generate the data in the front end. Right now it is just going to take JSON and do our own SQL queries. In order to populate the frontend we need different sets of data,

* [✅] REVERSE_LOOKUP_PSEUDONYM
* [ ] List of previous transactions
	* [ ]  by Token
	* [ ] to Persona
	* [x] TRANSACTIONS_FROM ✅ 2023-02-05
* [ ] MY_LAST_TRANSACTION
* [x] PUBLIC_MEMES_FROM_PERSONA ✅ 2023-02-05
* Query paid for memes
	* by Type
	* from Person
	* to Person
* Context Queries
	* Threads

## Brainstorming

* Query Types
	* PUBLIC_MEMES_FROM_PERSONA
	* PUBLIC_RESPONSES_TO_MEME
	* MY_REVEALED_MEMES
	* MEME_THREAD
	* BALANCE
	* PERSONA_TRANSACTIONS
* JSON
	* query_type
		* persona
			* pseudonym
			* public_key
		* responses
		* root_thread
		* transactions
			* transaction_hash
		* balance
			* persona
				* public_key
				* pseudonym
		* revealed_memes