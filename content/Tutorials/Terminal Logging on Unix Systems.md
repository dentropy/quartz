Terminal Command Logging

On unix systems all commands are logged by default in order in which they were input. One can set an environment variable in bash to enable date and time data to also be logged.

``` bash
HISTTIMEFORMAT="%F %T "
echo "export HISTTIMEFORMAT=\"%F %T \"" >> ~/.bashrc 
```

Terminal Command Logging Links:

* [Hishtory](../Software/List/Hishtory.md)
* [Bash History: How To Show A Timestamp (Date / Time) When Each Command Was Executed - Linux Uprising Blog](https://www.linuxuprising.com/2019/07/bash-history-how-to-show-timestamp-when.html)
* [History Sync](https://awesomeopensource.com/project/wulfgarpro/history-sync?categoryPage=3)