---
id: aHC2qtAkEH7IQNNerTyGU
title: netplan
desc: ''
updated: 1628449250433
created: 1628449250433
---
# netplan
[Netplan Static IP - Configure static IP address on Ubuntu 18.04 - isw blog](https://www.itsupportwale.com/blog/netplan-static-ip-configure-static-ip-address-on-ubuntu-18-04/)

How to Set Static ip on Ubuntu
------------------------------

Instructions are from [here](https://www.tecmint.com/configure-network-static-ip-address-in-ubuntu/)

    sudo netplan generate
    ls /etc/netplan
    sudo vim /etc/netplan/******
    

    network:
        ethernets:
            ens18:
                dhcp4: no
                addresses: [10.10.2.42/24, ]
                gateway4: 10.10.2.1
                nameservers:
                        addresses: [10.10.2.155, 10.10.2.222, 208.67.222.222, 1.1.1.1]
                optional: true
        version: 2
    

    sudo netplan apply
    

*   How manually set ip address [SOURCE](https://www.tecmint.com/configure-network-static-ip-address-in-ubuntu/)
*   Detect what program running on port and kill it [SOURCE](https://stackoverflow.com/questions/11583562/how-to-kill-a-process-running-on-particular-port-in-linux)
