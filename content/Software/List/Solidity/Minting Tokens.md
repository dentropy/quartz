---
id: a9c2hg75oiiohqxtqrcw2lx
title: Minting Tokens
desc: ''
updated: 1628449250318
created: 1628449250318
---
# MintingTokens
System Design
-------------

*   Ok I need to redesign the system
    
    *   If I am replying with a transaction hash the transacions object has to store all the signed transactions
*   I need to get transaction hashes for smart contract functions once they are already executed
    
    *   The object returned from the transaction has the bytecode and other inforamtion
*   I need to send the transactions out as soon as they come into the API I can not hold them waiting for the privious transaction to be comfirmed
    
    *   I need to separate these systems soon

Problem List
------------

*   I have tokens on the blockchain which do not match the schema
    
    *   I need to do a check to make sure the token makes sense to be stored in the blockchain
*   I need the script to be able to start at a specific block or check the transaction hash
    
*   I should probably run my own postgres database
    
    *   I too like to live dangerously
*   Problem why aren't transactions being dumped into the database
    
*   My code in the mix-api can't actually be tested by itself
    
*   I need to take it out and test it somewhere else
    
    *   I can slightly modify it and use it as is
*   I need to import it
    
*   I can import the json ABI into the node REPL no problem but when I load the scope itself into the node REPL I get an error
    
*   If I am not sending out a token until a later time I can not reply with the transaction hash
    
*   There are transactions coming in from the API and they have to be added to a list that goes out at a different rate
    
    *   The list can trigger the next transaction or the mint function can
    *   When Performing a transaction the state has to be stored as a variable somewhere and referenced
