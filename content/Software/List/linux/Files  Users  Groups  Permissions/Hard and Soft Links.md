---
id: ADcJRVFGOYkV4CKsS5Yhh
title: Hard and Soft Links
desc: ''
updated: 1628449250428
created: 1628449250428
---
# Hard and Soft Links
`ls -al` see the soft and hard links

`ln` used for hard and soft links

*   default is hard
*   `-s` is for soft links
*   first feed true location then feed link location
*   Can break symbolic links

Permissions of symbolic links

*   Says has all permissions but doesn't actually have them

Hard Links

*   Can not go between different file systems
*   The permissions of a hard link are correct

How to create s symbolic link `$ ln -s <SOURCE> <LINK_NAME>`
