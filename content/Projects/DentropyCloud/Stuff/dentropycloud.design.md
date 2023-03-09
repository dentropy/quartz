---
title: Dentropy Cloud Design
description: 
published: true
date: 2021-04-01T04:13:34.371Z
tags: 
editor: markdown
dateCreated: 2021-03-31T21:24:08.003Z
---

# Dentropy Cloud Design Document

## Problem Analysis

## Application Portability

Just use linux containers, sorry BSD.

## Storage

Linux containers have many options for storage. Docker supports on host storage while kubernetes requires network storage. 

[For mroe info click here](/dentropycloud/research/storage)

## Backup + Restore

One should be able to backup entire applications to a single file. With the Dentropy Cloud CLI they should be able to point it at the TAR ball, be asked questions about where to run, store, and route the application and have it work.

Right now there are two solutions for this, one for kubernetes and one for docker.

The docker solution involves stopping the container running the application then mounting anouther container with the volumes of the stopped continaer with an additional volume where the backup is stored in transit. This container then tar balls the entire volume. This backup method words with any type of docker volume. This process can be done in reverse, even on a different volume type or location, to get the data back.

For kubernetes just use [velero](https://velero.io/). Having scripts that automate setting up object storage and optionally tar ball the object storage are features worth adding.

[For more info click here](/dentropycloud/research/backups)

## DNS + Dynamic IP

* Public DNS Reccomendations
  * [FreeDNS](https://freedns.afraid.org/)
  * Cloudflare
  * [Cloudflare ](https://www.cloudflare.com/)
* Private DNS Reccomendations
  * [AdGuard — World's most advanced adblocker!](https://adguard.com/en/welcome.html)
  * [Pi-hole – Network-wide protection](https://pi-hole.net/)

[For more info click here](/dentropycloud/research/dns)

## TLS Certificate Management

* For Docker there are two options
  * [Nginx Proxy Manager](https://nginxproxymanager.com/) is the easiest to use though it does not have an API to automate DNS configuration
  * [Traefik with Let's Encrypt](https://doc.traefik.io/traefik/v1.7/user-guide/docker-and-lets-encrypt/) allows for stateless DNS configuration within each container itself using labels.
* For Kubernetes use [cert-manager](https://cert-manager.io/)

[For more info click here](/dentropycloud/research/tls-certificate-management)

## Security

TODO

## Scalability

Wrote a version that uses Kubernetes

## Multiple Hosts

Wrote a version that uses Kubernetes

## Redundancy / Availability

Wrote a version that uses Kubernetes