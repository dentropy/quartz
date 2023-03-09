---
id: Kn9771WpnRuLEgmwdn3pJ
title: kvm virt-manager
desc: ''
updated: 1628449250423
created: 1628449250423
---
# kvm virt-manager
spice-guest-tools
-----------------

[vnc - virt-manager copy paste functionality to the vm - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/109117/virt-manager-copy-paste-functionality-to-the-vm)

Install VirtManager
-------------------

[https://www.tecmint.com/install-kvm-on-ubuntu/](https://www.tecmint.com/install-kvm-on-ubuntu/)

[How To Backup A Virt-Manager Virtual Machine On Linux](https://www.addictivetips.com/ubuntu-linux-tips/backup-a-virt-manager-virtual-machine-on-linux/)

[Linux list a KVM vm guest using virsh command - nixCraft](https://www.cyberciti.biz/faq/linux-list-a-kvm-vm-guest-using-virsh-command/)

*   Where are images stored?
    *   /var/lib/libvirt/images
*   List all virtual machines
    *   `virsh list --all`
*   Backup xml and stuff
    *   `virsh dumpxml sled9 > sled9.xml`

    for vm_name in $(virsh list --all --name)
    do
    virsh dumpxml $vm_name > $vm_name.xml
    done

    for vm_name in $(virsh list --all --name)
    do
    virsh dumpxml $vm_name > $vm_name.xml
    done

    for f in $(ls *xml); 
    do 
      sed -i 's/\/var\/lib\/libvirt\/images/\/media\/dentropy\/LinuxStuff\/images/g' $f ; 
    done;
    
    
    for f in $(ls *xml); 
    do 
      virsh define --file $f ; 
    done;
    

_TheFuture.WantToLearn_

Remote connection for virt-manager

*   XForwarding works like a charm

Networking for virt-manager

Backup and restore VM's

*   [https://techsoftcenter.com/how-to-kvm-backup-and-restore-in-linux/](https://techsoftcenter.com/how-to-kvm-backup-and-restore-in-linux/)
