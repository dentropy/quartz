---
id: sFxs0cpC4FXehW64ra1XB
title: Dentropy Cloud TLS Certificate Management Research
desc: ''
updated: 1632497608617
created: 1628474425407
description: null
published: true
date: '2021-04-01T03:52:08.507Z'
editor: markdown
dateCreated: '2021-04-01T03:52:08.507Z'
---

# Dentropy Cloud TLS Certificate Management Research

* Multiplatform
  * [Quick Start - Traefik](https://doc.traefik.io/traefik/getting-started/quick-start/)
* Docker
  * [SWAG setup - LinuxServer.io](https://docs.linuxserver.io/general/swag)
  * [nginx-proxy/docker-letsencrypt-nginx-proxy-companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion)
  * [Nginx Proxy Manager](https://nginxproxymanager.com/)
* Kubernetes
  * [cert-manager](https://cert-manager.io/)

## TLS Certificate Management

* For Docker there are two options
  * [Nginx Proxy Manager](https://nginxproxymanager.com/) is the easiest to use though it does not have an API to automate DNS configuration
  * [Traefik with Let's Encrypt](https://doc.traefik.io/traefik/v1.7/user-guide/docker-and-lets-encrypt/) allows for stateless DNS configuration within each container itself using labels.
* For Kubernetes use [cert-manager](https://cert-manager.io/)

[For more info click here](/dentropycloud/research/tls-certificate-management)
