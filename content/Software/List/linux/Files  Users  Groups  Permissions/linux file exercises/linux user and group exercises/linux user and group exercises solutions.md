---
id: kyNycAO4XbS7JVbyO2VJ2
title: linux user and group exercises solutions
desc: ''
updated: 1628449250939
created: 1628449250939
---
# linux user and group exercises solutions
*   Find out what user are you currently logged in as
    *   `whoami`
*   List all users
    *   `/etc/passwd`
    *   `compgen -u`
*   [How to find who is logged in?](https://www.2daygeek.com/commands-to-find-check-list-identify-logged-in-users-in-linux/)
    *   `w`
*   Create a user
    *   `adduser $NEW_USERNAME`
*   How to delete a user
    *   `userdel $USER`
    *   `uderdel --remove $USER`
*   Get information about a user such as UID and GID
    *   `id $USER`
*   [What files store password information and how do they work?](etcpasswd%20and%20etcshadow.md)
*   Change default settings for a new user, where is the helper file?
    *   /etc/default/useradd and /etc/login.defs
*   How to manage passwords?
    *   #TODO
        *   How to set minimum password requirements
        *   How to check what accounts have a password set
    *   Get password information on specific user
        *   `chage -l $USER`
    *   Password flags
        *   \-n , number of days between password change
        *   \-w, set warning days
        *   \-x, Max number of days between password change
    *   Password expires at certain date
*   How to manage user environments?
    *   Where is the default home holder for new users?
        *   /etc/skel
    *   Where are user environments
        *   /etc/profile
        *   /etc/bashrc
        *   ~/.profile
        *   ~/.bashrc
*   Where can one find a list of all groups?
    *   /etc/group
        *   Group name
        *   Group password
        *   Group ID
        *   Members
*   List all groups
    *   `getent group`
*   Create a group
    *   `groupadd`
*   How to delete a group?
    *   `groupdel $GROUP`
*   How to add a user to a group?
    *   `usermod -aG $GROUP $USER`
*   Change group that owns a file
    *   `groupmod`
*   Add user to a group
    *   RHEL `usermod -aG $GROUP_NAME $USER`
*   How to give sudo access
    *   RHEL `usermod -aG wheel $USER`
*   Set default UID and password age?
    *   page 122
    *   /etc/default/useradd has some stuff
    *   /etc/login.defs has what I am looking for
