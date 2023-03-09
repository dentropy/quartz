---
id: ZPg8VRNUqFX9Fn40csK8u
title: nfs
desc: ''
updated: 1628449250430
created: 1628449250430
---
# nfs
NFS Network File Share
----------------------

Display shares on remote server
-------------------------------

    showmount -e IP_ADDRESS
    

Mount remote fileshare
----------------------

    mkdir /mnt/DockerVolumes
    sudo mount -t nfs 192.168.2.99:/mnt/user/DockerVolumes /mnt/DockerVolumes
    
    mkdir /mnt/nfsmedia
    sudo mount -t nfs 192.168.2.21:/mnt/user/media /mnt/nfsmedia
    

unmount a file share
--------------------

    umount /mnt/DockerVolumes

[ubuntu - Which ports do I need to open in the firewall to use NFS? - Server Fault](https://serverfault.com/questions/377170/which-ports-do-i-need-to-open-in-the-firewall-to-use-nfs)
