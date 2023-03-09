---
id: 8cwWSEcvPmQtIFJLj3zwv
title: Networking
desc: ''
updated: 1667333049907
created: 1628449250323
---
# Networking
Linux Networking
----------------

[ip route add network command for Linux explained - nixCraft](https://www.cyberciti.biz/faq/ip-route-add-network-command-for-linux-explained/)

[server - KVM Bridged Network Not Working - Ask Ubuntu](https://askubuntu.com/questions/179508/kvm-bridged-network-not-working)

[NetworkMonitoringBridge - Community Help Wiki](https://help.ubuntu.com/community/NetworkMonitoringBridge)

Start, Stop and Check the Status of Network Services
----------------------------------------------------

*   `nmtui`
*   `nmcli`
*   `systemctl list-units | grep network`
*   `system restart network.service` .service is assumed when not added
*   We want to seperate services across multiple servers
*   `systemctl is-enabled nginx` check if a service is enabled
*   enable and disable
*   [6 different commands to restart network in RHEL/CentOS 7/8 | GoLinuxCloud](https://www.golinuxcloud.com/centos-restart-network/)

VLSM
----

128 64 32 16 8 4 2 1 128 192 224 240 248 252 254 255 /25 /26 /27 /28 /29 /30 /31 /32 126 62 30 14 6 2

![](api/images/CpF95Xo6Qe0f/00a45b0621c58fcbe4cbb4142ee2b334.png)

Software
--------

*   Nebula
*   wireguard

Linux Networking
----------------

*   There exists a cli tool for configuring networking
*   The tool is called \`\`\`\`nmtui\`\`\`\`
*   sudo networkmanager

Chapter 6, Configure Networking and Hostname Resolution Statically or Dynamically
---------------------------------------------------------------------------------

Troubleshooting

    ip addr
    ip addr show {device name}}
    ip -s link show {divice name}}# Show statistic information
    ping -c5 {ip address}} # Only does it 5 times
    tracepath {ip address}}
    traceroute {ip address}}
    netstat ## works but is old
    
    ss -a ## show all listening and established connections
    # -t for TCP
    # -u for UDP
    # -n
    
    # Network Manager
    ls /sys/class/net
    nmclie dev status
    nm-connection-editor # GUI app
    nmtui
    nmcli con show # --active
    nmcli con add help
    nmcli con add con-name "mycon" autoconnect yes type ethernet ifname {device, can press tab}} ip4 {Ip address}} gw3 {gateway}}
    nmclie {up or down}} {device name}}
    nmclie con mod "{Device name}}" # Tab way to victory
    nmclie con delete {Divice name}}
    
    # /etc/resolv.conf
    
    # /etc/nsswitch.conf
    # Modify "hosts:" To change order of DNS
    
    # Changing hostname
    hostnamectl
    hostnamectl set-hostname dentropyserver.com
    hostnamectl status
    # ssh will try and connect to all hostnames in /etc/resolv.conf search
    
    cat /etc/sysconfig/network-scripts/ifcfg-{WHATEVER}}
    
    getent hosts {hostname}}
    

Schedule Tasks Using at and cron
--------------------------------

    yum install at
    systemctl enable atd
    systemctl start atd
    
    at now +t minutes
    at 12:00am
    # Type command you want at that time
    
    atq # Queued jobs
    atrm {job number}}
    
    at now +1 minute
    # > logger "The systems current uptime is $(uptime)"
    # Press ctrl+d twice to confirm the job
    
    # Search "at" in /etc
    # at.deny and cron.deny block users
    # There is also at.allow and cron.allow but you need to add those
    
    # crontab and system cron are different
    # systemcon is in /etc
    # do not use crontab file anymore
    
    # There are many cron directories in /etc some labled daily, hourly, monthly, and weekly
    # Put commands in those folders for obious reasons
    # in /etc/cron.d
    
    rpm -qc {application}}
    
    # anacrontab
    # anacron checks if jobs have been run and if the machine was off runs the job
    # anacron jobs have to be in cron.d
    
    cd /var/spool/anacron # Shows when things were last executed
    

Start and Stop Services and Configure Services to Start Automatically at boot
-----------------------------------------------------------------------------

How do I attach different services to different targets?

    yum install httpd
    systemctl status httpd
    systemctl start httpd
    systemctl is-enabled httpd
    systemctl list-unit-files --type=service | grep httpd
    systemctl get-default # Current target
    systemctl list-dependencies | grep httpd
    systemctl enable httpd
    
    # Determine if started by target
    cd /etc/systemd/system/multi-user.target.wants/
    systemctl list-dependencies multi-user.target | grep httpd
    systemctl list-dependencies graphical.target  | grep httpd
    
    ## Reboot into seperate targets
    
    systemctl get-default
    systemctl set-default {target}}
    

Install Red Hat Enterprise Linux Automatically Usinh Kickstart
--------------------------------------------------------------

    # TODO too lazy
    

Configure a Physical Machine to Host Virtual Guests
---------------------------------------------------

    sudo su -
    # qemu does the actual virtualization
    # In advanced PDF
    yum install virt-manager qemu-kvm qemu-img
    yum install libvirt libvert-python python-virtinst libvirt-client
    systemctl enable libvirtd
    systemctl start libvirtd
    virsh
    

Install Red Hat Enterprise Linux Systems as Virtual Guests
----------------------------------------------------------

Use virt-manager to setup a VM Networking does not work

    ls /sys/class/net
    nmclie con show
    cd /etc/sysconfig/network-scripts
    cat ifcfg-ens3
    nmclie con up en3
    # Networking should work now
    ip addr
    nmclie con mod "en3" connection.autoconnect yes
    # VM Networking should start at boot now
    

Configure Systems to Lauch Virtual Machines at Boot
---------------------------------------------------

    sudo su -
    systemctl status libvirtd
    virsh
    ## The following commands are in a virsh terminal
    list --all
    autostart {name of VM}}
    

Configure Network Services to Start Automatically at Boot
---------------------------------------------------------

    systemctl list-units | grep network.target
    systemctl list-dependencies multi-user.target | grep network
    cd /etc/sysconfig/network-scripts
    nmcli con show
    cat ifcfs-{Device name}}
    nmcli con mod "{Device name}}" connection.autoconnect yes
    cat ifcfs-{Device name}}
    

Configure a System to Use Time Services
---------------------------------------

    timedatectl # Shows system time
    man timedatectl
    timedatectl set-ntp {true/false}}
    timedatectl list-timezones
    tzselect # Helps find your time zone
    timedatectl set-timezone {time zone}}
    timedatectl set-time 12:12:12
    
    # NTP uses cronyd
    systemctl status chronyd
    chronyc sources -v # Check if NTP out of sync
    systemctl restart chronyd
    # Stratum is number of hops
    chronyc tracking
    # NPT slowly changes time to not break applications
    
    # Change Time Servers
    vim /etc/chrony.conf
    # One can edit servers here
    # Mentioned puppet and importance of time
    # iburst is default option
    
    # How to apply changes to chrony.conf
    systemctl restart chronyd
    
    chronyc sources -v
    # Question marks are bad
    
    timedatectl
