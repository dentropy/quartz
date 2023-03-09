## SSH [TODO](../../../MyDendronExistence/Task%20manager/TODO.md)

* [authentication - "UNPROTECTED PRIVATE KEY FILE!" Error using SSH into Amazon EC2 Instance (AWS) - Stack Overflow](https://stackoverflow.com/questions/8193768/unprotected-private-key-file-error-using-ssh-into-amazon-ec2-instance-aws)
* ELI5 Generate and backup SSH Key
* [Linux/Unix: Force ssh client to use only password auth authentication when pubkey auth configured - nixCraft](https://www.cyberciti.biz/faq/howto-force-ssh-client-login-to-use-only-password-authentication/)
* [ssh - How to fix warning about ECDSA host key - Super User](https://superuser.com/questions/421004/how-to-fix-warning-about-ecdsa-host-key#421024)
* [How to force ssh client to use only password auth? - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/15138/how-to-force-ssh-client-to-use-only-password-auth#15141)
* [Security](##Security)
* [ssh - Select private key to use with Git - Stack Overflow](https://stackoverflow.com/questions/6688655/select-private-key-to-use-with-git)

## Port Forwarding

* [SSH/OpenSSH/PortForwarding - Community Help Wiki](https://help.ubuntu.com/community/SSH/OpenSSH/PortForwarding)
* [How to configure remote port forwarding (openssh & firewall)](https://www.golinuxcloud.com/howto-remote-port-forwarding-openssh-firewall/)

## Reminders

* Permissions on private key are 700

``` bash
# COPY ONE AT A TIME
ssh-keygen -t rsa -b 4096 -C "devgoalposts@protonmail.com"
# Without email
# ssh-keygen -o
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
# Can add any file as long as it has 700 permissions
# ssh-add -k ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub
```

* References:
  * [Github Tutorial](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  * ([Generating a new SSH key and adding it to the ssh-agent - GitHub Docs](https://docs.github.com/en/github-ae@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent))

## Setup ssh server

``` bash
# Install OpenSSH server
sudo apt-get install openssh-server
sudo systemctl start ssh
sudo systemctl enable ssh
```

## Copy SSH keys

``` bash
ssh-copy-id username@domain
ssh-copy-id -f -i <path to public key> username@domain
```

## Disable password login

``` bash
sudo vi /etc/ssh/sshd_config
# Change the following settings
# ChallengeResponseAuthentication no
# PasswordAuthentication no
# UsePAM no
# PermitRootLogin no

# Now reload the server
/etc/init.d/ssh reload
# or
sudo systemctl reload ssh
# or RHEL style
sudo systemctl reload sshd
# Test password ChallengeResponseAuthentication
ssh dentropy@somedomain.local -o PubkeyAuthentication=no
```

## List ssh identitys

``` bash
ssh-add -l
```

## Security

* Fail2ban or sshguard

* References
  * [How to disable ssh password login on Linux to increase security - nixCraft](https://www.cyberciti.biz/faq/how-to-disable-ssh-password-login-on-linux/)

## Generate public key from private key

``` bash
ssh-keygen -y -f ~/.ssh/id_rsa > ~/.ssh/id_rsa.pub
```

* References
  * [command line - How do I retrieve the public key from a SSH private key? - Ask Ubuntu](https://askubuntu.com/questions/53553/how-do-i-retrieve-the-public-key-from-a-ssh-private-key)

## SSH without using private key

`ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no user@server`
