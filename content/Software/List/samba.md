---
id: s3KzAm5xgUisNUtt819Vk
title: samba
desc: ''
updated: 1662946512624
created: 1638832591176
---

## [command line - List samba shares and current users - Ask Ubuntu](https://askubuntu.com/questions/102924/list-samba-shares-and-current-users)

```bash
sudo apt-get update
sudo apt-get install -y smbclient
sudo apt-get install -y cifs-utils
```

``` bash
smbclient -L ip_of_net_interface -U your_user_name
```

## Mount on boot

[Proper fstab entry to mount a samba share on boot? - Ask Ubuntu](https://askubuntu.com/questions/157128/proper-fstab-entry-to-mount-a-samba-share-on-boot)
