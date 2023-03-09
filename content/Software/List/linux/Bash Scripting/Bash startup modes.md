---
id: CmIQiRf0HximrkzG6s9XK
title: Bash startup modes
desc: ''
updated: 1628449250419
created: 1628449250419
---
# Bash startup modes
### Login shell

As a "login shell", Bash reads and sets (executes) the user's profile from /etc/profile and one of ~/.bash\_profile, ~/.bash\_login, or ~/.profile (in that order, using the first one that's readable!).

When a login shell exits, Bash reads and executes commands from the file ~/.bash\_logout, if it exists.

Why an extra login shell mode? There are many actions and variable sets that only make sense for the initial user login. That's why all UNIX® shells have (should have) a "login" mode.

_**Methods to start Bash as a login shell:**_

*   the first character of argv\[0\] is - (a hyphen): traditional UNIX® shells start from the login binary
*   Bash is started with the -l option
*   Bash is started with the --login option

_**Methods to test for login shell mode:**_

*   the shell option [login\_shell](http://wiki.bash-hackers.org/internals/shell_options#login_shell) is set

_**Related switches:**_

*   \--noprofile disables reading of all profile files

### Interactive shell

When Bash starts as an interactive non-login shell, it reads and executes commands from ~/.bashrc. This file should contain, for example, aliases, since they need to be defined in every shell as they're not inherited from the parent shell.

The feature to have a system-wide /etc/bash.bashrc or a similar system-wide rc-file is specific to vendors and distributors that ship _their own, patched variant of Bash_. The classic way to have a system-wide rc file is to source /etc/bashrc from every user's ~/.bashrc.

_**Methods to test for interactive-shell mode:**_

*   the special parameter $- contains the letter i (lowercase I)

_**Related switches:**_

*   \-i forces the interactive mode
*   \--norc disables reading of the startup files (e.g. /etc/bash.bashrc if supported) and ~/.bashrc
*   \--rcfile defines another startup file (instead of /etc/bash.bashrc and ~/.bashrc)

### SH mode

When Bash starts in SH compatiblity mode, it tries to mimic the startup behaviour of historical versions of sh as closely as possible, while conforming to the POSIX® standard as well. The profile files read are /etc/profile and ~/.profile, if it's a login shell.

If it's not a login shell, the environment variable [ENV](http://wiki.bash-hackers.org/syntax/shellvars#env) is evaluated and the resulting filename is used as the name of the startup file.

After the startup files are read, Bash enters the [POSIX(r) compatiblity mode (for running, not for starting!)](http://wiki.bash-hackers.org/scripting/bashbehaviour#posix_run_mode).

_**Bash starts in sh compatiblity mode when:**_

*   the base filename in argv\[0\] is sh (
    
     NB: /bin/sh may be linked to /bin/bash, but that doesn't mean it acts like /bin/bash 
    
    )
