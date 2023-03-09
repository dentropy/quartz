---
title: Dentropy Cloud API Design
description: 
published: true
date: 2021-04-01T03:31:59.019Z
tags: 
editor: markdown
dateCreated: 2021-04-01T03:31:59.019Z
---

Dentropy Cloud API Design

* Infrastructure API

  * Get all app metadata

    * Installed / Not Installed

    * On / Off

  * Start / Stop / Restart App

    * Restart everything

  * Backups

    * Backup App

    * Backup EVERYTHING to tar file

  * Routing

    * Open app to public internet / Route hostname to App / Proxy
            > Configs

    * Close app to public internet

    * Get HTTPS certificate

    * Firewall

  * DNS

    * Get Server public IP address

    * Get DNS entry

    * Set DNS entry

    * Create Subdomain

  * Server Specs

    * Number Cores

    * CPU Name and Specs

    * Core Load

    * Amount of Ram

    * Ram Usage

* REST API

  * Everything from Infrastructure API but with User Authentication

* Front end API

  * 
