---
title: Remote Development
description: 
published: true
date: 2020-11-06T17:16:47.980Z
tags: 
editor: undefined
dateCreated: 2020-11-06T16:48:05.757Z
---

# Remote Development

Us on the DentropyDaemon team want to make it easy for people to use the tools we are building, edit them, and build their own. We plan to do this by setting up a remote development environment people can use within their browser no having to download and install anything. We do not plan to use any saas (software as a service) which may require a subscription or something like that we plan to have everything self hosted, except for git( for now )

## Current Tooling

* Git
* Python
  * Jupyter Notebooks
* Keybase Daemon

## Possible Remote Development Tools

* [Jupyter Hub](https://github.com/jupyterhub/jupyterhub)
* [code-server](https://github.com/cdr/code-server)
* [Gitpod](https://www.gitpod.io/)
* [cloud9](https://github.com/ContinuumIO/cloud9)

## Problems to overcome

### 1. Authentication to use remote tooling.

Does everyone log in with a single set of credentials or do we create credentials for individual users. If there is one set of credentials we need to make sure people know what they can touch and what they can not touch. Giving all users root access to a server and not using SSH keys is a security nightmare.

### 2. Git authentication. 

If everyone logs into the server with the same set of credentials that means there is only one git user set up for all users to work with. I would not want to write code and commit it from a general account. We need to know who does what. I believe being able to spawn containers on mass would work nicely but the problem of copying git credentials into the container is relatively complicated but very doable. Having a tool for users to spawn online dev environments with their git credentials built in is another story.

### 3. Resource provisioning, backups, and exporting.

## Paul's Proposed Solution

When a user wants to use the remote development machine we provide them a Wireguard cert and a linux user account. There are only two ports publically open on the remote machine one for SSH and one for Wireguard. We require connect to the server using Wireguard then SSH into it. Once the user is SSHed into the server they have access to a custom CLI(Command Line Interface) tool I plan to write which will allow them to launch an Remote IDE mapped to whever the user currently is in the file system. This IDE can be jupyer or code-server. The CLI will provide the user the URL and any other credentials they may require so they can connect to said machine. Now the user can open their browser paste the link from the CLI and develop, test, and so forth to their hearts content.