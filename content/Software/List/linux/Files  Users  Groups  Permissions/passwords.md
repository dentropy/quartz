---
id: ZXpW1LUJocoRPt3QWXt3U
title: passwords
desc: ''
updated: 1628449250431
created: 1628449250431
---
# passwords
[Reset root password when you forget it](https://www.theurbanpenguin.com/reset-root-password-rhel-8/)

    # On OS Selection Screen press "CTRL+e"
    # Navigate to the line starting with "linux" and press "CTRL+e" to edit the end of the line adding rc.break to it
    # Press "CTRL+X" to enter a shell
    mount -o remount,rw /sysroot
    chroot /sysroot
    #echo 'root:Password1 | chpasswd'
    passwd
    touch /.autorelabel
    exit 
    exit
    logout

[Setting Password Settings](https://www.techrepublic.com/article/how-to-manage-linux-password-expiry-with-the-chage-command/)

    # Validity
    chage # For single user, look up man page
    # EDIT /etc/login.defs
    
    # Set starting UID for new users
    # Edit /etc/default/useradd
    
    # Change default UID for new accounts using `useradd`
    # EDIT /etc/login.defs
