---
id: H7rhI298P4onvzP197Qqd
title: Boot Process  Recovery  Shutdown  Kernel stuff
desc: ''
updated: 1628449250322
created: 1628449250322
---
# Boot Process / Recovery / Shutdown / Kernel stuff
`reboot` to reboot

*   actually run `systemctl reboot`

`init 0` shutdown, `init 6` reboot

`shutdown`

`-r`

*   reboots can do `+5` for 5 minutes and a string at the end can send message to all users
*   `wall` command posts message to all other users
*   Can say now to reboot `now`
*   Can put int 24 hour time for example `shutdown -r 00:00`

`-P`

*   Power off

`-c`

*   Cancels the shutdown

`systemctl halt`

*   or halt
*   or `shutdown -h` then can put time at the end or now
*   Can put now at the end too

targets are located in `/usr/lib`

`w` tells you who is logged in

Not use run levels anymore

*   systemd has target s in /usr/lib/systemd/system

What is a target?

Everything is managed by Systemd

Systemd has parallelization boot up

What is a unit configuration file?

*   In /usr/lib/systemd
*   Services like sshd have dependencies

`systemctl list-dependencies` <target>

*   Target is a grouping of configuration files

systemctl get-default

*   Shows current target

Multi-user.target?

*   For multiple users to be sshed in

graphical.target?

emergency.target?

*   Mount file systems as read only

Target has to be configured so system can move in and out of it

AllowIsolate means?

Interrupt the Boot Process to gain access to a system
-----------------------------------------------------

Objectives

*   When you forget root password how do you change it?

What to do when you forget your root password

In edit prompt go to linux line and add at the end, use end key, rd.break, ctrl+x to reboot

*   /sysroot is our old drive
*   `mount -oremount,rw /sysroot`
*   `chroot /sysroot`
*   `passwd` will not work
*   Something is a problem cause of SELinux
*   `touch /.autorelabel`
*   Now reboot into system be exiting out of stuff
