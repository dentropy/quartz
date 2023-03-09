---
id: 9uZOSgMfl8D8zr3j1Pmtz
title: linux
desc: ''
updated: 1631840205367
created: 1628449250268
---
# linux
Linux Stuff
-----------

Big Linux Vectors
-----------------

*   RHCSA
*   kubernetes

Software
--------

*   ssh
*   sshfs
*   tar
*   nginx
*   VNC

Tutorials
---------

*   Mounting Drives
*   Set Static IP Address

Commands to Memorize
--------------------

*   rsync
*   du

Rename python to python3
------------------------

    sudo ln -s /usr/bin/python3 /usr/bin/python
    

[https://mycyberuniverse.com/how-fix-python-no-such-file-or-directory.html](https://mycyberuniverse.com/how-fix-python-no-such-file-or-directory.html)

DOS to UNIX endings
-------------------

*   [The second answer works like a charm](https://stackoverflow.com/questions/14372645/convert-dos2unix-line-endings-for-all-files-in-a-directory)

Get ports that are open
-----------------------

    sudo lsof -i -P -n | grep $port
    netstat -anp tcp | grep $port
    netstat -anp udp | grep $port
    

Add user as root {#add-user-as-root id="81cc2482-bb86-4b10-9083-76bcfbbbcf33"}
------------------------------------------------------------------------------

usermod -aG sudo tom

Permantly mount encrypted volume
--------------------------------

    lsblk
    cryptsetup luksDump /dev/sda2
    cryptsetup luksAddKey /dev/sda2
    
    
    [Source](https://www.golinuxcloud.com/mount-luks-encrypted-disk-partition-linux/)
    

Delete N lines from all files in directory with md
--------------------------------------------------

Order by size {#order-by-size id="5cbbbee5-53dd-4e6a-aac5-46f26bef9e3e"}
------------------------------------------------------------------------

[https://www.tecmint.com/list-files-ordered-by-size-in-linux/](https://www.tecmint.com/list-files-ordered-by-size-in-linux/)

Delete all files ending in md {#delete-all-files-ending-in-md id="57107095-058e-4b4f-9fc8-7468a13d9be7"}
--------------------------------------------------------------------------------------------------------

_daily.TODO.WhatToLearn_ dconf-editor
