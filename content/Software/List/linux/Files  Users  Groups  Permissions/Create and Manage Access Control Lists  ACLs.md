---
id: VfcfAmPZnXCG8CQjcOdsB
title: Create and Manage Access Control Lists  ACLs
desc: ''
updated: 1628449250427
created: 1628449250427
---
# Create and Manage Access Control Lists (ACLs)
    # Not supported by most file systems by default are XFS and EXT4 
    # Use ACLs when you want more fine grande permission 
    # control than groups and users
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
