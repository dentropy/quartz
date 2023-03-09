---
id: IGsGNbayrNV9yhpA8Ee85
title: balenaEtcher
desc: ''
updated: 1638753057499
created: 1638752913643
---

[balenaEtcher - Flash OS images to SD cards & USB drives](https://www.balena.io/etcher/)

[How to Install Etcher on Ubuntu {via GUI or Terminal} | phoenixNAP KB](https://phoenixnap.com/kb/etcher-ubuntu)


``` bash
echo "deb https://deb.etcher.io stable etcher" | sudo tee /etc/apt/sources.list.d/balena-etcher.list
sudo apt-key adv --keyserver hkps://keyserver.ubuntu.com:443 --recv-keys 379CE192D401AB61
sudo apt update
sudo apt install balena-etcher-electron
```