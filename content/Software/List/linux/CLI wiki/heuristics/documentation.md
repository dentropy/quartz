---
id: D07sOSePNHCSxqKpZi3yc
title: documentation
desc: ''
updated: 1628449250422
created: 1628449250422
---
# documentation
Locate, read, and use system documentation including man, info, and files in /usr/share/doc
-------------------------------------------------------------------------------------------

We have to download a 3rd party program and use the programs documentation as part of the exam

`man 5 program_name` shows files and config files associated with program

`apropos program_name`

*   One must index all man pages
*   `mandb` will do that, will take a while

Alternative to man is info

Searches /usr/share/info

Info will open man page is no file in /usr/share/info

There is a higharchy of pages when one uses info

press n for next node

press u to go back to top

press p to go back one node

Home and End keys are useful

Press l for going back between node

press t to go back to top

**question mark key is a reminder of all these keys**

Can navigate nodes by pressing enter

Search using info

info --apropos={Search Term}}

Also check out /usr/share/doc

`locate file_name`

*   Searches cached database
*   Update chached database by `updatedb`
*   `yum search search_term` is a cool command
*   locate cache is updated with cron job

`which command_name` show where commands are located

`whatis command_name` search man pages

`whereis command_name`

`rpm -qd packagename` search all documentation

*   q=querry
*   d=documentation
