---
id: FJK2Ct3z89bqsUyaMQJat
title: Events
desc: ''
updated: 1636662822984
created: 1632256101844
---

#### Events

* [Contract](https://docs.ethers.io/v5/api/contract/contract/#Contract--events)
* [Feature: better historical event API · Issue #463 · ethers-io/ethers.js](https://github.com/ethers-io/ethers.js/issues/463)
* [Everything You Ever Wanted to Know About Events and Logs on Ethereum | by William Schwab | Linum Labs Blog | Medium](https://medium.com/linum-labs/everything-you-ever-wanted-to-know-about-events-and-logs-on-ethereum-fec84ea7d0a5)
* [ethers.js - Get number of all the past events using ethers v5 - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/91966/get-number-of-all-the-past-events-using-ethers-v5)
* [adamdry/ethers-event-issue: Simple project to show an issue with ethersjs not firing the "on" event listener when an event is raised from a smart contract](https://github.com/adamdry/ethers-event-issue)
* [ethers.js - Get number of all the past events using ethers v5 - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/91966/get-number-of-all-the-past-events-using-ethers-v5)
* [events - ethers.js Why aren't logs filtering? (query returned more than 10000 results) - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/86509/ethers-js-why-arent-logs-filtering-query-returned-more-than-10000-results)

``` javascript
var MyContract = new ethers.Contract(contract_addresses[0], ERC721_abi, provider)
// Old Way
try{
    let events_listed = await provider.getLogs({
        address: contract_addresses[1],
        fromBlock: 13000001,
        toBlock:13100001
    })
        console.log(events_listed)
}
catch(err) {
    console.log(err)
    console.log("ERC-165 not supported")
}
// Another Example
my_events = await provider.getLogs({
    fromBlock: 13000000,
    toBlock: 13000100,
    topics: [ethers.utils.id("Transfer(address,address,uint256)")]
})
// New Way
try{
    let events_listed = await MyContract.queryFilter({
        events_listed: [
            MyContract.filters[0]
        ],
    }, 13018622, 13109622)
    console.log(events_listed)
}
catch(err) {
    console.log(err)
    console.log("ERC-165 not supported")
}

```


## Resent Blocks

Block tags may be given as negative numbers in filters and Provider API calls; for example, erc20Token.queryFilter("Transfer", -1234) will find all ERC-20 transfer events in the last 1,234 blocks.
  * [Beta Release: ethers.js v5. It’s been a while since a new version… | by RicMoo | RicMoo](https://blog.ricmoo.com/beta-release-ethers-js-v5-59d0db222d7b)