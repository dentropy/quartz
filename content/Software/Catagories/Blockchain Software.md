## Blockchains themselves

* Ethereum Based
  * [wiki.software.List.Ethereum Classic](../List/Ethereum%20Classic.md)
  * [swarmio.Swarmio Research.BFT Protocols.xDai](../../../MyDendronExistence/swarmio/Swarmio%20Research/BFT%20Protocols/xDai.md)
  * [swarmio.Swarmio Research.BFT Protocols.Binance Smart Chain(BNB)](Binance%20Smart%20Chain(BNB))
* [wiki.software.List.Cosmos](../List/Cosmos.md)
* [wiki.software.List.Algorand](../List/Algorand.md)
* Protocols
  * [swarmio.Swarmio Research.Swarmio Product Research.Chainlink](../../../MyDendronExistence/swarmio/Swarmio%20Research/Swarmio%20Product%20Research/Chainlink.md)
* Websites
  * [DeFi Pulse - The Decentralized Finance Leaderboard](https://defipulse.com/)
  * [DefiLlama - DeFi Dashboard](https://defillama.com/home)
* Dexes
  * [ParaSwap - Solving Liquidity for DeFi](https://paraswap.io/#/?network=ethereum)
## Other stuff

* [Devcash | Bounty Platform](https://xdai.devcash.dev/bountyplatform)
* [BitTorrent Token (BTT) | Tokenizing Decentralized File Sharing](https://www.bittorrent.com/token/btt/)
* [Pocket Network](https://www.pokt.network/)
* [Unocoin - Crypto Exchange for India](https://www.unocoin.com/in)



* [](dentropydaemon-wiki/Software/Catagories/Research%7Cwiki.software.List.TheGraph#research)
* [NFT 404: There's a Glaring Problem with Non-Fungible Tokens - Arweave.news](https://arweave.news/nft-404/)
* [ERC721-based NFT Transfer Example - TokenBridge](https://docs.tokenbridge.net/eth-xdai-amb-bridge/nft-omnibridge-extension/nft-transfer-example)
* [The top 5 enterprise blockchain platforms you need to know about - HFS Research](https://www.hfsresearch.com/blockchain/top-5-blockchain-platforms_031618/)
  * [Relationships.People.Schwarze Katze](../../../MyDendronExistence/Relationships/People/Schwarze%20Katze.md)
* [Ethernaut](https://ethernaut.openzeppelin.com/)
* [Canada eCoin](https://canadaecoin.site/)
* [DApps and Blockchains in the Cosmos Ecosystem | by Gisele Schout | Stakin | Medium](https://medium.com/stakin/dapps-and-blockchains-built-on-the-cosmos-ecosystem-31731494570b)
* [Gnosis Developers](https://gnosis.io/developers/)
  * [Gelato - Automated smart contract executions on Ethereum](https://www.gelato.network/)
  * [Alice: the future of impact finance](https://alice.si/)
  * [dOrg | Full stack Web3 development collective](https://www.dorg.tech/#/)
* Storage
  * [Swarm](https://www.ethswarm.org/)
* DEX
  * [The first decentralized cross chain atomic swap DEX with locally created orderbooks | by jl777 | Medium](https://medium.com/@jameslee777/the-first-decentralized-cross-chain-atomic-swap-dex-with-locally-created-orderbooks-a71a4e976e3f)
  * [Home | Serum](https://projectserum.com/#/)
* [Theta Token](https://www.thetatoken.org/#!)
* [Allnodes - Masternodes, Full Nodes, Staking Services](https://www.allnodes.com/)
  * [Best Masternode Hosting Provider — 2020 Community Awards](https://masternode.buzz/best-masternode-hosting-provider-2020-community-awards/)
* [ulamlabs's Profile | Docker Hub](https://hub.docker.com/u/ulamlabs)
  * [OpenNFT/contracts at main · ulamlabs/OpenNFT · GitHub](https://github.com/ulamlabs/OpenNFT/tree/main/contracts)

## Honeypots

I just conducted a stupid yet interesting experiment. I found that there was a cryptokitty inside the wallet of a default seedphrase I am using for my development blockchain. I sent some Ethereum to the address of the wallet so I could send the cryptokitty back to myself. Immediately as I sent the Ethereum in someone else performed another transaction claiming my ethereum for themselves. Lesson learned, this also highlights a design flaw with in Ethereum. Since one can not pay for other user transactions publicly available private keys act as, to use a hacking phrase, Honeypot[1]. Another interesting point is that the honeypot operator paid about 8x the gas price to get the transaction through. The current gas price is about 130 GWei the honey pot operator paid over 900 GWei.

My Tx In: https://etherscan.io/tx/0xe2ec5ae00f4c01391070f4b4d1414ab8b548ab3160d73ad7febf7bd5a9c71003
Their Tx Out: [Ethereum Transaction Hash (Txhash) Details | Etherscan](https://etherscan.io/tx/0x9cbbeb920dc8969d98a196efddf93f2f88c8a4420bb3247e274e62e2842d106f)
1. https://en.wikipedia.org/wiki/Honeypot_(computing)
