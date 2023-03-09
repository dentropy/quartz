## Proof of concept backup and restore

``` bash
cd
sudo cp -r umbrel umbrel2
cd  umbrel2
docker-compose -f docker-compose.yml up -d
docker-compose -f docker-compose.tor.yml up -d
```

## Backup Umbrel
``` bash
## Stop Umbrel, via stopping all docker containers
sudo docker stop $(sudo docker ps -a -q)
sudo docker rm $(sudo docker ps -a -q)

## Create Tar Archive of Umbrel Directory
sudo tar cvpzf './'$(date +'%m-%d-%Y-%H-%M-%S')'-umbrel.tar.gz' ./umbrel

## Install RClone if you have not already
sudo -v ; curl https://rclone.org/install.sh | sudo bash

## Configure RClone
## Use MINIO for Vultr Object Storage
rclone config


## Use RCLONE to backup Tar Archive
rclone sync ./02-24-2023-08-14-53-umbrel.tar.gz "Vultr Object Storage":/02-24-2023-08-14-53-umbrel.tar.gz

## Validate that file is updated to Umbrel
rclone ls "Vultr Object Storage":/

## To see your RClone config
rclone config file
```

## Configure Umbrel on New Machine

``` bash
## Install Umbrel on new machine
curl -L https://umbrel.sh | bash

## Validate Umbrel works on new machine
## This is done by going to the IP address
## Make sure to make a temperary account to validate everything works


## Stop Umbrel on New Machine
cd ~/umbrel/scripts
./stop
docker ps -a
sudo docker stop $(sudo docker ps -a -q)
sudo docker rm $(sudo docker ps -a -q)
cd ~
mv umbrel umbrel-backup


## Install RClone on New Machine
sudo -v ; curl https://rclone.org/install.sh | sudo bash

## Configure RClone on New Machine
## There are two options here, copy your old config over, or setup from scratch
rclone config
## or copy and paste
mkdir ~/.config/
mkdir ~/.config/rclone
nano  ~/.config/rclone/rclone.conf
vim /root/.config/rclone/rclone.conf

## Check for umbrel backup
rclone config
# crtl+c
rclone ls "Vultr Object Storage":/

## Copy and extract old Umbrel Archive on new Machine
mkdir ~/restore
cd ~/restore
rclone copyto "Vultr Object Storage":/"02-24-2023-08-14-53-umbrel.tar.gz/02-24-2023-08-14-53-umbrel.tar.gz" '02-24-2023-08-14-53-umbrel.tar.gz'
mv umbrel ~
cd ~
rm -rf restore

## Unpack the Tar Ball
sudo tar -xvf '02-24-2023-08-14-53-umbrel.tar.gz' .


## Start umbrel from new folder on new machine
cd umbrel/scripts
bash start

## Go to IP address on new server and login
```

## Links

* [](docker.md#Stop%20and%20Remove%20ALL%20Docker%20Containers)
* [RClone](RClone.md)
* [tar](tar.md)