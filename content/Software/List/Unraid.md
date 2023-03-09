---
id: ScpnwhVstjB0pWBymWwzh
title: Unraid
desc: ''
updated: 1667827040765
created: 1628444413865
---

## Unraid Community Apps Plugin

[[Plug-In] Community Applications - Plugin Support - Unraid](https://forums.unraid.net/topic/38582-plug-in-community-applications/)

## Moutning Shares inside VM

Getting initie updating screen when adding a share to a VM

* [Unraid VM shares? - General Support - Unraid](https://forums.unraid.net/topic/71600-unraid-vm-shares/)
* [Mount Unraid Share in a Linux VM - General Support - Unraid](https://forums.unraid.net/topic/99021-mount-unraid-share-in-a-linux-vm/)
* [Mount Unraid Share inside a Linux VM - General Support - Unraid](https://forums.unraid.net/topic/72592-mount-unraid-share-inside-a-linux-vm/)
  * Explanation of tag
* [VM Settings Wont Update - General Support - Unraid](https://forums.unraid.net/topic/75460-vm-settings-wont-update/)
  * Might be caused by browser adblock
* [Multiple shares for ubuntu vm : unRAID](https://old.reddit.com/r/unRAID/comments/dd0f5o/multiple_shares_for_ubuntu_vm/)
  * Person had same issue, they just reinstalled VM
* [[Support] SpaceinvaderOne - Macinabox - Page 27 - Docker Containers - Unraid](https://forums.unraid.net/topic/84601-support-spaceinvaderone-macinabox/page/27/)
  * Just edit the XML manually and you are good to go, make sure the PCI variable it a unique number

``` bash
# /etc/fstab
dentropycloud        /dentropycloud            9p         trans=virtio,version=9p2000.L,_netdev,rw 0 0
MEGA                 /MEGA                     9p         trans=virtio,version=9p2000.L,_netdev,rw 0 0
```

## Create USB on Linux

* [How do I create a unRAID USB from a Linux machine? - Pre-Sales Support - Unraid](https://forums.unraid.net/topic/72840-how-do-i-create-a-unraid-usb-from-a-linux-machine/)