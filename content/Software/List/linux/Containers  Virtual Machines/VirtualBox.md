---
id: RyhNJo2YG7I5BOdMFTMUS
title: VirtualBox
desc: ''
updated: 1628449250422
created: 1628449250422
---

## Fix Screen Size

VM Settings » Display » Screen » Graphics Controller = VBoxVGA.
[virtualbox.org • View topic - Guest screen too small](https://forums.virtualbox.org/viewtopic.php?f=8&t=91128)

------ 

[virtualbox - AMD-V is being used by another hypervisor. (VERR\_SVM\_IN\_USE) - Ask Ubuntu](https://askubuntu.com/questions/403591/amd-v-is-being-used-by-another-hypervisor-verr-svm-in-use)

How do I resize a Virtual Box Partition

[http://linuxpitstop.com/install-and-use-command-line-tool-vboxmanage-on-ubuntu-16-04/](http://linuxpitstop.com/install-and-use-command-line-tool-vboxmanage-on-ubuntu-16-04/)

[http://derekmolloy.ie/resize-a-virtualbox-disk/](http://derekmolloy.ie/resize-a-virtualbox-disk/)

*   error with VBoxManage not copying

    # https://wiki.manjaro.org/index.php/VirtualBox
    # modprobe vboxdrv
    # https://wiki.archlinux.org/index.php/VirtualBox#Sign_modules
    # https://docs.syncthing.net/users/autostart.html#linux
    # https://bbs.archlinux.org/viewtopic.php?id=179944
    # https://linuxhint.com/install-virtualbox-arch-linux/

[How does bridged networking work in Virtualbox \[solved\] / Newbie Corner / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=233794)

\*\*\*\*\* NEED THESE MODULES

    vboxdrv
    vboxnetadp
    vboxnetflt
    ******

    sudo ip link add name vbox type bridge
    sudo ip link set vbox up
    sudo ip link set enp4s0 up
    sudo ip link set enp4s0 master vbox
    sudo dhclient vbox

    sudo nmcli connection add type bridge ifname br0 stp no
    nmcli connection add type bridge-slave ifname enp30s0 master br0

    # https://www.2daygeek.com/enable-disable-up-down-nic-network-interface-port-linux/
    apt install -y network-manager
    apt install -y ifupdown
    nmtui
