---
id: fWwKRILndmdUjPoasvi0I
title: targets
desc: ''
updated: 1628449250424
created: 1628449250424
---
# targets
Linux Targets
-------------

Log in and Switch Users in Multiuser Targets {#log-in-and-switch-users-in-multiuser-targets id="b82b4d87-7671-4c63-8f1d-d53798823d92"}
--------------------------------------------------------------------------------------------------------------------------------------

*   `systemctl get-default`
    
*   How does one search history?
    
*   There is a file called .bash\\~profile~ besides .bashrc
    
    *   bash\\~profile~ is executed when su -l {username}} is run

Boot systems into Different Targets Manually {#boot-systems-into-different-targets-manually id="2020-12-22-Boot-systems-into-Different-Targets-Manually"}
---------------------------------------------------------------------------------------------------------------------------------------------------------

*   `systemctl -t help` shows unit configuration files
    
*   `cd /usr/lub/systemd/system` are where all system d files are stored
    
    *   Other stuff in /etc/systemd/system
*   WantedBy in service files adds itself as part of dependency
    
*   `systemctl list-dependiencies multi-user.target` systemctl get-default systemctl set-default $WHATEVER.target
    
*   List popular targets
    
    *   multi-user.target
    *   graphical.target
    *   emergency.target
    *   rescue.target
    *   reboot.target
*   `systemctl isolate multi-user.target` switch target on live system
    

### Edit Grub at boot

*   Objectives
    
    *   Boot into terminal by default
*   Boot system then press e to edit
    
*   Edit the file to the right target
