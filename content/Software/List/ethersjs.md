---
id: Lzv3EBmuwkP3wkfdXenbb
title: ethersjs
desc: ''
updated: 1637598086764
created: 1631643772587
---


## Get Confirmations of BLock
* [How to get transaction hash immediately for transaction call? · Issue #511 · ethers-io/ethers.js](https://github.com/ethers-io/ethers.js/issues/511)
* [How to wait for certain number of confirmations ? · Issue #229 · ethers-io/ethers.js](https://github.com/ethers-io/ethers.js/issues/229)

## TODO

* [Set gasLimit and gasPrice on contract transactions · Issue #40 · ethers-io/ethers.js](https://github.com/ethers-io/ethers.js/issues/40)
* [Gas estimation failure gives a misleading error message · Issue #1232 · ethers-io/ethers.js](https://github.com/ethers-io/ethers.js/issues/1232)
* [SERVER_ERROR and INVALID_ARGUMENT errors for version 5.4.1 · Issue #1766 · ethers-io/ethers.js](https://github.com/ethers-io/ethers.js/issues/1766)
* [Invalid ENS name error when a signer is used instead of an address · Issue #1051 · ethers-io/ethers.js](https://github.com/ethers-io/ethers.js/issues/1051)
* [Can't catch Unhandled Rejection (Error): resolver or addr is not configured for ENS name (argument="name", value="", code=INVALID_ARGUMENT, version=contracts/5.0.8) · Issue #1234 · ethers-io/ethers.js](https://github.com/ethers-io/ethers.js/issues/1234)
* [Contracts — ethers.js 4.0.0 documentation](https://docs.ethers.io/v4/api-contract.html#overrides)

``` javascript
// npm install --save ethers
const { ethers } = require("ethers");
mah_hash = ethers.utils.namehash("auth.eth")
mah_hash = ethers.utils.namehash("paulmullins.eth")
console.log(mah_hash)
```

``` javascript
let provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545")
async function getChainInfo() {
    tmpBlockNumber = await provider.getBlockNumber()
    console.log(tmpBlockNumber)
    tmpChainID = await provider._networkPromise
    tmpChainID = tmpChainID.chainId
    console.log(tmpChainID)
}
getChainInfo()
```
