---
id: 8nCAwY7uOte2NdnPAj9BQ
title: Plutus
desc: ''
updated: 1633558065083
created: 1633556034220
---

[playground.plutus.iohkdev.io/](https://playground.plutus.iohkdev.io/)

* [Cardano Plutus Tutorial #1: Hello World | Plutus Playground Smart Contracts + Haskell Explanation - YouTube](https://www.youtube.com/watch?v=HtjOWAEzWL8)
  * Looks at the obscure haskel/plutus syntax for variables
  * Looks through the plutus and compare it with the haskel code it compiles
* [Cardano Plutus Smart Contract Tutorial #2 | Endpoints and Validator Script Blockchain Development - YouTube](https://www.youtube.com/watch?v=Sq4q-86LRis)
  * Validator Script
    * The code that is used to lock/unlock a transaction (produced by the contract endpoint) on the cardano blockchain
    1. Datum - data the person locking ADA sends
    2. Redeemer - data the person trying to unlock the ADA sends
    3. Validator contract - information of the transaction
  * `newtype` = new object
  * Plutus Core vs. Plutus TX
    * Plusus TX - The libraries and compile for compiling Haskell into plutus core to form the on-chain part of the contract application
    * Plutus Core - The programming language in which scripts on the Cardano blockchain are written
  * Contract endpoints are like Solidity functions, views, or public variables
  * The contracts need to manage UTxO's as well
* [Courses.Plutus Pioneers](../../../MyDendronExistence/Courses/Plutus%20Pioneers.md)
