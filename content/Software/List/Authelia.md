---
id: dxYs7lQcJjcxWPQyIr5E9
title: Authelia
desc: ''
updated: 1628444413853
created: 1628444413853
---
# Authelia
*   Example Deployments
    *   [authelia/compose/lite at master · authelia/authelia](https://github.com/authelia/authelia/tree/master/compose/lite)
        *   Tested successfully, don't change password
        *   In configuration.yml, change the domain name's and add “disable\_startup\_check: true” under “notifier”
        *   Do not touch users\_database yet
        *   In docker-compose.yml change the domain name from the example one
        *   Change Timezone
    *   [ibracorp/authelia: Instructions and configuration files to deploy Authelia in unRAID OS.](https://github.com/ibracorp/authelia/)
    *   [htpcBeginner/docker-traefik: Docker media and home server stack with Docker Compose, Traefik, Swarm Mode, Google OAuth2/Authelia, and LetsEncrypt](https://github.com/htpcBeginner/docker-traefik)
    *   [faritvidal/Config-Traefik-2.2.X: This is a repository that you create in order to have some scenarios in which you can use Traefik efficiently, it has a link to the official sites of each of the mentioned software.](https://github.com/faritvidal/Config-Traefik-2.2.X#authelia-users-config)
*   Need to upgrade default config to support acme challenges
    *   [HTTP Challenge - Traefik](https://doc.traefik.io/traefik/user-guides/docker-compose/acme-http/)
*   Troubleshooting
    *   When Changing domain change both the authelia config and docker-compose


---
id: IGpPRdR3p8JIK8w44wlIJ
title: Set Password in Authelia
desc: ''
updated: 1628444413885
created: 1628444413885
---
# Set Password in Authelia
[File - Authelia](https://www.authelia.com/docs/configuration/authentication/file.html)

      paul:
        displayname: "Paul Mullins"
        password: "$argon2id$v=19$m=65536,t=1,p=8$TFdLOWtIMHNiRnJLYkJOMQ$S9NbAurnYVZ1kOx1hqStE5rIio+jwOFhsjRb/gmmpt0"
        email: paulmullins@protonmail.com
        groups:
          - admins
          - dev
