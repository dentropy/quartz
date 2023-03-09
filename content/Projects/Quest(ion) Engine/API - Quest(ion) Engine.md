* GET /get_cookie
	* Input
		* NOTHING
	* Returns STATUS_CODE
		* GET_TOKEN
			* BEARER_TOKEN
* POST /wield_persona
	* ![](API/POST%20wield_persona.md#Input)
	* ![](API/POST%20wield_persona.md#Returns)
* POST /perform_transaction
	* Input
		* data
			* pseudonym
			* unix_time_ms
			* transaction_code
			* token_pseudonym
			* token_public_key
			* from_pseudonym
			* from_public_key
			* to_pseudonym
			* to_public_key
			* value
			* meme_link (optional)
			* meme_edge_link (optional)
		* hash
		* signature_of_hash
	* Returns STATUS_CODE
		* PERFORM_TRANSACTION
* POST /submit_meme
	* Input
		* data:
			* pseudonym
			* unix_time_ms
			* signing_key
			* body
			* permissions
			* type
			* status_code
			* pseudonym
			* signing_key
			* edges (optional)
		* hash
		* signature_of_hash
		* transactions []
	* Returns STATUS_CODE:
		* SUBMIT_MEME
			* MEME_CONTENTS: {}
* POST /SUBMIT_MEME_EDGE
	* Input
		* data
			* pseudonym
			* unix_time_ms
			* signing_key
			* source_meme (required)
			* tag_type (required)
			* context_data (optional)
			* reference_meme (required)
		* hash
		* signature of hash
		* transactions []
	* Returns
		* STATUS_CODE: True
		* MEME_EDGE_CONTENTS: {}
* [POST query_memes](API/POST%20query_memes.md)
	* Get all public memes from a Persona
	* Get all protected memes from a user
		* Should these require an edge? Yes
	* 
	* RETURNS
		* [View Full Profile Component](Components/View%20Full%20Profile%20Component.md)
* POST /DISCOVERY
	* Returns List of
		* Pseudonym (With Eth Public Key)
		* Summary from /REQUEST_PERSONA

