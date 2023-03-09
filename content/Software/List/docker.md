## [wiki.software.list.docker.tutorial](Docker%20Tutorial)

## Stop and Remove ALL Docker Containers

``` bash
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)


sudo docker stop $(sudo docker ps -a -q)
sudo docker rm $(sudo docker ps -a -q)
```

[Stop / remove all Docker containers (Example)](https://coderwall.com/p/ewk0mq/stop-remove-all-docker-containers)
[Docker: How to Stop and Remove All Containers at Once | CloudBees](https://www.cloudbees.com/blog/docker-how-to-stop-and-remove-all-containers-at-once)

## [Remove all exited containers](https://coderwall.com/p/zguz_w/docker-remove-all-exited-containers)


``` bash
docker ps -a | grep Exit | cut -d ' ' -f 1 | xargs sudo docker rm

# Created
docker ps -a | grep Created | cut -d ' ' -f 1 | xargs sudo docker rm
```   

## Install

``` bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo apt-get -y install docker-compose
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
```

[Install Docker Engine on Debian | Docker Documentation](https://docs.docker.com/engine/install/debian/)
[Run Docker as a non-root user – The Geek Diary](https://www.thegeekdiary.com/run-docker-as-a-non-root-user/)

## Measure RAM

```  bash
docker ps -q | xargs  docker stats --no-stream
```

[How to See Memory and CPU Usage for All Your Docker Containers on CentOS 6 | Christopher J. McClellan](https://christopherjmcclellan.wordpress.com/2017/07/22/docker-container-memory-usage/)

## Get IP Address

``` bash
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
```
[How to get a Docker container's IP address from the host - Stack Overflow](https://stackoverflow.com/questions/17157721/how-to-get-a-docker-containers-ip-address-from-the-host)

## How to upload to dockerhub

``` bash
# Add repo on docker account
docker login
docker push {username}}/{repo name}}
```  

## [TODO](../../../MyDendronExistence/Task%20manager/TODO.md)

* [Override named container with -oc or --override-container parameter · Issue #22811 · moby/moby](https://github.com/moby/moby/issues/22811)
* `--workdir`
* How inheritance works, 
  * [go-ethereum/Dockerfile at master · ethereum/go-ethereum · GitHub](https://github.com/ethereum/go-ethereum/blob/master/Dockerfile)
* Custom entry point scripts
  * [Running a custom script using entrypoint in docker-compose - Stack Overflow](https://stackoverflow.com/questions/45211594/running-a-custom-script-using-entrypoint-in-docker-compose)
* Better volume documentation
  * [Use volumes | Docker Documentation](https://docs.docker.com/storage/volumes/)
  * CIFS
  * NFS 
  * SSH!?!?!
* Custom networking
  * [Provide static IP to docker containers via docker-compose - Stack Overflow](https://stackoverflow.com/questions/39493490/provide-static-ip-to-docker-containers-via-docker-compose)
* dockerfile examples
  * [troubleshoot/Dockerfile · master · Paul Mullins / DentropyCloud · GitLab](https://gitlab.com/dentropy/DentropyCloud/-/blob/master/troubleshoot/Dockerfile)
* [Docker compose external volume path - Stack Overflow](https://stackoverflow.com/questions/47444533/docker-compose-external-volume-path) 
* [NFS or SMB and which method : docker](https://old.reddit.com/r/docker/comments/d6kznr/nfs_or_smb_and_which_method/)

### Outline

*   Create a docker container with a volume
*   Jump inside docker container and fuck with the volume
*   Backup volume
*   Delete volume
*   Restore container and volume

### Create container with volume

``` bash
docker volume create testvol
docker volume ls
docker volume inspect testvol
docker run -it \
    --name voltest \
    -v testvol:/testvol \
    ubuntu:latest
echo "I Like Pie" > /testvol/test.txt
cat /testvol/test.txt
# Should say "I Like Pie"
exit
```   

### Backup the docker volume to a tar file

    docker stop voltest
    mkdir ~/tmp-docker-backup 
    docker run --rm --volumes-from voltest \
      -v ~/tmp-docker-backup:/backup ubuntu bash \
      -c "cd /testvol && tar cvf /backup/docker-vol-backup.tar ."
    

### Remove the docker container and volume

    docker rm -f voltest
    docker volume rm testvol
    docker ps -a
    docker volume ls
    

### Restore the docker volume and container

    docker volume create testvol2
    docker run --rm -v testvol2:/recover -v ~/tmp-docker-backup:/backup ubuntu bash -c "cd /recover && tar xvf /backup/docker-vol-backup.tar"
    docker run -it \
      --name voltest2 \
      -v testvol2:/testbackup \
      ubuntu
    ls /testbackup
    cat  /testbackup/test.txt
    exit
    docker rm -f voltest2
    docker volume rm testvol2
    rm -r ~/tmp-docker-backup

## docker Links

* [How to Transfer/Move a Docker Image to Another System?](https://appfleet.com/blog/how-to-transfer-move-a-docker-image-to-another-system/)
* [How to pass arguments to entrypoint in docker-compose.yml - Stack Overflow](https://stackoverflow.com/questions/37366857/how-to-pass-arguments-to-entrypoint-in-docker-compose-yml)

## Docker NFS Research

* [NFS does not work with sqlite](https://old.reddit.com/r/sonarr/comments/jmagwb/docker_nfs_permissions_issue/)
* [May have to edit the containers themselves because NFS does not support changing permissions](https://stackoverflow.com/questions/53682810/how-to-solve-the-chown-permission-issue-of-postgresql-docker-container-when-moun)
* [NFS Daemon must be installed](https://askubuntu.com/questions/507983/nfs-kernel-daemon-no-support-in-current-kernel)
		- [12.04 - NFS kernel daemon: no support in current kernel - Ask Ubuntu](https://askubuntu.com/questions/507983/nfs-kernel-daemon-no-support-in-current-kernel)
* [FreeNAS has special settings I don't know about](https://old.reddit.com/r/docker/comments/e281ze/trying_to_mount_nfs_chmod_not_permitted/)
* [https://github.com/ehough/docker-nfs-server/issues/2](https://github.com/ehough/docker-nfs-server/issues/2)
* https://container42.com/2014/03/29/docker-quicktip-4-remote-volumes/

## Links

* [Software.List.koding](koding.md)