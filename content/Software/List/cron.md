---
id: eqTQ74UXgPmLTdd4z5lcs
title: cron
desc: ''
updated: 1628444413868
created: 1628444413868
---
# cron
Idiots guide to Cron Jobs
-------------------------

First create a script that one wants to run and note it absolute file location

Decide who you want to run as and run of the following commands

    #Run as root
    sudo crontab -e
    #Run as logged in user
    crontab -e
    

Use [this](https://crontab.guru/every-6-hours) to figure out how to get the cron job to run at the correct times

Just have a couple spaces and the path to the absolute file location of the script like [here](https://stackoverflow.com/questions/11562804/running-cron-job-on-linux-every-6-hours)

    0 0,6,12,18 * * * /path/to/mycommand
