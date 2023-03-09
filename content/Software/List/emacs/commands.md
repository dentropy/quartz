---
id: XZC0yUOwQxyvArHJynggY
title: Commands
desc: ''
updated: 1628444413894
created: 1628444413894
---
# commands
Basic Doom Emacs Comands {#how-to-use-doom-emacs}
-------------------------------------------------

Recently Learned
----------------

*   Find Org File (SPC n r f)
*   Code Snippits in insert mode type <s then TAB
    *   [Embedding Code Snippets In Org Mode - YouTube](https://www.youtube.com/watch?v=lsYdK0C2RvQ)
*   Instert general link (SPC m l l)
*   Copy link to current location (SPC n l)
*   Inster last stored link (SPC m l s)
*   /SEARCHTERM RET n for next and N for back
    *   [search text in Emacs evil mode - Stack Overflow](https://stackoverflow.com/questions/42348794/search-text-in-emacs-evil-mode)

TODO
----

*   [In Emacs org-mode, how to narrow display to two subtrees in two separate file...](https://stackoverflow.com/questions/17156595/in-emacs-org-mode-how-to-narrow-display-to-two-subtrees-in-two-separate-files)
*   [Doom Emacs Cheatsheet · GitHub](https://gist.github.com/hjertnes/9e14416e8962ff5f03c6b9871945b165) :w

Navigation
----------

*   Press escape to use any of the key bindings
*   Basics
    *   Insert at end of line (A)
        *   [Inserting at the end of a line in VIM - Stack Overflow](https://stackoverflow.com/questions/41657784/inserting-at-the-end-of-a-line-in-vim)
*   Documentation (SPC h d h)

Files Basics
------------

*   Open a file (SPC .)
*   reload saved file (:e)
*   Force Reload (:e!)
*   Go to top of file (gg)
*   Save a file (:s)
*   Search a file (?<Search String>)
*   Top of file (g g)
*   Bottom of file (G)
*   Select and copy test
    *   \[\[org: Linuxize.org\]\[[https://linuxize.com/post/how-to-copy-cut-paste-in-vim/](https://linuxize.com/post/how-to-copy-cut-paste-in-vim/)\]\[How to Copy, Cut and Paste in Vim / Vi \]\]
*   Paste (p)
*   Config Files
    *   Stored at ~/.doom.d

Windows
-------

*   Close (SPC w c)
*   Vertical Split (SPC w v)
*   Horizontal Split (SPC w h)

Switching Windows
-----------------

*   left, (SPC w C-h)
*   right, (SPC w C-l)
*   down, (SPC w C-j)
*   up, (SPC w C-k)
*   Split Window
    *   Right (C-x 3)
    *   Below (C-x 2)
    *   Close (C-x 0)
*   workspaces
    *   new, (SPC TAB n)
    *   switch-to (SPC TAB .)

org-mode Commands
-----------------

Basics
------

*   Lists start with a + and you use (C RET) to add items
*   Find file, (SPC n f r)
*   Find bat tags n stuff, (SPC n r f)
*   Capture daily today,(SPC m m d n)
*   Copy ID of current file or something like that (SPC m l i)
*   Paste a link helper tool (SPC m l l)
*   Inster URL link (SPC m l c)

Navigating Trees
----------------

*   close (z c)
*   open (z o)
*   open everything (z r)
*   fold everything (z m)
*   Narrow tree (SPC m s n)
*   Widen (SPC m s N)

org-agenda
----------

*   Search this on Google, "org-agenda" take too long to load
*   Open agenda, (SPC o A)
*   Just add todo, (SPC m t t)
*   Add with date, (SPC m d s)

org-roam-dailies
----------------

*   Find today (SPC m d d t)
