---
id: ZSvxqgkqeIkhbzPA1Fkdf
title: graphql
desc: ''
updated: 1631282412506
created: 1631113466148
---

* [How to get newly created Ethereum Tokens? | Bitquery](https://bitquery.io/blog/newly-created-etheruem-token)
* [Geth - GraphQL Connectivity and Examples - Blockdaemon](https://blockdaemon.com/docs/protocol-documentation/ethereum/geth-graphql-connectivity-and-examples/)

``` graphql
{
	block(number:1000000){
    transactions {
      hash
    }
  }
}
```

``` graphql
{
	blocks(from:1000000,to:1001000){
    number,
    transactions {
      hash
    }
  }
}
```

``` graphql
{
	transaction(hash:"0xe1777b28a633932aac0d795c817e2aef115e8115a3d2e41bbaa51517f2e4db8c"){
    block {
			number
    }, createdContract {
      address
    }
  }
}
```
