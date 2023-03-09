## Version 1.0
* Start and stop scripts that are self aware of what was running
* Script to add and remove test domain name to /etc/hosts for local development
* Better Terraform State Management (S3 or Gitlab)
* Separate network for every application
* DDOS Proections
* Backup and restore scripts in SQL rather than using volumes
* Cloudflare DNS Management rather than Vultr
* VPN Research and Implimentation, Access certain apps through VPN only
       * Wireguard Testing
       * Proxy Services for Running at Home, Dynamic or Proxy DNS
	* [Tailscale](https://tailscale.com/)
	* [ZeroTier](https://www.zerotier.com/)
	* [Access self-hosted services over a VPN with a friendly domain : selfhosted](https://old.reddit.com/r/selfhosted/comments/rttko2/access_selfhosted_services_over_a_vpn_with_a/)
	* [Best Choice for homelab VPN? : homelab](https://old.reddit.com/r/homelab/comments/5rowqd/best_choice_for_homelab_vpn/)
* Documentation for Phisical Hosting
	* [Is there something like unRAID, but a free alternative? : DataHoarder](https://old.reddit.com/r/DataHoarder/comments/7lwq4o/is_there_something_like_unraid_but_a_free/)
* Come up with and Write Tutorials Based on What I learned
	*   Read about parity in unraid and document how it works
	*   Document how to create separate network for openwrt
	*   Document how to forward into docker network
	*   Write Tutorial on how to set up a SAMBA server
	*   Document how to use NFS Environment Variable for Homelab
	* Blog Post, Self Hosted Box Project, Recreate what Cory Doctorow talks about in the first book in that series with Xbox's
*   Read through the [r/DataHoarder](https://old.reddit.com/r/DataHoarder/wiki/index) wiki and append to TODO list


## Version 2.0

* Docker Swarm vs Portainer vs Kubernetes vs VM'sFeasability Study for version2
	* Check out using portainer CLI got the next generation
* Learn about logs for software software such as nginx, nextcloud, gitlab, and jellyfin and learn how to query and back them up
* Document the state of security, credentails
	* [Authelia](../../Software/List/Authelia.md) 
	* [goauthentik](../../Software/List/goauthentik.md)
	* [keycloak](../../Software/List/keycloak.md)
	* [HTTP Basic Auth](../../Wiki/Concepts/List/HTTP%20Basic%20Auth.md)
* Research seedboxes
* Database Optimization
	* Can all apps all use a single postgres database?
* TOR Services
* Run on ARM Devices!?!?!?
* Squid SSL Proxy for traffic going through VPN for Debugging and Quantified Self 