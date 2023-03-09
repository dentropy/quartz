---
id: EWpWjC4nbH9PPGF0LMtwW
title: LDAP
desc: ''
updated: 1628474425418
created: 1628474425418
description: null
published: true
date: '2021-07-18T15:04:55.523Z'
editor: markdown
dateCreated: '2021-07-18T15:04:55.523Z'
---

# LDAP

*   Reddit Stuff
    *   [LDAP/AD in homelab? (Linux User Authentication) : homelab](https://old.reddit.com/r/homelab/comments/57um90/ldapad_in_homelab_linux_user_authentication/)
    *   [Lightweight and Simple LDAP Server for Homelab : homelab](https://old.reddit.com/r/homelab/comments/8j8j8f/lightweight_and_simple_ldap_server_for_homelab/)
    *   [docker-compose for LDAP,DNS,DHCP,TFTP,HTTP-filedrop,Guacamole, and more. For homelab setups. : selfhosted](https://old.reddit.com/r/selfhosted/comments/7ahlkp/dockercompose_for/)
    *   [You can now install 70+ self-hosted apps and services via HomelabOS with one command. (x-post r/homelab) : selfhosted](https://old.reddit.com/r/selfhosted/comments/fxg1lj/you_can_now_install_70_selfhosted_apps_and/)
*   Other Links
    *   [OpenLDAP - Homelab](https://jamesveitch.com/homelab/02.idam/01.openldap/)
    *   [Downloads - FreeIPA](https://www.freeipa.org/page/Downloads)
    *   [List of LDAP software - Wikipedia](https://en.wikipedia.org/wiki/List_of_LDAP_software#Server_software)
    *   [GitHub - osixia/docker-openldap: A docker image to run OpenLDAP 🐳](https://github.com/osixia/docker-openldap)
    *   [Docker OpenLDAP + phpldapadmin example · GitHub](https://gist.github.com/thomasdarimont/d22a616a74b45964106461efb948df9c)
    *   [GitHub - osixia/docker-openldap: A docker image to run OpenLDAP 🐳](https://github.com/osixia/docker-openldap)
    *   [OpenLDAP and phpLDAPadmin running in Docker containers | LostFocus](https://lostfocus.de/2018/03/openldap-and-phpldapadmin-running-in-docker-containers/)
    *   [Tutorial: Setup OpenLDAP and configure clients - YouTube](https://www.youtube.com/watch?v=p857CNi60LM)
    *   [docker-openldap/docker-compose.yml at master · osixia/docker-openldap · GitHub](https://github.com/osixia/docker-openldap/blob/master/example/docker-compose.yml)
*   2021-06-05
    *   [Keycloak - Homelab](https://jamesveitch.com/homelab/02.idam/02.keycloak/)
    *   [Can not run FreeIPA container because of Read-only file system. · Issue #266 · freeipa/freeipa-container · GitHub](https://github.com/freeipa/freeipa-container/issues/266)
    *   [\[docker-compose\] FreeIPA](https://computerz.solutions/docker-compose-freeipa/)
    *   [Getting started with my lab, is LDAP a bad idea? : homelab](https://old.reddit.com/r/homelab/comments/7hj6y4/getting_started_with_my_lab_is_ldap_a_bad_idea/)
*   2021-06-06
    *   [command-not-found.com – ldapmodify](https://command-not-found.com/ldapmodify)
    *   [networking - Docker-compose container using host DNS server - Stack Overflow](https://stackoverflow.com/questions/41717180/docker-compose-container-using-host-dns-server)
    *   [Server Administration Guide](https://www.keycloak.org/docs/6.0/server_admin/#_sssd)

    dn: uid=gitea,cn=sysaccounts,cn=etc,dc=czs,dc=local
    changetype: add
    objectclass: account
    objectclass: simplesecurityobject
    uid: gitea
    userPassword: TESTPASS123!
    passwordExpirationTime: 20380119031407Z
    nsIdleTimeout: 0

    ldapmodify -h localhost -p 389 -x -D "cn=Directory Manager" -W -f gitea.ldif
    ldapmodify -h freeipa.czs.local -p 443 -x -D \
    "cn=Directory Manager" -W -f gitea.ldif

    ipa group-add --desc="Gitea Users" gitea_users
    ldapsearch -x -LLL uid=* uid

*   LDAP Implementations
    *   FreeIPA
        *   [HowTo/LDAP - FreeIPA](https://www.freeipa.org/page/HowTo/LDAP#System_Accounts)
        *   [FreeIPA — Linux Guide and Hints](https://linuxguideandhints.com/centos/freeipa.html)
            *   FreeIPA Docs
        *   [Hottest 'freeipa' Answers - Stack Overflow](https://stackoverflow.com/tags/freeipa/hot?filter=all)
            *   Reminder this exists
*   Apps
    *   Nextcloud
        *   [docker-ci/nextcloud.ldif at master · nextcloud/docker-ci · GitHub](https://github.com/nextcloud/docker-ci/blob/master/user_saml_shibboleth-php7.2/ldap/nextcloud.ldif)
        *   [User authentication with LDAP — Nextcloud latest Administration Manual latest documentation](https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/user_auth_ldap.html)
        *   [Integrating NextCloud 11 with FreeIPA 4 | Poorly Documented](https://poorlydocumented.com/2017/02/integrating-nextcloud-11-with-freeipa-4/)
        *   [Owncloud Authentication against FreeIPA - FreeIPA](https://www.freeipa.org/page/Owncloud_Authentication_against_FreeIPA)
        *   [NextCloud integration with FreeIPA Server - ℹ️ Support / 📦 Appliances (Docker, Snappy, VM, NCP) - Nextcloud community](https://help.nextcloud.com/t/nextcloud-integration-with-freeipa-server/14641)
    *   Jellyfin
        *   [Authelia + LDAP for SSO? : jellyfin](https://old.reddit.com/r/jellyfin/comments/g3etp0/authelia_ldap_for_sso/)
*   Tutorials
    *   [My development server for Vault | HoldMyBeer](https://holdmybeersecurity.com/2021/02/16/my-development-server-for-vault/)
    *   [The secret of project management: LDAP+Gitea unified authentication Git server account management - Programmer Sought](https://www.programmersought.com/article/90225006733/)
*   [(8) Homelab Single Sign-On & TLS | LinkedIn](https://www.linkedin.com/pulse/homelab-single-sign-on-tls-aymen-furter/?articleId=6662081833322315776)
    *   Does not work
*   [stevegroom/traefikGateway: Turnkey Traefik Gateway with Let's Encrypt TLS, KeyCloak SSO and Jaeger tracing](https://github.com/stevegroom/traefikGateway)
    *   Too complex for me

[ibracorp/authelia: Instructions and configuration files to deploy Authelia in Unraid OS using Docker + FreeIPA LDAP.](https://github.com/ibracorp/authelia)
