---
title: Dentropy Cloud Design Problems
description: 
published: true
date: 2021-07-10T02:57:41.997Z
tags: 
editor: markdown
dateCreated: 2021-04-01T03:30:54.654Z
---

Dentropy Cloud Design Problems

* Storage

  * NFS Storage
    * We need a NFS drive available locally (SOLVED)
    * Native NFS Server
        * [https://phoenixnap.com/kb/ubuntu-nfs-server](https://phoenixnap.com/kb/ubuntu-nfs-server)
                - (THIS ONE IS IN THE CODE)
        * [https://unix.stackexchange.com/questions/252812/user-permissions-in-nfs-mounted-directory](https://unix.stackexchange.com/questions/252812/user-permissions-in-nfs-mounted-directory)
    * Docker NFS Servers Containers
        * [[https://hub.docker.com/r/erichough/nfs-server/]](https://hub.docker.com/r/erichough/nfs-server/)
                - (Ideal solution)
        * [[https://hub.docker.com/r/gists/nfs-server]{.underline}](https://hub.docker.com/r/gists/nfs-server)
        * [[https://github.com/mjstealey/nfs-in-docker]{.underline}](https://github.com/mjstealey/nfs-in-docker)
        * [[https://github.com/DzeryCZ/docker-machine-nfs\#standalone]{.underline}](https://github.com/DzeryCZ/docker-machine-nfs#standalone)
        * [[https://hub.docker.com/r/itsthenetwork/nfs-server-alpine]{.underline}](https://hub.docker.com/r/itsthenetwork/nfs-server-alpine)
                - (Second best)
            * [[https://sysadmins.co.za/setup-a-nfs-server-with-docker/]{.underline}](https://sysadmins.co.za/setup-a-nfs-server-with-docker/)
    * Docker NFS Research
        * [NFS does not work with sqlite](https://old.reddit.com/r/sonarr/comments/jmagwb/docker_nfs_permissions_issue/)
        * [May have to edit the containers themselves because NFS does not support changing permissions](https://stackoverflow.com/questions/53682810/how-to-solve-the-chown-permission-issue-of-postgresql-docker-container-when-moun)
        * [NFS Daemon must be installed](https://askubuntu.com/questions/507983/nfs-kernel-daemon-no-support-in-current-kernel)
                - [12.04 - NFS kernel daemon: no support in current kernel - Ask Ubuntu](https://askubuntu.com/questions/507983/nfs-kernel-daemon-no-support-in-current-kernel)
        * [FreeNAS has special settings I don't know about](https://old.reddit.com/r/docker/comments/e281ze/trying_to_mount_nfs_chmod_not_permitted/)
        * [https://github.com/ehough/docker-nfs-server/issues/2](https://github.com/ehough/docker-nfs-server/issues/2)
        * https://container42.com/2014/03/29/docker-quicktip-4-remote-volumes/
    * NFS Research
        * [[https://www.unix.com/aix/252309-showmount-dont-show-nfs4.html]{.underline}](https://www.unix.com/aix/252309-showmount-dont-show-nfs4.html)
            * Note: The showmount command returns information maintained by the mountd daemon. Because NFS Version 4 does not use the mountd daemon, showmount will not return information about version 4 mounts.
    * THE ANSWER
        * [https://serverfault.com/questions/212178/chown-on-a-mounted-nfs-partition-gives-operation-not-permitted](https://serverfault.com/questions/212178/chown-on-a-mounted-nfs-partition-gives-operation-not-permitted)
* Is every application on the same network?
  * Should there be an internal network for VPN applications and one network for Publicly exposed applications, applications available on both will be attached to both networks. This also means there will have to be two Traffik Instances
* Yaml Configuration
  * Do we use environment variables to configure everything or do we want to programmatically generate the YAML?
    * Use environment variables until there is a problem
    * Is there ever a case where a single set of environment variables is not enough?
* Need to run our own kubernetes
  * [https://k3s.io/](https://k3s.io/) (Probably best solution so far)
  * [[https://old.reddit.com/r/kubernetes/comments/be0415/k3s\_minikube\_or\_microk8s/]](https://old.reddit.com/r/kubernetes/comments/be0415/k3s_minikube_or_microk8s/)

  * [Micro K8s from Ubuntu](https://ubuntu.com/kubernetes/install)

* Trafik on Kubernetes

  * [[https://old.reddit.com/r/kubernetes/comments/ej0gtx/help\_understanding\_traefik\_k3s\_integration/]](https://old.reddit.com/r/kubernetes/comments/ej0gtx/help_understanding_traefik_k3s_integration/)

  * [[https://akos.me/2019/civo-cloud-treafik-v2-tls/]](https://akos.me/2019/civo-cloud-treafik-v2-tls/)
        > (Works but bad idea)

  * How to enable Traefik Dashboard

    * [[https://www.jurgenallewijn.nl/k3s-enable-traefik-dashboard/]](https://www.jurgenallewijn.nl/k3s-enable-traefik-dashboard/)

* Kubernetes Storage

  * https://kubernetesbyexample.com/pv/

* NFS Kubernetes TODO

  * [[https://kubernetesguide.com/kubernetes/nfs-volumes-in-kubernetes/]](https://kubernetesguide.com/kubernetes/nfs-volumes-in-kubernetes/)

  * [[https://rancher.com/docs/rancher/v1.6/en/rancher-services/storage-service/rancher-nfs/]](https://rancher.com/docs/rancher/v1.6/en/rancher-services/storage-service/rancher-nfs/)

  * [[https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-volumes-example-nfs-persistent-volume.html]](https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-volumes-example-nfs-persistent-volume.html)

  * [[https://kubernetesguide.com/kubernetes/nfs-volumes-in-kubernetes/]](https://kubernetesguide.com/kubernetes/nfs-volumes-in-kubernetes/)

  * [[https://sysadmins.co.za/persistent-nfs-storage-for-kubernetes-deployments/]](https://sysadmins.co.za/persistent-nfs-storage-for-kubernetes-deployments/)

  * [[https://rancher.com/docs/rancher/v1.6/en/rancher-services/storage-service/rancher-nfs/]](https://rancher.com/docs/rancher/v1.6/en/rancher-services/storage-service/rancher-nfs/)

* Cluster Creation Tutorial

  * [https://www.liquidweb.com/kb/how-to-install-and-configure-k3s-on-ubuntu-18-04/](https://www.liquidweb.com/kb/how-to-install-and-configure-k3s-on-ubuntu-18-04/)
