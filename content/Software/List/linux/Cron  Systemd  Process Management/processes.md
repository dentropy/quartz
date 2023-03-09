---
id: wWV4SBY27DPHe20BVntXw
title: processes
desc: ''
updated: 1628449250424
created: 1628449250424
---
# processes
Identify CPU Memory Intensive Processes, Adjust process priority and id
-----------------------------------------------------------------------

kill processes

Objective

*   What key commands need to be memorized for this section?

ps

pgrep, basicall ps and gre but better formatted

*   \-l flag for name
*   \-u flag for user
*   \-v flag for inverse of a user

pkill

*   Kills stuff by name
*   \-t flag to kill a tty

What is a kill signal? `kill -l` for a list of all signals. Default is 15 SIGTERM. -9 -SIGKILL to kill it imediately. Checkpdf for more signals to memorize.

Kick out ssh user `pkill -u USER sshd`

### Running stuff in the backgroud, pausing and starting again {#running-stuff-in-the-backgroud-pausing-and-starting-again id="54b8e3ad-5c1c-4379-b370-fbd579358991"}

    (while true; do echo -n "My Program" >> ~/output.file; sleep 1; done) &
    

`jobs`

pausing a job `kill -SIGSTOP %1`

starting a job again `kill -SIGCONT %1`

`ps axu` Note the BSD syntax

*   Also look up AIX format in man page

Nice level is all abour priority

### Niceness

*   Nice allows up to set a priority for a process.
*   Lower level higher priority
*   \-20 most favoriable or 19 for least favoriable
*   Niceness is more a sugestion
*   `df -h` to see storage

    # Create a 1 gig file
    dd if/dev/zip of=root/test.file bs=1M count=1024
    
    ps axo pid,comm,nice | grep httpd
    nice -n 0 httpd
    
    ## How to change nice on a running program
    renice -n 10 {Process ID}}
    renice -n 10 $(pgrep httpd) # $() is called a subshell
    time nice -n {19 or -20}} tar -cvf test.tar test.file
    

`time` followed by a command measures how long the command takes

`upteime` show how long server has been up

*   Calculate percentage of processing power
*   `cat /proc/cpuinfo` See how many CPU's you have
*   Proc shows info from kernel
*   `(while true; do echo -n "My Program" >> ~/output.file; done) &` for load testing
*   Calculate load
*   Get number of CPU's `cat /proc/cpuinfo | grep "model name" | wc -l`
*   What does -n do for echo?

Welcome to Top

*   Use keys l t and m
*   Can change niceness from here, press r then type PID
*   Press k to kill a process by PID
*   `top -n`, number of times to update and back to terminal
*   `top -d`, seconds between updates
