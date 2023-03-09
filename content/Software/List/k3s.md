---
id: i7FrYHzCHlPMjN77JHKS9
title: k3s
desc: ''
updated: 1628444413873
created: 1628444413873
---
# k3s
Install k3s.io

    mah_IP=192.168.3.186
    mah_USER=dentropy
    ssh-copy-id $mah_USER@$mah_IP
    
    # On remote server
    ssh $mah_USER@$mah_IP
    curl -sfL https://get.k3s.io | sh -
    sudo su
    cp /etc/rancher/k3s/k3s.yaml /home/dentropy/k3s.yaml
    cd /home/dentropy
    chown -R dentropy:dentropy .
    curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
    chmod 700 get_helm.sh
    ./get_helm.sh
    exit
    exit
    
    # On local machine
    scp dentropy@$mah_IP:~/k3s.yaml ~/.kube/config
    sed -i -e "s/127.0.0.1/$mah_IP/g" ~/.kube/config
    chmod 600 ~/.kube/config

    #!/bin/bash
    sudo su
    sudo apt -y update
    sudo apt install -y nfs-kernel-server
    sudo mkdir -p /mnt/nfsdir
    sudo chown nobody:nogroup /mnt/nfsdir
    sudo chmod 777 /mnt/nfsdir
    echo "/mnt/nfsdir -async,no_subtree_check *(rw,insecure,sync,no_subtree_check,no_root_squash)" >  /etc/exports
    sudo exportfs
    sudo systemctl restart nfs-kernel-server
