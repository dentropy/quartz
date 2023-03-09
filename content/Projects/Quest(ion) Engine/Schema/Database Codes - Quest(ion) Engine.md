## Schema 

![Schema 0.0.6](Schema%200.0.6.svg)

## List of Database Codes
* MEMES_T.PERMISSIONS
	* ![](../User%20Stories/Meme%20Permissions.md#Meme%20Permissions%20List)
* MEMES_T.MEME_TYPE_CODE
	* QUESTION
	* ROOT_QUESTION
	* STATEMENT
	* ROOT_STATEMENT
	* CONTEXT
	* X
		* Complicated, contains parts of all the above and needs to be broken apart
* MEMES_T.MEME_STATUS_CODE
	* A - Active
	* D - Deleted
	* R - Fully Replaced
	* RM - Replaced Message Code
	* RC - Replaced Content
* MEME_EDGES_T.MEME_EDGE_STATUS_CODE
	* S - Refer's back to self - Works as comments that no one else can see
	* SS - Self Signed
	* T - Tag
		* Extracted tags from the initial meme
		* Refer's back to self
	* TS - Tag Signed 
		* Tag's added by the user after initial post
	* L - Just links, does not provide additional metadata
	* LS - Links and is signed
	* F - Full edge, includes metadata
	* FE - Full edge and is signed
	* D - Tag Deleted
	* U - Edge Updated
		* Means that REPLACED_MEME_EDGE_ID is NOT NULL
	* US - Edge Updated and Signed
* TRANSACTIONS_T.TRANSACTION_CODE
	* MINT 
		* Mint your own token
	* TRANSFER 
		* Transfer, just sending tokens from someone to someone
	* REMOVE 
		* When someone takes a token they minted away from someone
	* BURN 
		* When you delete someone else's tokens you have or your own
	* FAUCET_ON 
	* USE_FAUCET
	* MEME_PAYMENT
		* means record links to MEMES_T.MEME_ID
	* REVEAL_MEME
	* Beyond POC but required for MVP
		* MEME_EDGE_PAYMENT - Edge of Meme Payment
			* Means record links to MEME_EDGES_T.MEME_EDGE_ID
			* Might require a Graph Database or GraphQL
		* FAUCET_OFF
		* BLOCK_USER - Block User (Uses USER_ID for now, will use NFT later)
		* UNBLOCK_USER - Unblock User (Uses USER_ID for now, will use NFT later)
		* BLOCK_USER_TILL_DATE_TIME - Block user until specific date