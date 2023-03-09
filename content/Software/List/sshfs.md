``` bash
sudo mkdir /mnt/sshfs
sudo sshfs -o debug,IdentityFile=/home/dentropy/.ssh/id_rsa dentropy@192.168.2.226:/home /mnt/sshfs
sudo umount /mnt/3TBDrive


sudo sshfs -o debug,IdentityFile=/home/dentropy/.ssh/id_rsa dentropy@pleroma.newatlantis.xyz:~ /mnt/pleroma
sudo umount /mnt/3TBDrive
sshfs -o debug,IdentityFile=/home/dentropy/.ssh/id_rsa root@159.203.44.193:/root /mnt/sshfs
```

[SOURCE](https://www.digitalocean.com/community/tutorials/how-to-use-sshfs-to-mount-remote-file-systems-over-ssh)
