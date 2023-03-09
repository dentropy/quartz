---
id: NMffb7OaQfVzw13wWhcxi
title: LinuxAcadamy
desc: ''
updated: 1628449250523
created: 1628449250523
---
# LinuxAcadamy
General Stuff
-------------

Links
-----

*   Requirements
*   Lvmfornoobs

Linux Acadamy Notes
-------------------

RHCSA Objectives

Stuff I should go over
----------------------

*   Locate and interpret system log files and journals
*   Preserve system journals
*   Schedle tasks using at and cron

Stuff I still need to cover
---------------------------

*   Managed layered storage
*   Diagnose and correct file permission problems
*   Configure service clients
*   Install and update software packages from Red Hat Network, a remote repository, or from the local file system
*   Work with package module streams
*   Modify the system bootloader
*   Configure IPv4 and IPv6 addresses
*   Configure hostname resolution
*   Create, delete, and modify local user accounts
*   Change passwords and adjust password aging for local user accounts
*   Create, delete, and modify local groups and group memberships
*   Configure superuser access
*   EVERYTHING SELinux
*   Everything Firewall

Stuff to Memorize
-----------------

*   The Cron pattern
    
*   Name of important targets
    
*   ELI5 groups and users
    
    *   How to have a user as a member of multiple groups
    *   What is a sticky bit
    *   What is the fourth permission
*   Explain the different ways to reboot a machine
    
*   How to change root password when one has access to a machine
    
*   Explain how to discover and kill processes
    
*   How do I start services and run programs as specific users on linux
    

Requirements for RHCSA
----------------------

Files and Permissions
---------------------

*   How to output a command to a file
    
    *   New File
    *   Append
    *   Error / Not Error / Both
*   How to create a soft and hard link
    
*   How to create / untar a tar file
    
    *   encryption?
    *   What is the other program and how to use it?
*   What two programs are used to transfer files securely between machines?
    
*   Set-GID for folders
    

### Permissions

*   Permissions
    
    *   What are the three groups
    *   What is the fourth group
    *   What is the sticky bit
    *   How to add a file to multiple groups
    *   Can multiple users own a file?
    *   How does this hex stuff work?
    *   How to edit permissions using symbols rather than hex
    *   Write Protect?
*   Groups
    
    *   Add a group
    *   Add a user to a group
    *   How to change ownership of a file to just a grou
    *   How to list all groups
*   umask
    
    *   ELI5
    *   Where is it used?
    *   Where and how to change it?

How to find stuff
-----------------

*   Finding stuff
    
    *   How to search a man page
    *   What's this about numbered man pages?
    *   info stores documents where?

Rebooting into targests, SystemD, and you forgot your root password
-------------------------------------------------------------------

*   Shutdown
    
    *   How to reboot computer at specific time
        
    *   How to signal to other people on computer that shutdown is happening
        
    *   How to shutdown imediately
        
    *   How to boot to terminal / GUI
        
        *   Change default
*   What to do when you forget root password?
    
*   What commands are for managing running processess?
    
*   What is the command to manage KVM on the command line?
    
*   Where are logs stored?
    
    *   How to enable persistent logs?

Parition and Volume Management
------------------------------

*   Objectives:
    
    *   Create MBR and GPT paritions
    *   Put a file system on these paritions
    *   Mount / unmount file systems
    *   Delete these file systems and paritions
    *   Resize these paritions and file systems
    *   Create LVM Paritions accross multiple physical volumes
    *   Migrate LVM Parition data on a live system
    *   Extend and resize logical paritions
    *   Mount NFS and Samba file systems in what file for persistence?

Chapter 1 Commands
------------------

Use Inout Output Redirection {#use-inout-output-redirection id="3f06fd48-2237-488a-8278-478c7879eaa9"}
------------------------------------------------------------------------------------------------------

*   `Less` can be used to view files similar to cat
*   `>` can output a text into a file
*   `>>` if exists append to a file
*   `<` is like accepting input
*   `2> and 2>>` if error output that as well
*   `2>&1` Output working command to terminal
*   One can output to `dev/null` for death of the output
*   `chmod u+x` Use this cause it limits use to a specified user
*   `head` see first 10 lines of a file
*   `tail` last 10 lines of a file

grep
----

software.grep

Hard and Soft Links {#hard-and-soft-links id="524ec32b-6119-4e99-bc10-edc34673ba5c"}
------------------------------------------------------------------------------------

*   `ls -al` see the soft and hard links
    
*   `ln` used for hard and soft links
    
    *   default is hard
    *   `-s` is for soft links
    *   first feed true location then feed link location
    *   Can break symbolic links
*   Permissions of symbolic links
    
    *   Says has all permissions but doesn't actually have them
*   Hard Links
    
    *   Can not go between different file systems
    *   The permissions of a hard link are correct

Log in and Switch Users in Multiuser Targets
--------------------------------------------

*   `systemctl get-default`
    
*   How does one search history?
    
*   There is a file called .bash\\~profile~ besides .bashrc
    
    *   bash\\~profile~ is executed when su -l {username}} is run

[Log in and Switch Users in Multiuser Targets](#root/burNwJ6R3S8B)

Archive and Compress using tar, star, gzip, and bzip2 {#archive-and-compress-using-tar-star-gzip-and-bzip2 id="c098d998-93fc-42f7-9fe0-84aa3f1ac250"}
-----------------------------------------------------------------------------------------------------------------------------------------------------

Linux Tar Command

gzip / gunzip

star

Permissions {#permissions id="7031f8aa-3470-40f5-bfec-38fa6b6bf9f4"}
--------------------------------------------------------------------

knowledge link

*   `ls -l` shows bits
    
*   First bit says if directory
    
*   Next three user
    
*   Next three group
    
*   Next three other
    
*   Two ways to change permissions using `chmod` include symbolic and octal
    
    *   user, don't add anything
        
    *   For recusion use -R after setting permission using chmod
        
    *   Can do user and group at the same time
        
    *   Capital X is for directories to have execute rather than files
        
    *   group use `g`
        
    *   other use `o`
        
    *   all use `a`
        
    *   These commands can be chained for example `chmod ugo-r file` to remove read for user group and other, there is also `a` for all
        
        *   Remove other `chmod o-xr`
*   octal permissions
    
    *   read=4, write=2, execute=1
*   One can use which to find the location of an executable file and change the permissions
    
*   Use -s to execute as owner of file
    
    *   One can use +s or -s for the stickybit on symbolic notation
    *   Use 4 character, First character, 4=user, 2=group, 7=other
*   Write Protect
    
    *   Symbolic use +t

Groups {#groups id="8f87dd6f-5c38-4a28-baba-7904b5db2899"}
----------------------------------------------------------

*   `groupadd`
    
*   `getent group`
    
    *   `cat /etc/group`
*   `chown user:group file/directory` One can do :group to just do a group
    
*   `usermod -G <group> <user>` to add a user to a group
    
*   Have to log out and back in after privleges change
    

setuid and setgid
-----------------

*   stickybit stops accidentally deletion
    
    *   `chmod +t file`
*   `chmod u+s file`
    
*   `chmod 7777 file`
    

umask (user mask)
-----------------

*   default permissions on new files and folders
    
*   not persistent by default
    
*   Default permissions folder 777, file 666
    
*   Number for umask subtracts from default permissions based on hex notation
    
*   Change umask with `umask 0022`
    
*   Default umask is set in bashrc
    
    *   If user and group are the same a seperate nmask can be used
    *   Difference is privleged vs normal user
*   One can use umask in scripts
    

Locate, read, and use system documentation including man, info, and
-------------------------------------------------------------------

files in /usr/share/doc

*   We have to download a 3rd party program and use the programs documentation as part of the exam
    
*   `man 5 program_name` shows files and config files associated with program
    
*   `apropos program_name`
    
    *   One must index all man pages
    *   `mandb` will do that, will take a while
*   Alternative to man is info
    
    *   Searches /usr/share/info
        
    *   Info will open man page is no file in /usr/share/info
        
    *   There is a higharchy of pages when one uses info
        
    *   press n for next node
        
    *   press u to go back to top
        
    *   press p to go back one node
        
    *   Home and End keys are useful
        
    *   Press l for going back between node
        
    *   press t to go back to top
        
    *   **question mark key is a reminder of all these keys**
        
    *   Can navigate nodes by pressing enter
        
    *   Search using info
        
    *   info --apropos={Search Term}}
        
    *   Also check out /usr/share/doc
        
    *   `locate file_name`
        
        *   Searches cached database
        *   Update chached database by `updatedb`
        *   `yum search search_term` is a cool command
        *   locate cache is updated with cron job
    *   `which command_name` show where commands are located
        
    *   `whatis command_name` search man pages
        
    *   `whereis command_name`
        
    *   `rpm -qd packagename` search all documentation
        
        *   q=querry
        *   d=documentation

Finding files with Locate and Find
----------------------------------

    sudo yum install mlocate
    sudo yum install httpd
    updatedb
    

*   One can search for files based on the permissions
    
*   Remember the id command is a thing and users have a unique ID number
    
*   One can delete all files from a specific use
    
    *   `find / -user jefff -type file -exec cat {} \;`
    *   `find / -user jefff -type file -exec cp {} /home/mary \;`
*   The Find Command
    
    *   `find {directory}} {-name -directory -user -mtime}} search-term`

`stat` provides info on a file

    find /etc -name motd
    find /etc -user <username>
    find /etc -mtime -3 # File files modified in last three days, one can use + for more than three days
    stat <filename>
    # There are many ways to use find so use the man page
    find / -user jeff -type f # f for file d for directory
    find / -user jeff -type f -exec cat {} # Execute command
    

Chapter 2, Operate Running Systems
----------------------------------

Boot, Reboot and Shutdown a System {#boot-reboot-and-shutdown-a-system id="2020-12-22-Boot-Reboot-and-Shutdown-a-System"}
-------------------------------------------------------------------------------------------------------------------------

*   Welcome to SystemD which replaced init and other stuff

Chapter 3. Operate Running Systems
----------------------------------

Boot, Reboot and Shutdown a System {#boot-reboot-and-shutdown-a-system}
-----------------------------------------------------------------------

*   `reboot` to reboot
    
    *   actually run `systemctl reboot`
*   `init 0` shutdown, `init 6` reboot
    
*   `shutdown`
    
    *   `-r`
        
        *   reboots can do `+5` for 5 minutes and a string at the end can send message to all users
        *   `wall` command posts message to all other users
        *   Can say now to reboot `now`
        *   Can put int 24 hour time for example `shutdown -r 00:00`
    *   `-P`
        
        *   Power off
    *   `-c`
        
        *   Cancels the shutdown
    *   `systemctl halt`
        
        *   or halt
        *   or `shutdown -h` then can put time at the end or now
        *   Can put now at the end too
*   targets are located in `/usr/lib`
    
*   `w` tells you who is logged in
    
*   Not use run levels anymore
    
    *   systemd has target s in /usr/lib/systemd/system
*   What is a target?
    
    *   Everything is managed by Systemd
        
    *   Systemd has parallelization boot up
        
    *   What is a unit configuration file?
        
        *   In /usr/lib/systemd
        *   Services like sshd have dependencies
*   `systemctl list-dependencies` <target>
    
    *   Target is a grouping of configuration files
*   systemctl get-default
    
    *   Shows current target
*   Multi-user.target?
    
    *   For multiple users to be sshed in
*   graphical.target?
    
*   emergency.target?
    
    *   Mount file systems as read only
*   Target has to be configured so system can move in and out of it
    
*   AllowIsolate means?
    

Interrupt the Boot Process to gain access to a system
-----------------------------------------------------

*   Objectives
    
    *   When you forget root password how do you change it?
*   What to do when you forget your root password
    
*   In edit prompt go to linux line and add at the end, use end key, rd.break, ctrl+x to reboot
    
    *   /sysroot is our old drive
    *   `mount -oremount,rw /sysroot`
    *   `chroot /sysroot`
    *   `passwd` will not work
    *   Something is a problem cause of SELinux
    *   `touch /.autorelabel`
    *   Now reboot into system be exiting out of stuff

Identify CPU Memory Intensive Processes, Adjust process priority and
--------------------------------------------------------------------

kill processes

*   Objective
    
    *   What key commands need to be memorized for this section?
*   ps
    
*   pgrep, basicall ps and gre but better formatted
    
    *   \-l flag for name
    *   \-u flag for user
    *   \-v flag for inverse of a user
*   pkill
    
    *   Kills stuff by name
    *   \-t flag to kill a tty
*   What is a kill signal? `kill -l` for a list of all signals. Default is 15 SIGTERM. -9 -SIGKILL to kill it imediately. Checkpdf for more signals to memorize.
    
*   Kick out ssh user `pkill -u USER sshd`
    

### Running stuff in the backgroud, pausing and starting again

    (while true; do echo -n "My Program" >> ~/output.file; sleep 1; done) &
    

*   `jobs`
    
*   pausing a job `kill -SIGSTOP %1`
    
*   starting a job again `kill -SIGCONT %1`
    
*   `ps axu` Note the BSD syntax
    
    *   Also look up AIX format in man page
*   Nice level is all abour priority
    

### Niceness

*   Nice allows up to set a priority for a process.
*   Lower level higher priority
*   \-20 most favoriable or 19 for least favoriable
*   Niceness is more a sugestion
*   `df -h` to see storage

    # Create a 1 gig file
    dd if/dev/zip of=root/test.file bs=1M count=1024
    
    ps axo pid,comm,nice | grep httpd
    nice -n 0 httpd
    
    ## How to change nice on a running program
    renice -n 10 {Process ID}}
    renice -n 10 $(pgrep httpd) # $() is called a subshell
    time nice -n {19 or -20}} tar -cvf test.tar test.file
    

*   `time` followed by a command measures how long the command takes
    
*   `upteime` show how long server has been up
    
    *   Calculate percentage of processing power
    *   `cat /proc/cpuinfo` See how many CPU's you have
    *   Proc shows info from kernel
    *   `(while true; do echo -n "My Program" >> ~/output.file; done) &` for load testing
    *   Calculate load
    *   Get number of CPU's `cat /proc/cpuinfo | grep "model name" | wc -l`
    *   What does -n do for echo?
*   Welcome to Top
    
    *   Use keys l t and m
    *   Can change niceness from here, press r then type PID
    *   Press k to kill a process by PID
    *   `top -n`, number of times to update and back to terminal
    *   `top -d`, seconds between updates

Locate and Interpret System Log Files and Journals
--------------------------------------------------

*   Use `tail -f` to see updates in real time
    
    *   Do on secure file in /var/log to see people logging in
    *   `tail -n` for number of lines, same for argument for head
*   `journald`
    
    *   `man systemd journald`
        
    *   `journalctl`, state of system since boot
        
    *   In /run/log/journal
        
    *   /run is temperary storage
        
    *   For persistence systemd
        
        *   `/etc/systemd/journald.conf`
        *   Change Storage to persistent
        *   /var/log/jourbal is new location
    *   `journalctl -n` 10 latest intries
        
    *   `-x` flag provides a little more information
        
    *   `-f` shows real time updates
        
    *   \\~SYSTEM~\\~UNIT~=$WHATEVER
        
*   rsyslog creates log files on our system
    
    *   /etc/rsyslog.conf

Start and Stop Virtual Machines
-------------------------------

*   Uses virt-manager
    
*   `virsh`
    
    *   `list`
    *   `list -all`
    *   `shutdown {name of VM}}`
    *   `start {name of VM}}`

Start, Stop and Check the Status of Network Services {#start-stop-and-check-the-status-of-network-services id="2020-12-22-Start-Stop-and-Check-the-Status-of-Network-Services"}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*   `systemctl list-units | grep network`
*   `system restart network.service` .service is assumed when not added
*   We want to seperate services across multiple servers
*   `systemctl is-enabled nginx` check if a service is enabled
*   enable and disable

Securely Transfer Files Between Systems
---------------------------------------

*   We learn scp (secure copy) and sftp
    
*   `sftp user@ip_address`, part of SSH
    
    *   `get filename` download from remote machine
    *   `put filename` upload to remote machine, uses local directory

Chapter 4
---------

Create and Remove Physical Volumes, Assign Physical VOlumes to Volume
---------------------------------------------------------------------

Groups and Create and Delete Logical Volumes

*   LVM (Logical Volume Manager)
    
*   Use gdisk but use LVM GUID label
    
*   Volume Groups?
    
    *   `vgcreate {name}} /dev/WHATEVER1 /dev/WHATEVER2`
    *   `lvcreate -n {name}} -L 10G {name volumegroup, from above}}`
*   One can create and edit file systems on LVM
    
    *   Some file systems can not be edited
*   `lvremove`
    
*   `lvdisplay`
    
*   Remove volume group
    
*   `vgremove`
    
*   `pvremove`
    

Configure systems to mount file system at boot by Universal Unique ID
---------------------------------------------------------------------

(UUID) or label

*   Create a label
    
    *   `xfs_admin -L {NAME}} /dev/WHATEVER`
    *   `xfs_admin -l` to check label
    *   `tune2fs -L {NAME}} /dev/WHATEVER` #ext4 file name
*   edit `/etc/fstab`
    
    *   Everything is space seperated
*   `mkdir /mnt/{mount1,mount2}` <-- Real command
    
*   `mount -a`, mount from /etc/fstab
    
*   What are the colums in the /etc/fstab file?
    

Add New Patitions and Logical Volumes and Swap to a System
----------------------------------------------------------

Non-Destructively

    free -m # Can see Swap, 2-2.5 times free memory
    # Swap is LVM type partition
    # Create LVM, with vgcreate and lvcreate
    mkswap /dev/{lvm name}}/{name partition}}
    
    # Enable swap
    swapon /dev/{lvm name}}/{name partition}}
    free- -n # Check if it works
    
    # Edit /etc/fstab
    /dev/{lvm name}}/{name partition}} swap swap 0 0
    
    # Switch on fstab without reboot
    swapon -a
    free -a # Check if it works
    
    # Can have multiple swap disks and linux will use the total storage of all of them
    
    blkid
    
    # Edit /etc/fstab
    UUID={UUID}} swap swap 0 0
    
    swapoff /dev/WHATEVER
    swapoff -a
    
    swapon -a # Apply swap from /etc/fstab
    
    cat /proc/swaps
    

Chapter 5, coppied to knowledge.linux.partitions.org
====================================================

Create, Mount, Unmount, and Use VFAT, EXT4 and XFS File Systems
---------------------------------------------------------------

*   Objectives:
    
    *   Create MBR and GPT paritions
    *   Put a file system on these paritions
    *   Mount / unmount file systems
    *   Delete these file systems and paritions

fdisk is for managing MBR partitions

    fdisk xvdf
    
    mkfs.vfat /dev/$WHATEVER
    
    fsck.vfat
    
    df -h
    
    dump2fs /dev/$WHATEVER
    
    blkid # Get UUID of block device
    
    tune2fs -L LABEL_NAME /dev/$WHATEVER
    
    mkfir.xfs -f /dev/$WHATEVER
    
    mkdir /mnt/mount-location
    mount /dev/$WHATEVER /mnt/mount-location
    umount /mnt/mount-location
    
    xfs_info /dev/$WHATEVER
    
    xfs_repair /dev/$WHATEVER
    
    gdisk /dev/$WHATEVER
    
    ## To delete a parition table
    wipefs /dev/$WHATEVER
    

VFAT is for windows compatibility

What happens when I reboot

One can run out of i nodes and not be able to write

What is a LVM (logical volume manager)?

xfs, really fast and supports parallelization

/etc/fstab  
/dev/WHATEVER /mnt/mount-location {file-system}} defaults 1 2

Mount and Unmount CIFS and NFS network file systems
---------------------------------------------------

    # CIFS? Common Intenret File System
    # Works with Windows and Linux
    # Samba is an example of CIFS
    # Next cert is where people learn how to create and manage these servers
    
    sudo yum install samba-client cifs-utils nfs-utils
    
    # In exam always mount persistently
    
    smbclient -L {IP Address}}
    mkdir -p /mnt/{sambashare, nfsshare} # Real Linux Command
    mount -t cifs -o username={username}} //{IP Address}}/{Share Name}} {Mount Location}}
    mount -t nfs {ip address}}:{Share}} {Mount Location}}
    df -h
    
    nano /etc/fstab
    #samba
    //{IP ADDRESS}}/{Share Name}}  {Mount Location}} cifs username={user}}, password={password}}
    # NFS
    {IP Address}}:/{Share Name}} {Mount Location}} nfs defaults 0 0
    
    ## reset mount from /etc/fstab
    mount -a
    

Extend Existing Logical Volumes
-------------------------------

    cd /dev
    # Should see a bunch of aditional devices
    fdisk /dev/{device}}
    # Make sure to label device LVM
    pvcreate /dev/{device}}
    pvdisplay
    vsgreate {name}} /dev/{device}}
    lvcreate -n {new name}} -L {Size}G {name}}
    mkfs -t xfs /dev/{name}}/{new name}}
    mount /dev/{name}}/{new name}} {Mount Location}}
    df -h
    # With logical volumes you can add and remove phyiscal volumes without interupting the data on the volume
    gdisk /dev/{new device}}
    # Use linux LVM code
    vsextend {name}} /dev/{new device}}
    
    # Copy from one thing to another
    pvmove /dev/{device}} # To remove data from
    
    # Remove Phyiscal device
    vgreduce {name}} /dev/{device}} # Device you want to remove
    
    # Congradualtions you just did a live data migration
    
    # Now to actually extend
    
    lvextend -L {Size}}G /dev/{name}}/{new name}}  # Change size
    lvextend -L +{Size}}G /dev/{name}}/{new name}} # Add
    # Wait the file system is still fucked
    
    xfs_growfs {Mount Point}}
    # For ext4 resize2fs
    
    lvextend -l +50%FREE /dev/{name}}/{new name}} # Take up 50% of aditional space
    

Create and Configure Set-GIT Directories for Collaboration
----------------------------------------------------------

    groups user
    groups root
    
    # Set-GID on directory and the permissions for new files created within will inheret
    # UID? - User ID
    # GID? - Group ID
    
    mkdir {finance,it}  
    chmod g+s finance
    groupadd finance
    chown :finance finance
    chmod g+wX -R finace
    ls -al
    

Create and Manage Access Control Lists (ACLs)
---------------------------------------------

    #Not supported by most file systems by default are XFS and EXT4
    # Use ACLs when you want more fine grande permission control than groups and users
    
    getfacl {file}}
    
    setfacl -m u:{username}}:{sembolic permissions such as example rw}}
    # ls -l, has plus to show ACL stuff active
    
    # chmod does not modify ACL, the mask can stop the ACL from doing what it wants
    
    # Why would group ID change
    
    # Default ACL
    
    setfacl -d -m u:{user}}:{Permissions}} directory # -d is for default
    setfacl --remove-default {directory}} # can also use -x
    
    # How to remove permissions for specifc users and groups for a firectory or file
    # -R for recursion
    # One can skip the user or group for a acl to set default permissions
    

Diagnose and Correct File Permission Problems
---------------------------------------------

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
    

Start and Stop Services and Configure Services to Start Automatically
---------------------------------------------------------------------

at boot

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
    

Chapter 7, Paritions, Filesystems, and LVM for Noobs {#paritions-filesystems-and-lvm-for-noobs}
-----------------------------------------------------------------------------------------------

How to Parition
---------------

*   First check what is up on your system with `df -h`
*   Devices can be found listed at `/dev/`.
*   Two tools can be used for making paritions `fdisk` and `gdisk`

Now to put a file system in the parition
----------------------------------------

    mkfir.xfs -f /dev/{WHATEVER}
    mkfs.vfat /dev/{WHATEVER}
    

Make me some LVM
----------------

    # LVM let's you create super large disks by creating file paritions that span multiple disks
    
    # First we need a physical volume groult
    pvcreate /dev/sdb1
    
    # To see existing physical volumes
    pvdisplay
    
    # Now we need a volume group based on physical volumes
    vgcreate {volume_group_name}} /dev/{device}}
    
    # After we have a volume group we need a logical volume for our system to actually use
    lvcreate -n {logical_volume_name}} -L {Size}G {volume_group_name}}
    
    # Now we can put a file system on the logical volume
    mkfs -t xfs /dev/{name}}/{new name}}
    

LVM needs modifications FUCK
----------------------------
