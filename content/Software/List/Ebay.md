## Setting up Marketplace account deletion notification endpoint



## Super Important Links

* [Sandbox | eBay Developers Program](https://developer.ebay.com/develop/tools/sandbox)
	* [Create a test Sandbox user](https://developer.ebay.com/api-docs/static/gs_create-a-test-sandbox-user.html)
* [API Explorer | eBay](https://developer.ebay.com/my/api_test_tool?index=0)
* [Is there a way to send messages to buyers after their payment?,Is there a way to send a message to buyer after he bought something? - eBay Developer Forums](https://forums.developer.ebay.com/questions/25104/is-there-a-way-to-send-messages-to-buyers-after-th.html)
* [.net - Function for Getting Direct Messages from the eBay API - Stack Overflow](https://stackoverflow.com/questions/28709822/function-for-getting-direct-messages-from-the-ebay-api)
* [AddMemberMessageAAQToPartner - API Reference - Trading API](https://developer.ebay.com/devzone/xml/docs/reference/ebay/AddMemberMessageAAQToPartner.html#Request.MemberMessage.QuestionType)
* [GetMyMessages - API Reference - Trading API](https://developer.ebay.com/DevZone/XML/docs/Reference/eBay/GetMyMessages.html#Samples)

## OAuth Notes

* [fix: autoRefreshToken in traditional api call · hendt/ebay-api@faadf94](https://github.com/hendt/ebay-api/commit/faadf945ffa3a1f21b5b732692318c6747e0ff91)
* [Using a refresh token to update a User access token](https://developer.ebay.com/api-docs/static/oauth-refresh-token-request.html)
* [Ebay OAuth 2 Generate Token and Refresh - PHP - Francesco Pantisano](https://francescopantisano.it/ebay-oauth-2-generate-token-refresh-php/)

## Notes


To get production credentials you need to have a server up and running that ebay can contact.

Alright what domain do I want to use?

dentropycloud.xyz

How do we want to manage DNS?

We dockerize the thing using dentropycloud?

Really?

Sure why not

Running the nodejs code seems too complicated, thinking about running wordpress with special plugin. 

[eBay Marketplace Account Deletion/Closure Notifications - Ebayomatic update - YouTube](https://www.youtube.com/watch?v=cSYIis2MVJs)


https://ebay.com/?challenge_code=123

https://static.dentropycloud.top/ebay_test/?challenge_code=123

https://static.dentropycloud.top/ebay/?challenge_code=123

https://static.dentropycloud.top/ebay/


[eBay Marketplace Account Deletion/Closure Notifications Workflow](https://developer.ebay.com/marketplace-account-deletion)

## Next Steps

* Next Steps
	* Read date from Spreadsheet
	* Read orders from ebay API
	* Compare completed order with JSON file
	* Get CDKey from Spreadsheet
	* Send message with key
	* Update spreadsheet with key that was sent
	* Update spreadsheet with row and time
	* Wrap the entire program in a timed loop
	* Check all the console logs
	* Add bash script that outputs logs to a file
	* Run the dam thing

