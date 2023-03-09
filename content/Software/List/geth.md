---
id: FJo4Jn7GPLYfhhdgt1i3K
title: geth
desc: ''
updated: 1631284306817
created: 1630595504624
---

## TODO Links

* [AugurProject/augur: Augur - Prediction Market Protocol and Client](https://github.com/AugurProject/augur#docker-images-available)
* [go ethereum - Geth can't connected to via Websocket - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/11527/geth-cant-connected-to-via-websocket)
* [go ethereum - 405 Method Not Allowed with websocket geth RPC - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/93968/405-method-not-allowed-with-websocket-geth-rpc)

## Geth Documentation

* [Getting Started with Geth | Go Ethereum](https://geth.ethereum.org/docs/getting-started)
* [go ethereum - What is Geth's "fast" sync, and why is it faster? - Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/1161/what-is-geths-fast-sync-and-why-is-it-faster)
* [docker - What is the difference between these scripts for "geth attach"? - Stack Overflow](https://stackoverflow.com/questions/59942682/what-is-the-difference-between-these-scripts-for-geth-attach)
* [Unable to attach to the local running geth node · Issue #14536 · ethereum/go-ethereum](https://github.com/ethereum/go-ethereum/issues/14536)

## Geth Full Node

**Testing**

* [miohtama/ethereum-blockchain-docker-compose: Docker composes for various Ethereum blockchains: Mainnet, Polygon, Binance Smart Chain](https://github.com/miohtama/ethereum-blockchain-docker-compose)


**To Review**

* [islishude/geth-docker: go-ethereum(geth) configs for docker-compose and kubernetes](https://github.com/islishude/geth-docker)

**Tutorials providing context**

* [2019: Ethereum Full Node Setup (fast sync) | by Matt Swezey | Medium](https://mswezey.medium.com/2019ethereumfullnode-ba6e05ebf363)
  * NO DOCKER
* [Crypto Market Pool - Getting started with Geth to run an Ethereum node](https://cryptomarketpool.com/getting-started-with-geth-to-run-an-ethereum-node/)

**Has issues**

* [How to run GETH from a Docker container](https://www.freecodecamp.org/news/how-to-run-geth-from-a-docker-container-b6d30620ca74/)
  * Does not use docker-compose, covers the basics well though
* [dappnode/DAppNodePackage-geth: Geth DAppNode package](https://github.com/dappnode/dappnodepackage-geth)
  * Does not open ports

## Geth Private Network

**Works**

* [makevoid/geth-priv-pub-net: Docker-compose based Ethereum Network set up as a private network with nodes connecting to each other via the public internet proxied via nginx.](https://github.com/makevoid/geth-priv-pub-net)
  * [appliedblockchain/geth-priv-pub-net: Docker-compose based Ethereum Network set up as a private network with nodes connecting to each other via the public internet proxied via nginx.](https://github.com/appliedblockchain/geth-priv-pub-net)

**To Research**

* [SteveKeller/geth-cluster: Private Ethereum Blockchain - dockerized](https://github.com/SteveKeller/geth-cluster)

**To Review Later**

* [geth-truffle-docker/docker-compose.yml at master · gregbkr/geth-truffle-docker](https://github.com/gregbkr/geth-truffle-docker/blob/master/docker-compose.yml)
  * No Graphql
* [pragmaticcoders/docker-geth-dev: Docker container running private geth node for testing apps using ethereum via RPC client](https://github.com/pragmaticcoders/docker-geth-dev)
  * 5 years Old

**Missing Features, Never Tested**

* [gakonst/GethCluster: Ethereum node cluster deployment script for bootstrapping private test networks](https://github.com/gakonst/GethCluster)
  * No containers
* [cpurta/geth-devnet: Simple geth node running a private development network](https://github.com/cpurta/geth-devnet)
  * No docker-compose
  * 4 years Old
* [hiddentao/geth-private: Quickly setup a local, private Ethereum blockchain.](https://github.com/hiddentao/geth-private)
  * Description: npm package for setting up geth nodes
  * No containers
* [andricDu/geth-docker: Dockerized deployment of a private Ethereum blockchain. For demo use only.](https://github.com/andricDu/geth-docker)
  * No docker-compose

**Doesn't work**

* [cpurta/ethereum-docker-network: Private ethereum network running in docker](https://github.com/cpurta/ethereum-docker-network)
  * `ERROR: Service 'bootstrap' failed to build: manifest for ethereum/client-go:development not found: manifest unknown: manifest unknown`
* [changwu-tw/docker-geth-testnet: private testnet](https://github.com/changwu-tw/docker-geth-testnet)
  * `Makefile:16: recipe for target 'geth' failed`
* [Building private Ethereum networks with Docker Compose | Capgemini Software Engineering](https://capgemini.github.io/blockchain/ethereum-docker-compose/)
  * `ERROR: for ethereum-docker_geth_1  a bytes-like object is required, not 'str'`
* [ATNIO/poa-deploy: Deploy POA blockchain rapidly using Docker.](https://github.com/ATNIO/poa-deploy)
  * Get error when running docker-compose
  * 3 years old and no longer maintained
* [ethersphere/eth-utils: ethereum utilities, dev tools, scripts, etc](https://github.com/ethersphere/eth-utils)
  * 6 Years Old, though still mentioned in the offical documetnation (Link below)
  * [Private Networks | Go Ethereum](https://geth.ethereum.org/docs/interface/private-network)
* [ulamlabs/geth-poa-testnet: Docker image for Ethereum testnet using PoA consesus protocol](https://github.com/ulamlabs/geth-poa-testnet)
  * 16 Months old
  * Requires setting environment variables, might work but I couldn't
  * [ulamlabs/eth-poa-testnet-example: Example Ethereum testnet with Clique PoA consensus protocol](https://github.com/ulamlabs/eth-poa-testnet-example)
* [jenhao-thesis/ethereum-docker-poa](https://github.com/jenhao-thesis/ethereum-docker-poa)
  * 3 Months old
  * No documenation
* [Create your own Ethereum private blockchain with Docker | by Scott H Rogers | Medium](https://medium.com/@scotthrogers/create-your-own-ethereum-private-blockchain-in-30min-with-docker-e422666343cf)
  * Git repo does not exist anymore
