---
id: VD6qFxlOW85TR3Kwhsqos
title: Logs
desc: ''
updated: 1628449250323
created: 1628449250323
---
# logs
Linux Logs
----------

Locate and Interpret System Log Files and Journals
--------------------------------------------------

Use `tail -f` to see updates in real time

*   Do on secure file in /var/log to see people logging in
*   `tail -n` for number of lines, same for argument for head

`journald`

`man systemd journald`

`journalctl`, state of system since boot

In /run/log/journal

/run is temperary storage

For persistence systemd

*   `/etc/systemd/journald.conf`
*   Change Storage to persistent
*   /var/log/jourbal is new location

`journalctl -n` 10 latest intries

`-x` flag provides a little more information

`-f` shows real time updates

\\~SYSTEM~\\~UNIT~=$WHATEVER

rsyslog creates log files on our system

*   /etc/rsyslog.conf
