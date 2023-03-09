---
id: 9k2uUuNOWC1u7dJ3kRfTY
title: permissions
desc: ''
updated: 1628449250431
created: 1628449250431
---
# permissions
[Understanding Linux File Permissions - Linux.com](https://www.linux.com/training-tutorials/understanding-linux-file-permissions/)

*   Owner/Group/All Users
*   Number Permissions
    *   r = 4
    *   w = 2
    *   x = 1

*   Explicit Permissions

    # Change owner
    chown user:group file1
    
    # Remove read and write permissions on file 1 for all users
    chmod a-rw file1
    
    # Add execute to group
    chmod g+x file1
    
    # Remove write from user
    chmod u-w file1
