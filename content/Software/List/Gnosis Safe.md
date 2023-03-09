#DAO #blockchain [Solidity](Solidity.md) [Snapshot](../../Wiki/Research/DAOs/DAO%20Protocols%20and%20Platforms/Snapshot.md)

[Supported networks - Developer Docs](https://docs.gnosis-safe.io/contracts/gnosis-safe-on-other-evm-based-networks)

## Questions

* [How can I add/remove an owner to gnosis-safe wallet from solidity smart contract? - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/121798/how-can-i-add-remove-an-owner-to-gnosis-safe-wallet-from-solidity-smart-contract)
	* If you want smart contracts or other gnosis safe's to be able to count as a signature in the safe one will need to extend the gnosis safe with a module
	* The ability to have another smart contract count in the decision process complicates things quite a lot because gnosis safe checks for people agreeing with signatures rather than transactions done on chain to the contract
* Can you do off chain votes for token holders
	* Yes you can use [SafeSnap](SafeSnap.md)
* Support for [Arbitrum](Arbitrum.md)
	* [arbitrum.gnosis-safe.io](https://arbitrum.gnosis-safe.io/app/)
	* [Add support for Arbitrum · Issue #2306 · safe-global/safe-react](https://github.com/safe-global/safe-react/issues/2306)
* Important Links
	* [Verify Gnosis Safe tx: How can I generate the safeTxHash without “Read as Proxy”? - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/124535/verify-gnosis-safe-tx-how-can-i-generate-the-safetxhash-without-read-as-proxy)
	* [CIP/CIP-101.md at main · ceramicnetwork/CIP](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-101/CIP-101.md)
	* [5afe/safe-tasks: Hardhat task collection for the Safe contracts](https://github.com/5afe/safe-tasks)* [Verify Gnosis Safe tx: How can I generate the safeTxHash without “Read as Proxy”? - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/124535/verify-gnosis-safe-tx-how-can-i-generate-the-safetxhash-without-read-as-proxy)
	* [CIP/CIP-101.md at main · ceramicnetwork/CIP](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-101/CIP-101.md)
	* [5afe/safe-tasks: Hardhat task collection for the Safe contracts](https://github.com/5afe/safe-tasks)
## Modules
* Docs
	* [Modules - Developer Docs](https://docs.gnosis-safe.io/contracts/modules-1)
* Examples ready for productions
	* [gnosis/zodiac: A library for composable DAO tooling built on top of programmable accounts](https://github.com/gnosis/zodiac#modules)
* Example Code
	* [safe-global/safe-modules: A collection of modules that can be used with the Safe contract](https://github.com/safe-global/safe-modules)
