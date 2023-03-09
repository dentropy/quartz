---
id: Ema10N2ZQQFqFQYV42cUm
title: File System Basics
desc: ''
updated: 1662775413995
created: 1628449250425
---

Remember to check out [wiki.software.List.fstab](../../fstab.md)

``` bash
    # What Systems are mounted
    df -hT
    # Take a look at the drives
    lsblk
    # or
    blkid
    # or
    fdisk -l
    # or
    gdisk
    # or
    parted -l
    # Manage Paritioning Tool
    cfdisk
```

## [Mount the installation disk](https://www.cyberciti.biz/tips/how-to-mount-iso-image-under-linux.html)


``` bash
    mkdir /mnt/repo
    lsblk
    mount -o loop /dev/sr0 /mnt/repo
```

## How to make bootable USB

``` bash
    # Take a look at the drives lsblk
    # Make a bootable drive
    sudo dd bs=4M if=input.iso of=/dev/sd<?> conv=fdatasync
```

## [How to delete a file system](https://www.golinuxhub.com/2018/05/how-to-cleardelete-partition-table-disk-linux/)

``` bash
    # Clear all parition tables on drive
    wipefs -a -f /dev/???
    wipefs -a -t gpt -f /dev/???
```


## How to make a partition


*   Devices can be found listed at `/dev/`
*   Two tools can be used for making paritions `fdisk` and `gdisk`

## How to make a file system

``` bash
    # fdisk is for managing MBR partitions 
    
    mkfs.vfat /dev/$WHATEVER
    
    fsck.vfat
    
    df -h
    
    dump2fs /dev/$WHATEVER
    
    blkid # Get UUID of block device
    
    tune2fs -L LABEL_NAME /dev/$WHATEVER
    
    mkfs.xfs -f /dev/$WHATEVER
    
    mkdir /mnt/mount-location
    mount /dev/$WHATEVER /mnt/mount-location
    umount /mnt/mount-location
    
    xfs_info /dev/$WHATEVER
    
    xfs_repair /dev/$WHATEVER
    
    gdisk /dev/$WHATEVER
    
    ## To delete a parition table
    wipefs /dev/$WHATEVER
    
    mkfs -t ext4 /dev/$WHATEVER tune2fs -L LABEL_NAME /dev/$WHATEVER dump2fs /dev/$WHATEVER #+end_src ** Create a xfs file system #+begin_src bash
    Create a xfs parition
    mkfs -t xfs /dev/$WHATEVER
    or
    mkfs.xfs /dev/$WHATEVER
    Repair and stuff
    xfs_info /dev/$WHATEVER xfs_repair /dev/$WHATEVER
```

VFAT is for windows compatibility

One can run out of i nodes and not be able to write

The xfs file system is really fast and supports parallelization

## [Add label to drives](https://linuxconfig.org/how-to-label-hard-drive-partition-under-linux)


*   \=xfs\_admin -L {NAME}} /dev/WHATEVER=
*   \=xfs\_admin -l= to check label
*   \=tune2fs -L {NAME}} /dev/WHATEVER= #ext4 file name
*   Create, Mount, unmount, and Use VFAT, EXT4 and XFS File Systems

    e2label /dev/vdc1 "Backups"

## Temporary Mounting

``` bash
    mkdir /mnt/mount-location 
    mount /dev/$WHATEVER /mnt/mount-location
    umount /mnt/mount-location
```

## Sources

* [7 Ways to Determine the File System Type in Linux (Ext2, Ext3 or Ext4)](https://www.tecmint.com/find-linux-filesystem-type/)
* [10 Commands to Check Disk Partitions and Disk Space on Linux – BinaryTides](https://www.binarytides.com/linux-command-check-disk-partitions/)
