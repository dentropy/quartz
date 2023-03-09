---
id: sVu43JDBi1hu7mNzgin1Y
title: IDx
desc: ''
updated: 1639524272752
created: 1628707181732
---

## NOTICE

* Replaced by Glaze check [wiki.software.list.CeramicDOTNetwork](Ceramic.md)

## Getting started

[Quick Start - IDX Developers](https://developers.idx.xyz/build/quick-start/)

``` bash
npm install -g @ceramicnetwork/cli @ceramicstudio/idx-cli
ceramic daemon
# Open new tab
idx bootstrap
idx index:get did:key:z6Mkw1Mpfejq2R76AsQo2qJoAVaF6HH5nLDoHrKrsW5Wdnei basicProfile
```

* [DID - v2.2.0](https://ceramicnetwork.github.io/js-did/index.html)
* [How to build a simple notes app with IDX](https://blog.ceramic.network/how-to-build-a-simple-notes-app-with-idx/)

## Requirements

* gnome-keyring
* pacman -S gnome-keyring


## DID Identities

* List of Identity Providers
  * [Dependency APIs - IDX Developers](https://developers.idx.xyz/reference/dependency-apis/#didprovider)
* Simple DID Provider that works
  * [JS 3ID DID Provider - Ceramic Developers](https://developers.ceramic.network/authentication/3id-did/provider/#installation)

## Examples to get started with

* [ceramicstudio/idx-demo-app: Example Web app using IDX](https://github.com/ceramicstudio/idx-demo-app)
* [ceramicstudio/idx-assignment](https://github.com/ceramicstudio/idx-assignment)

## Links

* [Known Issues](https://www.notion.so/Known-Issues-16ae23c495f74b44af050555bc02d270)

## Projects that use IDx

* [idx-docs/ecosystem.md at main · ceramicstudio/idx-docs](https://github.com/ceramicstudio/idx-docs/blob/main/docs/learn/ecosystem.md)

## Realizations

* Looks like you need Typescript


* <https://idx.xyz/>

    * Quotes

        * "IDX is an identity protocol for open applications.
                It provides a
                decentralized [index](https://developers.idx.xyz/learn/overview/#index) which
                allows structured data to be associated to a
                decentralized identifier
                ([DID](https://developers.idx.xyz/learn/glossary/#did)).
                Data is defined
                by [definitions](https://developers.idx.xyz/learn/overview/#definition) and
                stored
                in [records](https://developers.idx.xyz/learn/overview/#record)."