---
title: Dentropy Cloud Project Plan
description: 
published: true
date: 2021-08-08T23:45:49.399Z
tags: 
editor: markdown
dateCreated: 2021-01-18T03:29:20.056Z
---

# Dentropy Cloud Project Plan


## Project Goals

* Dentropy Daemon allows individuals to gather all their metadata into a single querriable API that they control AND run their own applications.


## Technical Problems

* Choice of container orchestration software
* Storage
	* Applications should support multiple stroage backends including NFS, CIFS, and the host itself.
* Backup and Restore
  * Labeling of storage backups
* VPN
  * Internal VPN
  * External VPS
* The system should be able to route to other applications not using docker on the network
* Require VPN Connections for Apps
* DNS
  * Internal
  * External
  * Dynamic

## User Flow

**For MVP**

* User gets VPS
* User forwards Domain Name to VPS
* User SSH into VPS
* User install ddaemon
  * ddaemon asks for
    * DNS
    * Storage Options
* User log into ddaemon web gui
* User can install apps
* Wireguard into network and configure application at APPNAME.local
* Once application is configured go to ddaemon web UI and and open it to the public inerwebs
* Apps are available at APPNAME.DOMAIN_NAME.TLD

**Ideally**

* User goes to dentropydaemon.io and signs up for a subscription
* As part of the subscription process the user can buy a domain name or use a subdomain on dentropydaemon.io
* Once user has account they log into portal.dentropydaemon.io where they can install apps via gui, each app can be completely configued from the portal.dentropydaemon.io site without having to connect to the internal network.

## Sprints TODO

### Step 1, An App Store For Cloud

Installing applications in the cloud should be as easy as installing apps from an app store. The key difference here is that all meta data generates will be accessable to them. Censorship is a radically different problem compared to today's social media platforms. A User can be as private or public as they like.

- *Ordered By Priority*
- Simple modules to add
  - Stuff from [linuxserver.io](https://fleet.linuxserver.io/)
  - Emby
  - Calibre and Calibre Web
  - Wallabag
  - Booksonic
  - Torrent Client
  - NFS/Samba server
- Public Facing Modules To Add
  - Matrix Serer with Element front end
  - Pleroma
  - Mastadon
  - Ghost blogging platform
- OpenVPN / Wireguard router for exit traffic
- Nginx and wireguard manager scripts with front end on any raw server 
- LDAP module with UI and connect as many modules to it as possible
- Dynamic Interactive Install Script
- RClone backup and restore functionality with Arweave support
- Bind9 DNS server with Webmin to function as nameserver for subdomains users will use username.dentropydaemon.io
- Build and maintain our own container registry possibly using a
  decentralized protocol
- Kubernetes Migration
  - Package everything into helm charts
- Be able to get a DentropyCloud instance via smart contract

### Step 2, Integration of ones self with their Daemon

Now the infastructure for apps in the cloud exists the next step is to gather and build API's to help one generate their algorithmic reflection and modulates ones existance to the outside world.

- [Activiety Watch](https://activitywatch.net/) project and add a container to DentropyCloud to sync everything
- Automate setting up something like [this](https://beepb00p.xyz/myinfra.html)
- Automation of tasks
  - Use PyAutoGUI on desktop for automation, remote management, and help troubleshooting
  - Add functionality of tasker android application for automation on android
- Capture keystrokes and mouse movements on desktop
- Have simple to use voice changer and anonymity video changer
- Network metadata such as Mac Addresses / IP addresses nearby, wifi network and so forth
- Optionally capture eye movements via webcam on desktop
- Optionally record all video at all times
- Optionally record all audio at all times
  - Feed through speech to Text and put in database
  - Have UI to feed data through simple image classification
    algorithms
- Have API to allow one to easily query and do custom analytics
- Voice assistant integration, [mycroft.ai](https://mycroft.ai/)

### Step 3, Finish Tim May's Blacknet

- Generalized Messaging Schema API
- Bootstrap ones daemon using blockchain and a decentralized name system
- Launch a DAO to federate daemons
  - Research the best arbitration systems
- Create gitcoin with blackjack and hookers