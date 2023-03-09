---
id: NH9jQ5fc3zRzFUoSjTHIh
title: Managing Software Exercises
desc: ''
updated: 1628449250431
created: 1628449250431
---
# Managing Software Exercises
*   Where are the repos on CentOS located
    *   `/etc/yum.repos.d/*`
*   How to mount the installation CD to /repo

    parted -l
    mkdir /repo
    mount -o loop /dev/*** /repo

*   How to add the repositories on the CD to yum package manager

    # AppStream.repo
    [AppStream]
    name=AppStream
    baseurl=file:///repo/AppStream
    gpgcheck=0
    
    # cdrom.repo
    [cdrom]
    name=CDROM Repo
    baseurl=file:///repo/BaseOS
    gpgcheck=0

*   How do you confirm that the packages were added correctly
    *   `yum repolist`
*   How to search yum
    *   `yum search user`
*   How to get information on yum package
    *   `yum info nmap`
*   How to list all packages
    *   `yum list | less`
    *   `yum list kernel`
*   How to update a specific package
    *   `yum update kernel`
*   Get history of yum
    *   `yum history`
    *   `yum history undo $NUM`
*   List yum modules
    *   `yum module list`
    *   `yum module list python*`
