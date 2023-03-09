---
id: gaMLHEzfUN1r7bhc3ShJT
title: Luks
desc: ''
updated: 1662773272929
created: 1631840214074
---

## Mount Encrypted Drive

``` bash
sudo lsblk
# sudo apt-get install cryptsetup
# crypsetup already installed on manjaro

# Create a new drive mount thing that is unencrypted
sudo cryptsetup luksOpen /dev/sda2 3TBDrive

# Take a look at things
ls -arlt /dev/mapper | tail

# Check mount folder empty
ls /mnt/3TBDrive

# Mount
sudo mount /dev/mapper/3TBDrive /mnt/3TBDrive
```   

* Sources
  * [How to encrypt a USB Drive on Linux Operating System? | Linux.Tips](https://linux.tips/tutorials/how-to-encrypt-a-usb-drive-on-linux-operating-system)

## Managing password slots and automount

``` bash
# Check password slots
sudo cryptsetup luksDump /dev/sda2

# Add password
cryptsetup luksAddKey /dev/sda2

# Delete
sudo cryptsetup -v luksKillSlot /dev/sda2 7
```

* Sources
  * [How to auto mount LUKS device (encrypted partition) using fstab in Linux](https://www.golinuxcloud.com/mount-luks-encrypted-disk-partition-linux/)
  * [How to remove an unknown key from LUKS with cryptsetup? - Ask Ubuntu](https://askubuntu.com/questions/1125246/how-to-remove-an-unknown-key-from-luks-with-cryptsetup)

## Set automount for LUKS

***READ THEN COPY PASTE LINE***

``` bash
# Setup Automount
sudo dd if=/dev/random bs=32 count=1 of=/root/lukskey
sudo xxd /root/lukskey
sudo cryptsetup luksAddKey /dev/sda2 /root/lukskey

sudo vim /etc/crypttab
# PASTE THE BELOW LINE
secret  /dev/sda2  /root/lukskey


sudo reboot
```
