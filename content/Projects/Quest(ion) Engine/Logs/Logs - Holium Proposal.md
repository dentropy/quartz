[2022-12-06](2022-12-06.md)
* Now what
	* We do a sinature message verification example
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
