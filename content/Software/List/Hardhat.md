---
id: KOIlcDybOKVmhTMPTQu7L
title: Hardhat
desc: ''
updated: 1632256597300
created: 1628444413854
---

## TODO

* [giry-dev/hardhat-test-solidity: Hardhat plugin for writing tests in solidity](https://github.com/giry-dev/hardhat-test-solidity)

## Reminders

[Inital Accounts and their seedphrase](https://github.com/nomiclabs/hardhat/blob/4b8cd1b3bea89212ca6b73ea2660fc466383cf43/docs/hardhat-network/README.md#hardhat-network-initial-state)

## Integrations

[wiki.software.list.Hardhat.OpenZepplin](Hardhat/OpenZepplin.md)
[wiki.software.list.Hardhat.react](React.md)
 ^TgNThh8rX5lA
## Basics

* [Hardhat | Ethereum development environment for professionals by Nomic Labs](https://hardhat.org/plugins/hardhat-deploy.html)
* [Hardhat Network | Hardhat | Ethereum development environment for professionals by Nomic Labs](http://www.correccionesweb.com.ar/hardhat-network/#mempool-behavior)
* [7. Deploying to a live network | Hardhat | Ethereum development environment for professionals by Nomic Labs](https://hardhat.org/tutorial/deploying-to-a-live-network.html)

## Flatten

* [[hardhat-flatten] Removing duplicated SPDX identifier · Issue #1050 · nomiclabs/hardhat](https://github.com/nomiclabs/hardhat/issues/1050)
  * [feat: flatten licenses flag by nachomazzara · Pull Request #1223 · nomiclabs/hardhat](https://github.com/nomiclabs/hardhat/pull/1223)


## Run a local testing blockchain node

``` bash
npx hardhat node
npx hardhat --network localhost test
```

[For hardhat-deploy, where do you put extra arguments to constructors? - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/102709/for-hardhat-deploy-where-do-you-put-extra-arguments-to-constructors)

## Tutorials

* [🎨 How to Create an NFT - Alchemy](https://docs.alchemy.com/alchemy/tutorials/how-to-create-an-nft)
  * [wiki.software.List.OpenZeppelin](wiki.software.List.OpenZeppelin)

## [wiki.software.list.Ethereum.Events](Ethereum/Events.md) While Testing

* [hardhat-tracer npm package](https://hardhat.org/plugins/hardhat-tracer.html)

``` javascript
module.exports = {
  networks: {
    react: {
      providerPriority: ["web3modal", "hardhat"],
      url: "http://localhost:3000"
    },
    hardhat: {
      // Required for real DNS record tests
      initialDate: "2019-03-15T14:06:45.000+13:00",
      saveDeployments: true,
      tags: ["test", "legacy", "use_root"],
    }
  }   
}
```
