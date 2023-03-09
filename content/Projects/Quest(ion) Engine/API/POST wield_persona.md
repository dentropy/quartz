

## Input
* data
	* stringified object
		* pseudonym
		* unix_time_ms
		* signing_key
* hash
* signature_of_hash

## Returns

* Returns STATUS_CODE:
	* CREATE_PERSONA
		* PERSONA_ID: 
		* BEARER_TOKEN:
	* Error
		* That Persona already exists, please claim another one or sign in with the proper public key.

## Error Codes

* MISSING_KEYS
* INCORRECT_HASH_OF_DATA
* INCORRECT_SIGNATURE_OF_DATA_HASH
* INCORRECT_SIGNATURE