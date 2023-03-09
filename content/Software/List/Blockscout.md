---
id: nqgTuqUcFUnZCliq6j9g4
title: Blockscout
desc: ''
updated: 1634573423970
created: 1631815995765
---


## Error from docker container

* ["Missing trie node" & "required historical state unavailable" in logs · Issue #2219 · blockscout/blockscout](https://github.com/blockscout/blockscout/issues/2219)
* [Missing trie node error from 0x00... account tx's [geth/clique] · Issue #1593 · blockscout/blockscout](https://github.com/blockscout/blockscout/issues/1593)
* [Browser is known after startup in the same error · Issue #4176 · blockscout/blockscout](https://github.com/blockscout/blockscout/issues/4176)

## docker

[Unable to build Dockerfile · Issue #4023 · blockscout/blockscout · GitHub](https://github.com/blockscout/blockscout/issues/4023)

``` bash
docker build --file docker/Dockerfile .
```

* Repos
  * [GitHub - ulamlabs/blockscout-docker: Blockscout Docker image](https://github.com/ulamlabs/blockscout-docker)
    * [ulamlabs's Profile | Docker Hub](https://hub.docker.com/u/ulamlabs)
* [GitHub - xJonathanLEI/docker-blockscout: GitHub Actions workflow for building Blockscout Docker images](https://github.com/xJonathanLEI/docker-blockscout)
* [GitHub - SurfingNerd/blockscout-docker-compose: A docker-compose ready setup for blockscout to spin up a new instance fast.](https://github.com/SurfingNerd/blockscout-docker-compose)
* 
## [BlockScout Requirements](https://docs.blockscout.com/for-developers/information-and-settings/requirements)

* erlang
  * [Install Latest Erlang on Ubuntu 20.04 | 18.04 LTS | ComputingForGeeks](https://computingforgeeks.com/how-to-install-latest-erlang-on-ubuntu-linux/)
  * ```
  wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
  echo "deb https://packages.erlang-solutions.com/ubuntu focal contrib" | sudo tee /etc/apt/sources.list.d/rabbitmq.list
  sudo apt update
  sudo apt install erlang
  erl
  ```
* Rust
  * [Install Rust - Rust Programming Language](https://www.rust-lang.org/tools/install)
  * `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

``` bash
sudo apt-get install -y elixir postgresql automake libtool  inotify-tools make g++ cargo libgmp3-dev
```

## Scratchpad

``` bash
export DATABASE_URL=postgresql://user:password@localhost:5432/blockscout
export ETHEREUM_JSONRPC_VARIANT=ganache
export ETHEREUM_JSONRPC_HTTP_URL=http://localhost:8545
export COIN=SWMIO
make start

mix do deps.get, local.rebar --force, deps.compile, compile
```


## Troubleshooting

[(Mix) Could not compile dependency :keccakf1600 · Issue #2447 · blockscout/blockscout · GitHub](https://github.com/blockscout/blockscout/issues/2447)
[(Mix) Could not compile dependency :keccakf1600 · Issue #604 · blockscout/blockscout · GitHub](https://github.com/blockscout/blockscout/issues/604)

``` bash
rm -rf _build/ deps/
git checkout v3.3.2-beta
mix do deps.get, local.rebar --force, deps.compile, compile
```

``` bash
cd deps
git clone https://github.com/ayrat555/ex_keccak
rm -rf keccakf1600
mv ex_keccak keccakf1600
```
