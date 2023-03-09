---
id: peZ9ut2P8zHHmulVUUsB6
title: Unit Testing
desc: ''
updated: 1632955405119
created: 1632954184849
---

## Research

* [What is Unit Testing? Why YOU Should Learn It + Easy to Understand Examples - YouTube](https://www.youtube.com/watch?v=3kzHmaeozDI)
  * Unix Philosophy
    * Applications need to be able to be made modular so that they can be tested
* [Write awesome tests by Jeroen Mols - YouTube](https://www.youtube.com/watch?v=F8Gc8Nwf0yk)
  * Why do we write tests
    * Proof of workignm code
    * Safeguard that code keeps on working
    * Documentation
    * Enables refactoring
    * Release faster
    * Easiest for of testing
    * TO RUN THEM
  * Tests are production code
  * Requirements
    * CI
  * Rules
    1. Run really fast
      * Safety net against regression
      * Detect bugs early and cheaply
      * Rapid feedback loop is required
      * Run tests on every change
    2. Small and Focussed
      * Only a few lines of code
      * Clear structure: Assert / Act / Arrange
      * Only one failing test for each bug
      * Test name indicates the problem
    3. 100% Reliable
      * Drop everything to fix failure
      * Reason must be obvious
      * Failures should be rare
      * Correlation with modified code
      * "Magical rerun" drives developers mad
      * Lose of trust in safety net
    * Don't trust the tests you write in the first place, why you write test (meme)
    * 100% App Coverage
      * Does not mean the app is bug free
      * UI Inconsistencies
      * Interaction between classes
      * Interaction with external services
      * DOES NOT MEAN ANYTHING
      * Not even a good idea
      * Just a tool to gamify your work
    * TDD(Test Driven Development)
      * Write tests before you write your code
      * Does not matter if you do this or not but tests before code has some advantages
      * Bare minimum code to fail or pass
      * Pick up work with a failing test
    * D for TDD
      * Development
      * Design
      * Divide and conquer
      * DOcumentation
      * Devops
      * Determination
      * Dream
    * Tests help sustain development rather rather than having code mania slowing down development 
    * You have to maintain the tests with the feature
    * https://youtu.be/F8Gc8Nwf0yk?t=1556
