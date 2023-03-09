---
id: 3znHdPqDOTUTL6zGxrJyn
title: Bash Scripting
desc: ''
updated: 1667924236857
created: 1628449250322
---

## Generate a Password

``` bash
tr -cd '[:alnum:]' < /dev/urandom | fold -w31 | head -n1

export PASSWORD=`tr -cd '[:alnum:]' < /dev/urandom | fold -w31 | head -n1`
echo $PASSWORD > code-server-pass.txt
```

## How to append to path 

```
PATH=$PATH:/home/$USER/.local/bin
```

[bash - How to correctly add a path to PATH? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/26047/how-to-correctly-add-a-path-to-path#26059)

## Use Input Output Redirection

*   `Less` can be used to view files similar to cat
*   `>` can output a text into a file
*   `>>` if exists append to a file
*   `<` is like accepting input
*   `2> and 2>>` if error output that as well
*   `2>&1` Output working command to terminal
*   One can output to `dev/null` for death of the output
*   `chmod u+x` Use this cause it limits use to a specified user
*   `head` see first 10 lines of a file
*   `tail` last 10 lines of a file

## TODO
[Use Input Output Redirection](#root/NulyMbp0FcE9) 

[permissions - How to insert text into a root-owned file using sudo? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/4335/how-to-insert-text-into-a-root-owned-file-using-sudo)

[shell - sudo with password in one command line? - Super User](https://superuser.com/questions/67765/sudo-with-password-in-one-command-line#67766)

[bash - How to redirect the output of the time command to a file in Linux? - Stack Overflow](https://stackoverflow.com/questions/13356628/how-to-redirect-the-output-of-the-time-command-to-a-file-in-linux)

[shell - How to check if a file contains a specific string using Bash - Stack Overflow](https://stackoverflow.com/questions/11287861/how-to-check-if-a-file-contains-a-specific-string-using-bash)

[bash - How to measure time of program execution and store that inside a variable - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/12068/how-to-measure-time-of-program-execution-and-store-that-inside-a-variable)
