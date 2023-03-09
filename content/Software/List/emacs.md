---
id: u567U8heILdkZLw7qxqK0
title: emacs
desc: ''
updated: 1628444413869
created: 1628444413869
---
# emacs
Org Links
---------

*   emcas backlog

Command lookup is somewhere else
--------------------------------

+emacs-commands.org

Intro Stuff
-----------

*   \[\[org: beepb00p.org\]\[[https://beepb00p.xyz/cloudmacs.html](https://beepb00p.xyz/cloudmacs.html)\]\[Cloudmacs: Emacs in your web browser \]\]
*   [Gnu Website](https://www.gnu.org/software/emacs/download.html#gnu-linux)
*   Rabbit hole
    *   [Doom Emacs - Getting Started](https://youtu.be/dr_iBj91eeI)
        *   Has Evil Mode and Org-Mode installed
        *   [Doom Emacs for noobs](https://medium.com/urbint-engineering/emacs-doom-for-newbies-1f8038604e3b)
        *   [A Complete Idiot's Guide to Doom Emacs](https://lordgrenville.github.io/posts/Emacs/)
        *   Evil Mode is just vim key bindings in vim
            *   [Evil Mode: Or, How I Learned to Stop Worrying and Love Emacs](https://youtu.be/JWD1Fpdd4Pc)
    *   [Org Mode Basics In Doom Emacs video](https://youtu.be/34zODp_lhqg)
    *   [Cheatsheet](https://gist.github.com/hjertnes/9e14416e8962ff5f03c6b9871945b165)
    *   [emacs-config tutorial](https://tecosaur.github.io/emacs-config/config.html)

Web Links
---------

*   \[\[org: Better Programming.org\]\[[https://medium.com/better-programming/15-reasons-why-i-use-emacs-with-gifs-5b03c6608b61](https://medium.com/better-programming/15-reasons-why-i-use-emacs-with-gifs-5b03c6608b61)\]\[15 reasons why I use emacs \]\]

Install
-------

    sudo apt install emacs
    rm -r ~/.emacs.d
    git clone --depth 1 https://github.com/hlissner/doom-emacs ~/.emacs.d
    ~/.emacs.d/bin/doom install
    ~/.emacs.d/bin/doom sync
    echo "PATH=$PATH:~/.emacs.d/bin/doom"
    emacs
    

Installing packages
-------------------

Add to DOOMDIR/packages.el

    ;; Install a package named "example" from ELPA, MELPA, or Emacsmirror
    (package! example)
    

[https://github.com/hlissner/doom-emacs/blob/develop/docs/getting\_started.org#installing-packages](https://github.com/hlissner/doom-emacs/blob/develop/docs/getting_started.org#installing-packages)

Folder View Sidebar
-------------------

[https://twoormore.eu/blog/2019/10/folder-view-emacs/](https://twoormore.eu/blog/2019/10/folder-view-emacs/)

Adding Packages
---------------

Just add to the init file

[Learn Emacs Org Mode: Spacemacs Intro Tutorial](https://youtu.be/PVsSOmUB7ic)
------------------------------------------------------------------------------

Gotta learn the vim key bindings
--------------------------------

emacs Links
-----------

*   backlog

Missing Links
-------------

*   commands
