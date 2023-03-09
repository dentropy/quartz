---
id: ETDxka7VVGtsGgn5ReQJz
title: mounting drives
desc: ''
updated: 1662773848606
created: 1628449250426
---
## Mounting Drives

``` bash
# Take a look at the drives
lsblk
# Make this magical command work for you
sudo dd bs=4M if=input.iso of=/dev/sd<?> conv=fdatasync
```
Check drives on current machine
-------------------------------

``` bash
    lsblk
```

Check file system type on current machine
-----------------------------------------

``` bash
    ls -Th 
``` 

[https://www.tecmint.com/find-linux-filesystem-type/](https://www.tecmint.com/find-linux-filesystem-type/)

Create, Mount, Unmount, and Use VFAT, EXT4 and XFS File Systems
---------------------------------------------------------------

*   Objectives:
    *   Create MBR and GPT paritions
    *   Put a file system on these paritions
    *   Mount / unmount file systems
    *   Delete these file systems and paritions

fdisk is for managing MBR partitions

    fdisk xvdf
    
    mkfs.vfat /dev/$WHATEVER
    
    fsck.vfat
    
    df -h
    
    dump2fs /dev/$WHATEVER
    
    blkid # Get UUID of block device
    
    tune2fs -L LABEL_NAME /dev/$WHATEVER
    
    mkfir.xfs -f /dev/$WHATEVER
    
    mkdir /mnt/mount-location
    mount /dev/$WHATEVER /mnt/mount-location
    umount /mnt/mount-location
    
    xfs_info /dev/$WHATEVER
    
    xfs_repair /dev/$WHATEVER
    
    gdisk /dev/$WHATEVER
    
    ## To delete a parition table
    wipefs /dev/$WHATEVER
    

VFAT is for windows compatibility

What happens when I reboot

One can run out of i nodes and not be able to write

What is a LVM (logical volume manager)?

xfs, really fast and supports parallelization

/etc/fstab  
/dev/WHATEVER /mnt/mount-location {file-system}} defaults 1 2

Mount and Unmount CIFS and NFS network file systems
---------------------------------------------------

    # CIFS? Common Intenret File System
    # Works with Windows and Linux
    # Samba is an example of CIFS
    # Next cert is where people learn how to create and manage these servers
    
    sudo yum install samba-client cifs-utils nfs-utils
    
    # In exam always mount persistently
    
    smbclient -L {IP Address}}
    mkdir -p /mnt/{sambashare, nfsshare} # Real Linux Command
    mount -t cifs -o username={username}} //{IP Address}}/{Share Name}} {Mount Location}}
    mount -t nfs {ip address}}:{Share}} {Mount Location}}
    df -h
    
    nano /etc/fstab
    #samba
    //{IP ADDRESS}}/{Share Name}}  {Mount Location}} cifs username={user}}, password={password}}
    # NFS
    {IP Address}}:/{Share Name}} {Mount Location}} nfs defaults 0 0
    
    ## reset mount from /etc/fstab
    mount -a
    

Extend Existing Logical Volumes
-------------------------------

    cd /dev
    # Should see a bunch of aditional devices
    fdisk /dev/{device}}
    # Make sure to label device LVM
    pvcreate /dev/{device}}
    pvdisplay
    vsgreate {name}} /dev/{device}}
    lvcreate -n {new name}} -L {Size}G {name}}
    mkfs -t xfs /dev/{name}}/{new name}}
    mount /dev/{name}}/{new name}} {Mount Location}}
    df -h
    # With logical volumes you can add and remove phyiscal volumes without interupting the data on the volume
    gdisk /dev/{new device}}
    # Use linux LVM code
    vsextend {name}} /dev/{new device}}
    
    # Copy from one thing to another
    pvmove /dev/{device}} # To remove data from
    
    # Remove Phyiscal device
    vgreduce {name}} /dev/{device}} # Device you want to remove
    
    # Congradualtions you just did a live data migration
    
    # Now to actually extend
    
    lvextend -L {Size}}G /dev/{name}}/{new name}}  # Change size
    lvextend -L +{Size}}G /dev/{name}}/{new name}} # Add
    # Wait the file system is still fucked
    
    xfs_growfs {Mount Point}}
    # For ext4 resize2fs
    
    lvextend -l +50%FREE /dev/{name}}/{new name}} # Take up 50% of aditional space
    

Create and Configure Set-GIT Directories for Collaboration
----------------------------------------------------------

    groups user
    groups root
    
    # Set-GID on directory and the permissions for new files created within will inheret
    # UID? - User ID
    # GID? - Group ID
    
    mkdir {finance,it}
    chmod g+s finance
    groupadd finance
    chown :finance finance
    chmod g+wX -R finace
    ls -al
    

Create and Manage Access Control Lists (ACLs)
---------------------------------------------

    #Not supported by most file systems by default are XFS and EXT4
    # Use ACLs when you want more fine grande permission control than groups and users
    
    getfacl {file}}
    
    setfacl -m u:{username}}:{sembolic permissions such as example rw}}
    # ls -l, has plus to show ACL stuff active
    
    # chmod does not modify ACL, the mask can stop the ACL from doing what it wants
    
    # Why would group ID change
    
    # Default ACL
    
    setfacl -d -m u:{user}}:{Permissions}} directory # -d is for default
    setfacl --remove-default {directory}} # can also use -x
    
    # How to remove permissions for specifc users and groups for a firectory or file
    # -R for recursion
    # One can skip the user or group for a acl to set default permissions
    

Diagnose and Correct File Permission Problems
---------------------------------------------
