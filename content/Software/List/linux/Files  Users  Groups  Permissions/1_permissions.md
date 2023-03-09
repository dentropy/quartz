---
id: zl0OCqEoA7naTgeSMGHhK
title: 1_permissions
desc: ''
updated: 1628449250427
created: 1628449250427
---
# permissions
Permissions
-----------

[Archive and Compress using tar, star, gzip, and bzip2](#root/aLIGw1bK9g5V)

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
    

Groups
------

[Groups](#root/DqsK6sGCpuuL) [groups](#root/SOPocaJfd7KS)

*   `groupadd`
    
*   `getent group`
    
    *   `cat /etc/group`
*   `chown user:group file/directory` One can do :group to just do a group
    
*   `usermod -G <group> <user>` to add a user to a group
    
*   Have to log out and back in after privleges change
    

setuid and setgid {#setuid-and-setgid}
--------------------------------------

*   stickybit stops accidentally deletion
    
    *   `chmod +t file`
*   `chmod u+s file`
    
*   `chmod 7777 file`
    

Diagnose and Correct File Permission Problems
---------------------------------------------
