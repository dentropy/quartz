---
id: Ulf5Mctnv3qodS6YIXrCf
title: Dentropy Cloud Backup Research
desc: ''
updated: 1632497719134
created: 1628474425403
description: null
published: true
date: '2021-07-10T03:22:19.149Z'
editor: markdown
dateCreated: '2021-04-01T03:19:39.254Z'
---

# Dentropy Cloud Backup Research

As they say if your data does not exist in three locations it might as well not exist. Dentropy Cloud needs automated remote backup procedures so one's data is not lost. The ability to do encrypted back ups to third party storage providers is required.

* Possible backup tools
  * [Documentation](https://rclone.org/docs/)
  * [restic](https://restic.readthedocs.io/e)
  * [duplicity: Main](http://duplicity.nongnu.org/)


### Kubernetes Backup Solutions

The defacto tool for kubernetes backup is Velero, velero plugs into most object storage providers making it pretty simple to use. Envryption is a problem it does not deal with at this time.

* Velero Links
  * [Velero Docs - Backup Reference](https://velero.io/docs/v1.5/backup-reference/)
  * [[ Kube 45 ] Velero - Backup & Restore Kubernetes Cluster - YouTube](https://www.youtube.com/watch?v=C9hzrexaIDA)
  * [Kubernetes: Backup your Stateful apps - Objectif Libre](https://www.objectif-libre.com/en/blog/2020/01/10/kubernetes-backup-stateful-apps/)
  * [Kubernetes Backups, Upgrades, Migrations - with Velero - YouTube](https://www.youtube.com/watch?v=zybLTQER0yY)

## Backup + Restore

One should be able to backup entire applications to a single file. With the Dentropy Cloud CLI they should be able to point it at the TAR ball, be asked questions about where to run, store, and route the application and have it work.

Right now there are two solutions for this, one for kubernetes and one for docker.

The docker solution involves stopping the container running the application then mounting anouther container with the volumes of the stopped continaer with an additional volume where the backup is stored in transit. This container then tar balls the entire volume. This backup method words with any type of docker volume. This process can be done in reverse, even on a different volume type or location, to get the data back.

For kubernetes just use [velero](https://velero.io/). Having scripts that automate setting up object storage and optionally tar ball the object storage are features worth adding.

[For more info click here](/dentropycloud/research/backups)
