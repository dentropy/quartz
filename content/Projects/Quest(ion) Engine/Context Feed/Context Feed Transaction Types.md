## USC - (User Signature Chain)

* Type 0 - Link [Gnosis Safe 1](Gnosis%20Safe%201.md)
	* linkType: 0
	* nonce: 0
	* previousSignatureHash: hash
	* contractAddress: address
	* chainID: integer
	* memberAddQuorum : integer
	* memberRemoveQuorum: integer
	* numBootingUsers : integer
	* listBootingUsers : [address]
	* pseudonym: string
	* unixTime : integer
	* signingAddress : address
	* hash: string
	* signature: string
* Type 1 - Add Safe Member
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* addressAdded: Address
	* pseudonym: String
	* unixTime: Integer
	* signingAddress: Address
	* hash: String
	* signature: String
* Type 2 - Add Community Member
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* adminSignatureList : [string]
	* pseudonym: String
	* unixTime: Integer
	* signingAddress: Address (Last required admin signature just like [Gnosis Safe 1](Gnosis%20Safe%201.md))
	* hash: String
	* signature: String
* Type 3 - Re-key
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* newAddress: Address
	* unixTime: Integer
	* signingAddress: Address
	* hash: String
	* signature: String
* Type 4 - Admin Strike
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* postDID: string
	* strikedAddress: address
	* unixTime: integer
	* signingAddress: address
	* hash: string
	* signature: string
* Type 5 - Remove Address / User
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* removedAddress: Address
	* unixTime: Integer
	* signingAddress: Address
	* hash: String
	* signature: String
* Type 6 - Change Pseudonym
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* pseudonym: String
	* unixTime: Integer
	* signingAddress: address
	* hash: String
	* signature: String

## PSC - (Post Signature Chain)

* PSC0000 - Media Post
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* content: String
	* unixTime: Integer
	* signingAddress: Address
	* hash: String
	* signature: String
* PSC0001 - Linked Metadata Post
	* *Note*: Just like  [Project Xanadu](Project%20Xanadu.md), may metadata posted on Metadata Cain before Post Signature Chain require this before adding to post signature chain
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* postDID: string
	* content: string
	* unixTime: integer
	* signingAddress: address
	* hash: String
	* signature: String
* PSC0002 - Admin Strike Backlink
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* content: string
	* strikedAddress: address
	* unixTime: integer
	* signingAddress: address
	* hash: string
	* signature: string

## MSC - (Metadata Signature Chain)

* MSC0000 - Add Comment
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* content: String
	* unixTime: Integer
	* signingAddress: Address
	* hash: String
	* signature: String
* MSC0001 - Add Tag - ONLY ONE AT A TIME
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* content: string
	* tag: string
	* unixTime: integer
	* signingAddress: address
	* hash: string
	* signature: string
* MSC0002 - Link to other Context Feed post with comment
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* linkedDID: string
	* content: string
	* tag: string
	* unixTime: integer
	* signingAddress: address
	* hash: string
	* signature: string
* MSC0003 - Backlink to other Context Feed post with comment, used with MSC0003
	* linkType: number
	* nonce: number
	* previousSignatureHash: hash
	* linkedDID: string
	* tag: string
	* unixTime: integer
	* signingAddress: address
	* hash: string
	* signature: string
