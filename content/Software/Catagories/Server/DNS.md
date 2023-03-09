---
id: euq3KXVTK0gSrmVefbkNz
title: Dentropy Cloud DNS Research
desc: ''
updated: 1635896211171
created: 1628474425403
description: null
published: true
date: '2021-07-10T03:30:30.652Z'
editor: markdown
dateCreated: '2021-04-01T03:50:18.988Z'
---

DNS stands for Domain Name System it is the things that makes the .com .net .org and .io of  all our favorite websites work. 

With Dentropy Cloud one requires their own public domain name to access their apps from any web browser connected to the internet. Once one buys a domain name they can use Public DNS services to map that domain name to a server. When running Dentropy Cloud from home one does not have a static IP address therefore the DNS provider needs to support updating their DNS record programmatically when one's IP address changes.

An alternative to public DNS is private DNS. With private DNS one can setup their own websites. With private DNS you can change google.com to go to your website, though browsers don't really like that. Anotehr imporant feature of private DNS is the ability to block ads.

## Dynamic DNS

* [linode-dynamic-dns/docker at master · nvllsvm/linode-dynamic-dns · GitHub](https://github.com/nvllsvm/linode-dynamic-dns)
* FreeDNS
* Search Cloudflare
* [DynamicDNS - Community Help Wiki](https://help.ubuntu.com/community/DynamicDNS)

### Public DNS

* Best Free DNS Solutions
  * [DNS Manager | Linode](https://www.linode.com/docs/guides/dns-manager/)
  * [Cloudflare](https://api.cloudflare.com/#getting-started-endpoints)
  * [Domains and DNS | OVH Guides](https://docs.ovh.com/ca/en/domains/)
  * [DNS | easyDNS](https://easydns.com/dns/)
* Alternative DNS Solutions
  * [FreeDNS Alternatives and Similar Software | AlternativeTo](https://alternativeto.net/software/freedns/)
  * [ClouDNS: Open source libs for ClouDNS HTTP API](https://www.cloudns.net/wiki/article/181/)
  * [API | Dynu](https://www.dynu.com/Support/API)
  * [Amazon Route 53 - Amazon Web Services](https://aws.amazon.com/route53/)

### Private DNS

Private services may require running a DNS server on a network.

* [PiHole Alternatives? : selfhosted](https://old.reddit.com/r/selfhosted/comments/hfgbyq/pihole_alternatives/)
* [Pi-hole Alternatives and Similar Apps / Services | AlternativeTo](https://alternativeto.net/software/pi-hole/)

## From other file

## DNS Stuff

* [FreeDNS Alternatives and Similar Software - AlternativeTo.net](https://alternativeto.net/software/freedns/)
* [ClouDNS: Open source libs for ClouDNS HTTP API](https://www.cloudns.net/wiki/article/181/)
* [API | Dynu](https://www.dynu.com/Support/API)
* [Amazon Route 53 - Amazon Web Services](https://aws.amazon.com/route53/)
* [Cloudflare API v4 Documentation](https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record)

## Wildcard DNS on local machine

* dnsmasq
  * Tried this does not work
    * [How to put wildcard entry into /etc/hosts? - Stack Overflow](https://stackoverflow.com/questions/20446930/how-to-put-wildcard-entry-into-etc-hosts)
  * Does not support .local
    * [server - Use /etc/hosts to direct wildcard domain name - Ask Ubuntu](https://askubuntu.com/questions/743050/use-etc-hosts-to-direct-wildcard-domain-name)

## DNS + Dynamic IP

* Public DNS Reccomendations
  * [FreeDNS](https://freedns.afraid.org/)
  * Cloudflare
  * [Cloudflare ](https://www.cloudflare.com/)
* Private DNS Reccomendations
  * [AdGuard — World's most advanced adblocker!](https://adguard.com/en/welcome.html)
  * [Pi-hole – Network-wide protection](https://pi-hole.net/)

[For more info click here](/dentropycloud/research/dns)

## Restart DNS on ubuntu

[How can I flush the DNS on Ubuntu 17.04? - Ask Ubuntu](https://askubuntu.com/questions/906476/how-can-i-flush-the-dns-on-ubuntu-17-04)

``` bash
# Run one at a time
sudo systemd-resolve --flush-caches

sudo systemd-resolve --statistics
```