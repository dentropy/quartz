---
id: rOVRKO2AxpXDnBF8ZoMUy
title: LogKeys
desc: ''
updated: 1630661621536
created: 1628744754552
---


``` bash
/proc/bus/input/devices

ls -l /dev/input/by-id

sudo logkeys -d event3 --export-keymap /home/dentropy/Documents/Software/keylogger/keymap.txt

sudo logkeys -d event3 --keymap /home/dentropy/Documents/Software/keylogger/keymap.txt  -s

sudo logkeys -d event3 --us-keymap -s
```

* The Key logger I want to use is called LogKeys but I could not get the correct key mapping
  * [How to Monitor Keyboard Keystrokes Using '' in Linux](https://www.tecmint.com/how-to-monitor-keyboard-keystrokes-using-logkeys-in-linux/)
  * Troubleshoot → [Linux keyboard event capturing /dev/inputX - Stack Overflow](https://stackoverflow.com/questions/2775461/linux-keyboard-event-capturing-dev-inputx)
