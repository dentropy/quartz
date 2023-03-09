---
id: FyupXQKCOpPRNOKD3NE04
title: fstab
desc: ''
updated: 1662775433431
created: 1638853068342
---

## Permanent Mounting

Configure systems to mount file system at boot by Universal Unique ID (UUID) or label

blkid # Get UUID of block device gdisk /dev/$WHATEVER

Getting to know /etc/fstab

*   txt file
*   Everything is space separated
*   /dev/WHATEVER /mnt/mount-location {file-system}} defaults 1 2
*   `mount -a` remounts everything in /etc/fstab
*   What are the colums in the /etc/fstab file?
*   \=mkdir /mnt/{mount1,mount2}= <-- Real command
*   Use `blkid` to get UUID or label
*   Remember to create folder on system to mount stuff, probably in the /mnt folder
*   edit /etc/fstab
*   `UUID=14D82C19D82BF81E /data auto nosuid,nodev,nofail,x-gvfs-show 0 0`
*   `UUID="" /MOUNTPOINT FILE-SYSTEM-TYPE defaults 0 0`


## cifs / [wiki.software.List.samba](samba.md) shares

``` bash
sudo apt-get update
sudo apt-get install smbclient
sudo apt-get install cifs-utils
```

Mount and Unmount CIFS and NFS network file systems

``` bash
    # CIFS? Common Intenret File System 
    # Works with Windows and Linux 
    # Samba is an example of CIFS 
    # Next cert is where people learn how to create and manage these servers
    sudo yum install samba-client cifs-utils nfs-utils

    # In exam always mount persistently

    smbclient -L {IP Address}}
    mkdir -p /mnt/{sambashare, nfsshare} # Real Linux Command
    mount -t cifs -o username={username}} //{IP Address}}/{Share Name}} {Mount Location}}
    mount -t nfs {ip address}:{Share} {Mount Location}
    df -h

    nano /etc/fstab
    #samba
    //{IP ADDRESS}/{Share Name} {Mount Location} cifs username={user}, password={password}
    # NFS
    {IP Address}://{Share Name} {Mount Location} nfs defaults 0 0

    ## reset mount from /etc/fstab
    mount -a
``` 

## Sources

* [MountWindowsSharesPermanently - Ubuntu Wiki](https://wiki.ubuntu.com/MountWindowsSharesPermanently)
