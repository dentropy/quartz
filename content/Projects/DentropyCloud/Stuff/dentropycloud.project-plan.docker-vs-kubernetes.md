---
title: Docker vs. Kubernetes
description: 
published: true
date: 2021-04-01T03:23:04.834Z
tags: 
editor: markdown
dateCreated: 2021-04-01T03:23:04.834Z
---

# Docker vs. Kubernetes
We have reached some bottlenecks when it comes to using kubernetes.

·	Can’t build and deploy images without an entire Built pipeline hosted within kubernetes
·	The Persistent Volume Claim Provisioner is not portable
·	Docker supports the same types of network mounts kubernetes does, NFS CIFS Gluster can mount to whatever device it is on unlike kubernetes
·	Once kubernetes is installed it will consume port 80 and 443 on your home lab and routing other traffic via hostnames to other services not on kubernetes is a pain in the ass plus consumes much more resourses that it should
·	Docker Swarm works the same way I currently use kubernetes
·	Cert-Manager does not support wildcard certs
·	Can’t get External-DNS to work
·	From Cameron’s perspective it just does not make sense to use Kubernetes on their homelab, overcomplicated
