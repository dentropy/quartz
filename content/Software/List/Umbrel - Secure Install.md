## Create a VPS and login via SSH

Remember to block all incoming traffic on ports except 22 (ssh) and 51820 (wireguard) at firewall level.

![Pasted image 20230224173216](../../assets/Pasted%20image%2020230224173216.png)

*Urbit likes to have port 34343 as TCP open as well*

## Run one at a time
``` bash
sudo su
sudo ufw status
sudo ufw disable # We reroute everything through to the host
sudo apt-get update
sudo apt-get install -y tmux
sudo apt-get install -y git
sudo apt-get install -y vim
sudo apt-get install -y htop
sudo -v ; curl https://rclone.org/install.sh | sudo bash
curl -L https://umbrel.sh | bash

```

## Install DentropyCloud Wireguard

``` bash
git clone https://gitlab.com/dentropy/dentropycloud-traefik.git
cd ./dentropycloud-traefik
cp env_example .env
vim .env
# Add IP address of server as for MY_DOMAIN
bash generate_docker_compose.sh
cd ./apps-umbrel/wireguard
docker-compose up -d

# GET IP ADDRESS OF HOST, THIS IS IMPORANT, WRITE IT DOWN
echo $(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)
# NOTE DOWN THIS IP ADDRESS, it should be
# 10.21.0.1
```

## Copy a config

``` bash
# All wireguard configs
# Please Update remote_host accordingly
remote_host=10.10.10.10 
remote_host=dentropy.local
echo remote_host
scp -r root@$remote_host:/srv/wireguard .
scp root@$remote_host:~/.config/rclone/rclone.conf .

# A single wireugard config
# Remember you can replace 1 with number 1 through 10
scp -r root@remote_host:/srv/wireguard/config/peer1 .
```

## Using Wireguard on Linux

Instructions to install [Wireguard](https://www.wireguard.com/install/)

``` bash
sudo ls /etc/wireguard
sudo cp peer1.conf /etc/wireguard
wg-quick up peer1
```

## Troubleshooting

``` bash

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' umbrel_wireguard

docker logs urbit_manager_1

docker logs urbit_app_proxy_1

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' urbit_app_proxy_1

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' urbit_manager_1

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' nginx

docker exec -it umbrel_wireguard bash

ssh -R 80:localhost:80 root@remote_host
```