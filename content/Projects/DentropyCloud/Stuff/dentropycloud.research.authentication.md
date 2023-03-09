---
title: Dentropy Cloud Authentication
description: 
published: true
date: 2021-07-18T15:00:08.823Z
tags: todo
editor: markdown
dateCreated: 2021-04-01T03:21:57.769Z
---

# Dentropy Cloud Authentication

There are multiple goals for the authentication portion of Dentropy Cloud. The first goal of the authentication is to have a single log on for as many apps as reasonable. The second goal is to have SSO(single sign on) proxies in front of apps requireing authentication allowing even unsecured apps to be secured and publically available on the internet. The third goal is to have permissions, some users only need access to one or two apps while others need access to most apps and the server only needs access to all apps.

* Options incoude
  * [Authelia](https://www.authelia.com/docs/getting-started.html)
  * [Dex](https://dexidp.io/docs/getting-started/)
  * [Keycloack ](https://www.google.com/search?client=firefox-b-d&q=Keycloack+Docker+Docs)
    * [KeyCloak middleware proxy](https://geek-cookbook.funkypenguin.co.nz/ha-docker-swarm/traefik-forward-auth/keycloak/)
  * [goauthentik](https://goauthentik.io/docs/installation/docker-compose)

# Network Routing with Auth
Traefik + Keycloak
------------------

*   [GitHub - asatrya/keycloak-traefik-tutorial: Tutorial how to use Keycloak for authentication and Traefik for API gateway in Microservices architecture](https://github.com/asatrya/keycloak-traefik-tutorial)
    *   Requires a gateway container for every service
    *   Auth is complicated to setup, many steps, maybe can be simpler
    *   Does not use docker labels
    *   For traefik v1 does not include instructions to change hostname
*   [Keycloak - Guide - Keycloak on Docker](https://www.keycloak.org/getting-started/getting-started-docker)
    *   Official Keycloak documentation, does not include traefik
    *   HTTPS problems running on remote host
*   [KeyCloak - Funky Penguin's Geek Cookbook](https://geek-cookbook.funkypenguin.co.nz/ha-docker-swarm/traefik-forward-auth/keycloak/)
    *   [Start - Funky Penguin's Geek Cookbook](https://geek-cookbook.funkypenguin.co.nz/ha-docker-swarm/traefik-forward-auth/)
    *   Too Vauge to actually use
*   [docker-media-stack](#root/5jZXv85ROHUf/nWnCFYtTJa52/de3eRAqBVWY0)
    *   Have no idea how to run the same thing

I am going to have to hire a tutor on that tutoring website. What am I going to ask them?

TODO:

Create my own git repo with branches of different things I tried.
Write a blog post of some sort explaining what I know about keycloak, traefik and docker.

Building a homelab, want to configure keycloak as a middleware proxy using keycloak for authentication.

I am looking to learn more about traefik and keycloak with respects to docker. I want to run a series of applications such on my homelab behind a traefik + keycloak proxy. 


## Unorganized Links

* [kubernetes-docs/README.md at main · SirSirae/kubernetes-docs](https://github.com/SirSirae/kubernetes-docs/blob/main/README.md#the-last-piece-to-the-puzzle-an-sso)
* [Lightweight SSO / authentication options : selfhosted](https://old.reddit.com/r/selfhosted/comments/ktq8t9/lightweight_sso_authentication_options/)
