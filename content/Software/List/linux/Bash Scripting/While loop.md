---
id: H04o4Ovig79aA38wpgpq2
title: While loop
desc: ''
updated: 1628449250420
created: 1628449250420
---
# While loop
Documentation: [http://tldp.org/LDP/Bash-Beginners-Guide/html/sect\_09\_02.html](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_09_02.html)

#!/bin/bash

\# This script opens 4 terminal windows.

i="0"

while \[ $i -lt 4 \]

do

    xterm &

    i=$\[$i+1\]

done
