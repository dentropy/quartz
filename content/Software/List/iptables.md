---
id: 3uflx6w8giva0tol4okk56b
title: Iptable
desc: ''
updated: 1667926145073
created: 1667925708491
---


``` bash
man iptables

sudo iptables-save > ~/iptables-out-default
sudo apt install iptables-persistent
sudo systemctl is-enabled netfilter-persistent.service

sudo iptables -L
sudo /sbin/iptables -I INPUT -p tcp -m tcp --dport 80   -j ACCEPT
sudo /sbin/iptables -I INPUT -p tcp -m tcp --dport 443  -j ACCEPT
sudo /sbin/iptables -I INPUT -p tcp -m tcp --dport 8000 -j ACCEPT
sudo /sbin/iptables -I INPUT -p tcp -m tcp --dport 8080 -j ACCEPT
sudo /sbin/iptables -I INPUT -p tcp -m tcp --dport 8082 -j ACCEPT
sudo /sbin/service iptables save

sudo iptables-save > ~/iptables-out
sudo /sbin/iptables-restore <  ~/iptables-out
```

[linux - Cannot access port 80 from remote location but works on local? - Server Fault](https://serverfault.com/questions/301903/cannot-access-port-80-from-remote-location-but-works-on-local)
[How to save iptables firewall rules permanently on Linux - nixCraft](https://www.cyberciti.biz/faq/how-to-save-iptables-firewall-rules-permanently-on-linux/)