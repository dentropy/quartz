---
id: bjduetIZeWrP9pQye7Fpv
title: Ceramic.Network
desc: ''
updated: 1639672966508
created: 1638756340637
---

## TODO

* [Overview - Ceramic Developers](https://developers.ceramic.network/tools/glaze/overview/)
* [HTTP Client - Ceramic Developers](https://developers.ceramic.network/build/javascript/http/)
* [JS Key DID Provider Ed25519 - Ceramic Developers](https://developers.ceramic.network/authentication/key-did/provider/#installation)

## Questions

* How do I resolve DID's in Javascript
* What is a Schema?
* How do I encrypt stuff on the system
* How do I backup or retrieve a DID Identity
  * Seems like it does not get backed up but you use somehting like 3Box with multiple keys.
  * NFT Identity is on the way, ENS is NFT so this works nicely.
* Code Example working with Ethereum Wallet
* ELI5 the Blockchain DID, with code examples
* ELI5 the NFT DID, with code examples
* IDx / Ceramic Browser
* How to do social proofs for facebook, linkedin, discord, and other communities

## Next Steps

* Use Ethers as Provider
* ELI5 Schema IDX, ELI5 definition IDX
* IDX Definition
* Create a DID
* Put data on DID
* Create Schema for DID
* Sign Proof
* Put data on Schema
* PKI Tree diagram
* [Overview - Ceramic Developers](https://developers.ceramic.network/tools/glaze/overview/)
  * Self.ID
  * Glaze

## Interesting Projects

* [GitHub - ceramicnetwork/awesome: A list of awesome projects built on Ceramic](https://github.com/ceramicnetwork/awesome)


## To Research

* [Support a new blockchain - Ceramic Developers](https://developers.ceramic.network/reference/javascript/blockchain/#currently-supported-blockchains)

* [Ceramic Network ](https://ceramic.network/)
  * The prime candidate for cross blockchain DNS/Identity
  * The network allows for sharing and manipulation of data based on identities
    * [What is Ceramic?](https://blog.ceramic.network/what-is-ceramic/)
        * Ceramic basically allows for decentralized streams (blockchain git trees) to be subscribed to and modified. Each node in the network can subscribe to whatever streams they desire. What makes Ceramic interesting is that it can provide an DID(Decentralized Identity) that independent of any blockchain protocol but also integrates any desirable blockchain technology.
        * Quotes
            * "Ceramic is a public, permissionless, open source protocol that provides computation, state transformations, and consensus for all types of data structures stored on the decentralized web. Ceramic\'s stream processing enables developers to build with dynamic information without trusted database servers to create powerful, secure, trustless, censorship-resistant applications."
            * "DIDs provide a way to go from a globally-unique, platform-agnostic string identifier to a DID document containing public keys for signature verification and encryption."
            * "NFT DID Method (coming soon): A DID method for any NFT on any blockchain."
            * "Persistence connectors: Ceramic nodes can optionally utilize an additional durable storage backend for backing up commits for streams it is pinning. This can be any of the persistence networks mentioned above, including Filecoin, Arweave, Sia, etc. (coming soon)."
  * Features
    * Ceramic allows for anyone to create a ID that can be updated
    * Reverse lookup functionality for Ethereum and other blockchain addresses
  * Questions
    * For these encrypted file stores that can be access with multiple blockchain accounts how does the client get the private key?
        * [Support a new blockchain - Ceramic Developers](https://developers.ceramic.network/reference/javascript/blockchain/)
            * Quote, "3ID Connect (using `3id-did-provider`) creates `3id` (Ceramic flavour of DID) private keys based on an externally-provided entropy. It could be provided by a blockchain account by merely signing a well-known message. From a user\'s standpoint, it is authentication *into* Ceramic through her blockchain account, be it on Ethereum, Filecoin, EOS, Cosmos or something else. Same signature (=same entropy) generates same Ceramic DID."
    * How do they manage permissions.
        * When you get a DID it is based on your public key so only you can change its contents
    * How does one get an alias from a global name space.
        * There does not seem to be a name service for IDX/Ceramic Network. Applications are expected to provide a DID that can then be recursively queried to get any additional information.
    * Who is hosting the network infrastructure and can you run your own node?
        * The ceramic.network organization seems to be running the public infastructure. One can run their own full node on the network and then have your own application connect to it. [Full Node Documentation](https://developers.ceramic.network/build/javascript/installation/#js-core-client)
    * What are some example applications using Ceramic, IDx and 3Box.
        * [GitHub - ceramicstudio/self.id: Developer suite for decentralized user identity](https://github.com/ceramicstudio/self.id/)
        * [The Convo Space](https://theconvo.space/)
            * A API for messaging threads just like twitter
            * [Have conversations linked to NFT's](https://docs.theconvo.space/integrate/Convo-Extensions/convo-on-decentraland), POC included
            * [Bridges to BrightID](https://docs.theconvo.space/integrate/Convo-Extensions/brightid)
        * [Boardroom.info](https://www.boardroom.info/)
            * [Boardroom is bringing context to Web3 governance](https://blog.ceramic.network/boardroom-is-bringing-context-to-web3-governance/)
    * How does this relate to NFT's.

        * <https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-94/CIP-94.md>

            * Quotes

                * "The NFT DID Method converts any non-fungible
                        token on any blockchain into a decentralized
                        identifier where the owner of the NFT is the
                        controller of the DID."

        * Links

            * [GitHub -
                    ceramicnetwork/nft-did-resolver](https://github.com/ceramicnetwork/nft-did-resolver)

            * [CIP/CIP-94.md at main · ceramicnetwork/CIP · GitHub](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-94/CIP-94.md)

    * How does decentralized file encryption work?
        * How can one share an encrypted file?
            * TODO
            * <https://blog.ceramic.network/standards-for-encrypted-and-mutable-data-on-ipfs/>
    * How does the network provide up to date DID information? Is there a lag between when a DID is updated?
* TODO
  * <https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-20/CIP-20.md>
  * "Sync data with 3Box (experimental)" is built into Metamask now
  * [\@ceramicnetwork/streamid \| Ceramic Typescript Implementation](https://developers.ceramic.network/reference/typescript/modules/_ceramicnetwork_streamid.md)
  * [ceramicnetwork/js-did: A simple interface to interact with DIDs that conform to the DID-provider interface.](https://github.com/ceramicnetwork/js-did)
  * [IDX SDK - IDX Developers](https://developers.idx.xyz/reference/idx/#constructor)
  * [Choose a client - Ceramic Developers](https://developers.ceramic.network/build/javascript/installation/)

* Brainstorming

  * Standard Blockchain identify system

  * Store user settings on decentralized protocol rather than
        cookies / server

  * IDx Keybase style social proofs

  * Every NFT acts as Sovereign identity in and of itself that can
        be commented on or used to manipulate certain data

  * Permanently attach a trophy to a ENS Name?

  * ENS is a NFT. Sign NFT's with a NFT.

* Sign NFT's with your IDx Identity. Connect many different NFT's
    running on different blockchain's to a single identity.

* Showcase NFT connection from multiple blockchains

* Gamer Homepage just like Steam has but stored on Ceramic.network

* Skill Attestation using Ceramic.network, basically trophy\'s.
