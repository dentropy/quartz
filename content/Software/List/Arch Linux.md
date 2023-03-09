## Updates

``` bash
sudo pacman -Syu
yay -Syu
```
## Install Yay

[Jguer/yay: Yet another Yogurt - An AUR Helper written in Go](https://github.com/Jguer/yay)

``` bash
useradd dentropy
usermod -aG wheel dentropy
passwd dentropy

su dentropy

# Install yay
pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay-bin.git
cd yay-bin
makepkg -si

# Install zsh and oh-my-zsh
yay -S zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Install docker and docker-compose
sudo pacman -S bridge-utils
yay -S docker-compose
yay -S docker
yay -S tmux
sudo systemctl enable docker
sudo systemctl start docker
reboot
```

* [[SOLVED] Fail to start docker service - bridge not installed / Applications & Desktop Environments / Arch Linux Forums](https://bbs.archlinux.org/viewtopic.php?id=203966)

## Fresh Install Arch


``` bash
    sudo pacman -Syu # Update package index
    sudo pacman -Sy terminator
    sudo pacman -Sy tmux
    sudo pacman -Sy docker-compose
    sudo pacman -Sy calibre
    sudo pacman -Sy chromium
    sudo pacman -Sy dnsutils
    sudo pacman -Sy lynx
    sudo pacman -Sy sshfs
    sudo pacman -Sy tree
    sudo pacman -Sy apache # htpasswd
    sudo pacman -Sy nmap

    # Below stuff I don't always install
    sudo pacman -Sy pwgen
    sudo pacman -Sy gpodder
    sudo pacman -Syu virtualbox linux54-virtualbox-host-modules 
    sudo pacman -Sy cmatrix
    sudo pacman -Sy gnupg
    sudo pacman -Sy perl 
    sudo pacman -Sy sqlitebrowser
    sudo pacman -Sy texlive-most
    sudo pacman -Syu qt5-wayland # For [OBS](OBS.md)
```

##   yay

``` bash
    yay -Sy vscodium-bin
    yay -Sy vscodium-bin-marketplace
    codium --install-extension tomoki1207.pdf
    codium --install-extension HookyQR.beautify
    codium --install-extension donjayamanne.githistory
    yay -Sy megasync-bin
    yay -Sy keybase-bin
    yay -Sy signal-desktop
    yay -Sy brave-bin
    yay -Sy obs-studio-git
    yay -Sy activitywatch-bin
    yay -Sy cozy-audiobooks
    yay -Sy mpv-full
    yay -Sy audio-recorder
    yay -Sy yt-dlp-git
    # yay -Sy zotero # Fails
```

* [https://www.tecmint.com/install-yay-aur-helper-in-arch-linux-and-manjaro/](https://www.tecmint.com/install-yay-aur-helper-in-arch-linux-and-manjaro/)
* [Install Brave Browser on Manjaro | Arch Linux - TechViewLeo](https://techviewleo.com/install-brave-browser-on-manjaro-arch-linux/)

## Configure SSH Keys

``` bash
    git config --global user.email "paulmullins@protonmail.com"
    git config --global user.name  "Paul Mullins"

    git config --global user.email "personinternet@protonmail.com"
    git config --global user.name  "Person Internet"
```

## Other Software

* [wiki.ddaemon.monorepo.bindings.keylogger](keylogger%20binding)
* [](Bash%20History%7Cwiki.software.list.linux.Bash%20Scripting.Bash%20History#bash-history)
* [wiki.software.List.nvm](nvm.md)
* [wiki.software.List.Gnome](Gnome.md)

## Syncthing

``` bash
    # CHECK SOFTWARE
    sudo pacman -Sy syncthing
    wget https://raw.githubusercontent.com/syncthing/syncthing/main/etc/linux-systemd/system/syncthing%40.service
    sudo cp syncthing@.service /etc/systemd/system/syncthing.service
    rm syncthing@.service
    systemctl --user enable syncthing.service
    systemctl --user start syncthing.service
```

## Trezor

*   [GitHub - trezor/trezord-go: Trezor Communication Daemon (written in Go)](https://github.com/trezor/trezord-go)
*   [Setting up your Trezor hardware wallet on Arch Linux](https://eli5.it/setting-up-your-trezor-hardware-wallet-on-arch-linux/)

## KDE:

KWin remapped to Meta+\`

## [Steam Install](https://www.youtube.com/watch?v=IYjlikVK13o)

## Android Screen Mirroring

``` bash
    # Be able to connect android phone
    sudo pacman -S android-tools android-udev
    yay -S simple-mtpfs # For Android https://old.reddit.com/r/archlinux/comments/640s8x/how_do_you_connect_android_devices_via_mtp/
    yay -S jmtpfs
```

## Downgrading Python3

``` bash
pacman -Rdd python
yay -S python36
```

* [archlinux - How to downgrade python 3.7 to 3.6? - Stack Overflow](https://stackoverflow.com/questions/52072588/how-to-downgrade-python-3-7-to-3-6)
* [AUR (en) - python36](https://aur.archlinux.org/packages/python36)

## InstallingArch

*   [Where to start](https://wiki.archlinux.org/index.php/Installation_guide)
    
*   How to get wifi
    
    *   First get your interfaces
        
        *   ip link
    *   [dhcpcd interface](https://wiki.archlinux.org/index.php/Dhcpcd)
        
        *   dhcpcd enp0s25
*   Partition the system
    * [wiki.software.list.linux.File Systems](linux/File%20Systems.md)
    * [Use parted](https://wiki.archlinux.org/index.php/GNU_Parted)        
*   Working with pacman
    
    *   [Update Packages](https://bbs.archlinux.org/viewtopic.php?id=138155)
        
        *   pacman -Syy
    *   [Actual Documentation](https://wiki.archlinux.org/index.php/pacman)
        
        *   pacman -S vim
*   To get tmux to work you need utf8
    
    *   [NEED TO SET LOCALE](https://wiki.archlinux.org/index.php/locale#Setting_the_system_locale) `nano /etc/locale.gen #uncomment the line with US and utf-7 localse-gen`
*   adduser `useradd -m -g users -G wheel,storage,power -s /bin/bash paul passwd paul`
    
    *   What works
        
        *   [source](https://www.ostechnix.com/arch-linux-2016-post-installation/)
    *   [SUDO STUFF](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux_OpenStack_Platform/2/html/Getting_Started_Guide/ch02s03.html)
        
*   Desktop stuff
    
    *   [What sorta works](https://www.hiroom2.com/2017/10/07/archlinux-20171001-xfce-en/)
        
    *   [My attempt at deepin](https://www.ostechnix.com/install-deepin-desktop-environment-arch-linux/)
        
        *   Did not work


[ArchWiki](https://wiki.archlinux.org/)
[Manjaro](Manjaro.md)

