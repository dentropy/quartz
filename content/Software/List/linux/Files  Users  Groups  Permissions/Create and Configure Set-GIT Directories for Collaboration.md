---
id: f3DsLq6TUfBijv5Brl5FB
title: Create and Configure Set-GIT Directories for Collaboration
desc: ''
updated: 1628449250427
created: 1628449250427
---
# Create and Configure Set-GIT Directories for Collaboration
    # groups user groups root
    # Set-GID on directory and the permissions for new files created within will inheret
    # UID? - User ID
    # GID? - Group ID
    
    mkdir {finance,it}
    chmod g+s finance
    groupadd finance
    chown :finance finance
    chmod g+wX -R finace
    ls -al
