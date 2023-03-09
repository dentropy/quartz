

## Basic Auth

* [BasicAuth - Traefik | Site | v2.0](https://doc.traefik.io/traefik/v2.0/middlewares/basicauth/)
* Generate password
  * [Htpasswd Generator – Create htpasswd - hostingcanada.org](https://hostingcanada.org/htpasswd-generator/)
  ``` bash
  echo $(htpasswd -nb user password) | sed -e s/\\$/\\$\\$/g
  ```

## REMINDERS

* **ARTICULATE A QUESTION**
* **START BY READING THE DOCUMENTATION**
* **OODA, ACT TOWARDS A DIRECTION**
* Search “Homelab Traefik”
* Troubleshooting
  * Check Service Name and Label Name
  * Restart Service
  * Restart Traefik
  * acme.json needs the right permissions or TLS certs will not work, should use docker-volume.
* Middlewares
  * Authelia
    * Get subpath working with
    * [Getting Started - Authelia](https://www.authelia.com/docs/getting-started.html)
    * [Traefik 2.x - Authelia](https://www.authelia.com/docs/deployment/supported-proxies/traefik2.x.html)

    Setup completed successfully.
    
    You can now visit the following locations:
    - https://public.dentropy.xyz - Bypasses Authelia
    - https://traefik.dentropy.xyz - Secured with Authelia one-factor authentication
    - https://secure.dentropy.xyz - Secured with Authelia two-factor authentication (see note below)
    
    You will need to authorize the self-signed certificate upon visiting each domain.
    To visit https://secure.dentropy.xyz you will need to register a device for second factor authentication and confirm by clicking on a link sent by email. Since this is a demo with a fake email address, the content of the email will be stored in './authelia/notification.txt'.
    Upon registering, you can grab this link easily by running the following command: 'grep -Eo '"https://.*" ' ./authelia/notification.txt'.
    	

* Getting Started
  * [Basic Example - Traefik](https://doc.traefik.io/traefik/user-guides/docker-compose/basic-example/)
    * Works great, not need HTTPs and to secure the dashboard
* Random Questions
  * [What is the difference between docker-compose ports vs expose - Stack Overflow](https://stackoverflow.com/questions/40801772/what-is-the-difference-between-docker-compose-ports-vs-expose)
* Port
  * [docker - request forwarding on specific port with traefik(v2) router - Stack Overflow](https://stackoverflow.com/questions/59782442/request-forwarding-on-specific-port-with-traefikv2-router)
  * [docker - Traefik v2 \[how to route to specific port\] - Stack Overflow](https://stackoverflow.com/questions/55641803/traefik-v2-how-to-route-to-specific-port#57679662)
  * [Traefik redirect / (root) to sub path with Docker labels](https://gist.github.com/kekru/d088be6a3fa844089ae62d80c077bb38)
  * [routing - Route Traefik to subfolder - Server Fault](https://serverfault.com/questions/988488/route-traefik-to-subfolder)
  * [Traefik redirect / (root) to sub path with Docker label](https://gist.github.com/kekru/d088be6a3fa844089ae62d80c077bb38)
* TOML file examples
  * [Traefik as Reverse Proxy for Docker Services | by Aral Can Kaymaz | Medium](https://medium.com/@ackaymaz/traefik-as-reverse-proxy-for-docker-services-5d828d03d08e)
  * [Setup Traefik - FM Lab](https://fmlab.no/homelab/traefik/)
* HTTPS
  * [traefik-letsencrypt-compose/docker-compose.yml at master · bubelov/traefik-letsencrypt-compose · GitHub](https://github.com/bubelov/traefik-letsencrypt-compose/blob/master/docker-compose.yml)
    * Tried could not get working
  * [TLS Challenge - Traefik](https://doc.traefik.io/traefik/user-guides/docker-compose/acme-tls/)
    * Works
  * [Traefik Proxy with HTTPS - Docker Swarm Rocks](https://dockerswarm.rocks/traefik/)
    * Docker Swarm
* Dashboard
  * [Traefik V2 Docker Compose file with LetsEncrypt and HTTPS redirect - Traefik dashboard and simple whoami service · GitHub](https://gist.github.com/coltenkrauter/124ec31d616fa4c0dcf25d79462a6237)
    * Does not work
  * [How to expose Traefik 2.x dashboard securely on Docker Swarm :: Aloïs Micard — Tech Blog](https://blog.creekorful.org/2020/01/how-to-expose-traefik-2-dashboard-securely-docker-swarm/)
    * Uses Docker Swarm
  * [Traefik 2 - Advanced configuration with Docker Compose | mmorejon](https://mmorejon.io/en/blog/traefik-2-advanced-configuration-docker-compose/)
    * Uses plugins
* Useful Blog Posts
  * [Traefik v2 - Advanced Configuration](https://blog.thesparktree.com/traefik-advanced-config#automated-ssl-certificates-using-letsencrypt-dns-integration)
  * [Ultimate Docker Home Server with Traefik 2, LE, and OAuth / Authelia \[2020\]](https://www.smarthomebeginner.com/traefik-2-docker-tutorial/)
* Redit Posts
  * [yet another Traefik show-off :D : homelab](https://old.reddit.com/r/homelab/comments/az2mxi/yet_another_traefik_showoff_d/)
  * [Traefik v2 - Advanced Config with Examples : homelab](https://old.reddit.com/r/homelab/comments/gz1pww/traefik_v2_advanced_config_with_examples/)
* Oauth
  * [Google OAuth Tutorial for Docker and Traefik - Authentication for Services](https://www.smarthomebeginner.com/google-oauth-with-traefik-2-docker/)

* [Sample docker-compose with Traefik v2.0 and Lets Encrypt · GitHub](https://gist.github.com/alexjj/15019715815529cf73bcea5c9c59ba92)

* [Internal HTTPS with Let's Encrypt, Linode DNS and Traefik](https://webworxshop.com/internal-https-with-lets-encrypt-linode-dns-and-traefik/)

SUPER HELPFUL
-------------

[docker - Traefik v2 and Invalid Lets Encrypt Certificate - Stack Overflow](https://stackoverflow.com/questions/59856104/traefik-v2-and-invalid-lets-encrypt-certificate)

[ACME v2 Production Environment & Wildcards - API Announcements - Let's Encrypt Community Support](https://community.letsencrypt.org/t/acme-v2-production-environment-wildcards/55578)

ANOTHER PROBLEM SOLVED
----------------------

["Gateway Timeout" with docker · Issue #1254 · traefik/traefik · GitHub](https://github.com/traefik/traefik/issues/1254)

[How to redirect http to https with Traefik 2.0 and Docker Compose labels? - Stack Overflow](https://stackoverflow.com/questions/58356714/how-to-redirect-http-to-https-with-traefik-2-0-and-docker-compose-labels)

## Working HTTP Server (NO TLS)

``` yaml
version: '3'

services:
  reverse-proxy:
    # The official v2.0 Traefik docker image
    image: traefik:v2.0
    # Enables the web UI and tells Traefik to listen to docker
    command:
        #- "--log.level=DEBUG"
        - "--api.insecure=true"
        - "--providers.docker=true"
        - "--providers.docker.exposedbydefault=false"
        - "--entrypoints.web.address=:80"
    ports:
      # The HTTP port
      - "80:80"
      # The Web UI (enabled by --api.insecure=true)
      - "8080:8080"
    volumes:
      # So that Traefik can listen to the Docker events
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      - traefik-homelab
networks:
  traefik-homelab:
    external:
      name: traefik-homelab
```
