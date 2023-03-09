
## Fresh Install Debian Server

``` bash
# Remember UFW is a thing
sudo su
sudo apt-get -y update
sudo apt-get install -y tmux
sudo apt-get install -y git
sudo apt-get install -y zsh
sudo apt-get install -y htop
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo apt-get install -y docker-compose
sudo systemctl start docker
sudo systemctl enable docker
rm get-docker.sh
sudo usermod -aG docker $USER

# Oh-My-ZSH
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

* [](code-server%20Manual%20Install%7Cwiki.software.List.Code%20Server#manual-install)
* [wiki.software.List.nvm](../nvm.md)

## git setup

``` bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

git config --global user.email "dentropy@protonmail.com"
git config --global user.name "Dentropy"
```

## ## Fresh Install Debian Desktop

``` bash
sudo su
apt -y update
apt install -y vim
apt install -y git
apt install -y curl
apt install -y tree
apt install -y htop
apt install -y docker
apt install -t docker-compose
sudo systemctl enable docker.service
apt install -y lynx
apt install -y sshfs
apt install -y emacs
apt install -y sqlite
apt install -y nmap
apt install -y xsel # For dendron
apt install -y openvpn
apt install -y chromium
apt install -y deluge
apt isntall -y tilix
apt install -y sqlitebrowser
apt install -y ffmpeg
apt install -y curlftpfs
apt install -y vlc
apt install -y gnupg2
apt install -y smbclient
apt install -y python3-pip python3-venv
apt install -y filezilla
apt install -y neofetch
apt install -y syncthing
apt install -y postgresql-client-common

## Rust
curl https://sh.rustup.rs -sSf | sh

systemctl enable syncthing@dentropy.service
sudo -v && wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sudo sh /dev/stdin
# For compiling emacs stuff
apt-get install -y autoconf automake g++ gcc libpng-dev libpoppler-dev libpoppler-glib-dev libpoppler-private-dev libz-dev make pkg-config

# keybase
curl --remote-name https://prerelease.keybase.io/keybase_amd64.deb
sudo apt install ./keybase_amd64.deb
run_keybase

# Codium
wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg | gpg --dearmor | sudo dd of=/etc/apt/trusted.gpg.d/vscodium.gpg
echo 'deb https://paulcarroty.gitlab.io/vscodium-deb-rpm-repo/debs/ vscodium main' | sudo tee --append /etc/apt/sources.list.d/vscodium.list
sudo apt update && sudo apt install codium
# [deb repository key not working II (#34) · Issues · Pavlo Rudy / vscodium-deb-rpm-repo · GitLab](https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/-/issues/34#note_396173727)

# Signal
# NOTE: These instructions only work for 64 bit Debian-based
# Linux distributions such as Ubuntu, Mint etc.
# 1. Install our official public software signing key
wget -O- https://updates.signal.org/desktop/apt/keys.asc |\
    sudo apt-key add -
# 2. Add our repository to your list of repositories
echo "deb [arch=amd64] https://updates.signal.org/desktop/apt xenial main" |\
    sudo tee -a /etc/apt/sources.list.d/signal-xenial.list
# 3. Update your package database and install signal
sudo apt update && sudo apt install signal-desktop


# Virt-Manager
sudo apt install -y qemu qemu-kvm libvirt-daemon libvirt-clients bridge-utils virt-manager libosinfo-bin
# [org:knowledge.linux.VirtualMachines.org](org:knowledge.linux.VirtualMachines.org)

# Brave Browser
# https://brave.com/linux/#linux
sudo apt install apt-transport-https curl gnupg

curl -s https://brave-browser-apt-release.s3.brave.com/brave-core.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/brave-browser-release.gpg add -

echo "deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-release.list

sudo apt update

sudo apt install brave-browser


# OBS
sudo apt install ffmpeg
sudo add-apt-repository ppa:obsproject/obs-studio
sudo apt install obs-studio
```
    

[How to Install & Configure NFS Server on Ubuntu {Step-by-Step Guide}](https://phoenixnap.com/kb/ubuntu-nfs-server)

## Install stuff as user


* Add user docker 
  * `sudo usermod -aG docker $USER`
* Change default terminal
  * `sudo update-alternatives --config x-terminal-emulator`
  * [How to Change the Default Terminal in Ubuntu - It's FOSS](https://itsfoss.com/change-default-terminal-ubuntu/)
* Change Default File Manager
  * [filemanager - How do I change the default file manager back to Nautilus? - Ask Ubuntu](https://askubuntu.com/questions/235660/how-do-i-change-the-default-file-manager-back-to-nautilus#288136)
  * Does not work

Change search engines in browsers

Download and run anaconda as user

Configure browser with extensions

Configure SSH key

*   Remember to copy them to ~./.ssh
*   Chmod 700 that shit
*   Add key `ssh-add KEY-FILE`
*   Check if added `ssh-add -l`
 

Mount Encrypted Partition

Install [Mega](https://mega.nz/downloadapp)

Power Options to stop sleep

Redshit to fall asleep


## Activity Watcher

```
crontab -e
@reboot /home/dentropy/Software/activitywatch/aw-server
```

* Select Startup Applicaitons Preferences

``` config
aw-watcher-afk
/home/$USER/Software/activitywatch/aw-watcher-afk/aw-watcher-afk

aw-watcher-window
/home/paul/Software/activitywatch/aw-watcher-window/aw-watcher-window
```
    

## pip packages

``` bash
# https://github.com/yt-dlp/yt-dlp#installation
python3 -m pip install --upgrade git+https://github.com/yt-dlp/yt-dlp.git@release
python3 -m pip install pandoc
```
## Modify bashrc

``` bash
alias youtube-mp3='yt-dlp -x --embed-thumbnail --audio-format mp3'
alies docker-rm='docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)'
```

## [wiki.software.List.Gnome](../Gnome.md)

## Troubleshooting

Keybase

``` bash
sudo apt purge keybase && sudo apt-get autoclean
rm -rf ~/.local/share/keybase ~/.config/keybase
```


## Version Managers


``` bash
## nvm - node version manager
sudo apt-get update
sudo apt-get install make
sudo apt-get install gcc
sudo apt-get install g++
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
echo `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"` >> ~/.bashrc
echo `[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  #This loads nvm`  >> ~/.bashrc
source ~/.bashrc
nvm install node
nvm use node
npm install -g yarn

## kiex - elixir version manager

# [Installing Elixir - The Elixir programming language](https://elixir-lang.org/install.html)
# [taylor/kiex: Elixir version manager](https://github.com/taylor/kiex)

## RVM - Ruby Version Manager

# [RVM: Ruby Version Manager - RVM Ruby Version Manager - Documentation](https://rvm.io/)


```
