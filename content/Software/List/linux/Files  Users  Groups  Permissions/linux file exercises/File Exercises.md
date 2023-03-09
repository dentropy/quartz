---
id: nZA4vVDUIsYce0evX8MtQ
title: File Exercises
desc: ''
updated: 1628449250527
created: 1628449250527
---
# File Exercises
*   How to check who owns a file?
*   How to check what group a file belongs to?
*   How to change user that owns a file?
*   How to change group that owns a file?
*   What does each permission 1-7 mean?
*   What permissions should ssh files have?
    *   600
*   What ways can you set the sticky bit?
    *   `chmod u+s ` , `chmod g+s` , `chmod +t`
*   ACLs
    *   How to get ACL for a firectory?
        *   `getfacl $DIR`
    *   How to give a specific user permissions to a directory?
        *   `setfacl -R -m u:$USER:rwx $DIR`
    *   How to give a specific group permissions to a directory?
        *   `setfacl -R -m g:$GROUP:rwx $DIR`
    *   How to recursively set a ACL
        *   `setfacl -R -m …`
    *   How to change ACL for new file that are created
        *   `setfacl -m d:`
*   umask
    *   What is the max setting for umask files?
    *   What is the max setting for umask directories?
    *   What is the default umask setting
        *   0022
