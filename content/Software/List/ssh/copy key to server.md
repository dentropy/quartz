---
id: MAr6pDjr6r4NPAvTdrHyO
title: copy ssh key to server
desc: ''
updated: 1630949178440
created: 1630949178440
---

```
cd ~/.ssh
scp -r remote* USER@DOMAIN:~/.ssh
ssh 
cd ~/.ssh
eval `ssh-agent -s`
chmod 700 remote*
ssh-add remotedevelopment
```
