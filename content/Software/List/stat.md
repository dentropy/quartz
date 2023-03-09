---
id: 8t3c6ebf39s8r8vs9a8lrl8
title: stat
desc: ''
updated: 1663572597274
created: 1663572595648
---

`stat` provides info on a file

    find /etc -name motd
    find /etc -user <username>
    find /etc -mtime -3 # File files modified in last three days, one can use + for more than three days
    stat <filename>
    # There are many ways to use find so use the man page
    find / -user jeff -type f # f for file d for directory
    find / -user jeff -type f -exec cat {} # Execute command
