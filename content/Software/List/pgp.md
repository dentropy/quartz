---
id: qIcownQi9RZZY9e0yRTPa
title: pgp
desc: ''
updated: 1628444413877
created: 1628444413877
---
# pgp
Basics of PGP
-------------

Use GPG on linux

    gpg --help
    

[source](https://www.devdungeon.com/content/gpg-tutorial)

[https://unix.stackexchange.com/questions/339077/set-default-key-in-gpg-for-signing](https://unix.stackexchange.com/questions/339077/set-default-key-in-gpg-for-signing)

List keys
---------

    # List public keys you have stored (yours and other people's keys)
    gpg --list-keys
    
    # List private keys (generally only your own)
    gpg --list-secret-keys
    

Generate a key
--------------

    gpg --gen-key
    

Backup a private key
--------------------

    gpg --list-secret-keys
    
    # Replace XXXXXXXX with your hexadecimal key ID
    gpg --export-secret-keys --armor XXXXXXXX > ./my-priv-gpg-key.asc
    
    # Omitting the --armor flag will give you binary output instead of ASCII
    # which would result in a slightly smaller file but the ASCII
    # formatted (armored) can be printed physically, is human readable,
    # and transfered digitally easier.
    # Both formats can be imported back in to GPG later
    

Restore private key
-------------------

    gpg --import ./my-priv-gpg-key.asc
    

Sign something
--------------

Encrypt something for someone else
----------------------------------

    gpg  --sign --armor --recipient paulmullins@protonmail.com --encrypt message.txt
    
    # --output File.gpg
    

Decrypt something from someone else
-----------------------------------

    gpg -d EncryptedFile.asc
    

Delete keys
-----------

    # Private keys
    gpg --delete-secret-keys XXXXXXXX
    
    # Public keys
    gpg --delete-keys XXXXXXXX
    

Learning PGP
------------

*   Create a pgp key
    
    *   gpg --gen-key
    *   gpg --full-generate-key
*   Export ones public key
    
    *   gpg --export person@email.com > pubkey.gpg
    *   gpg --armor --export person@email.com > pubkey.gpg
*   Create the revocation certificate
    
    *   gpg --gen-revoke person@email.com
*   \--armor
    
    *   exports to text
*   List keys
    
    *   gpg --list-keys
*   How to import a pgp key
    
    *   gpg --import someonesgpgkey.asc
*   .asc for text encoded, .gpg for binary files
    
    *   .asc when using --armored uses ascii
*   How to get a gpg key
    
    *   gpg --fingerprint uid
    *   gpg --recv-keys 00xABCDEFGH
    *   gpg --import pubkey.gpg
*   gpg --list-sigs
    
    *   List keys with signitures
*   gpg --delete-key uid
    
*   xxd, a hex viewer
    
*   file, a linux command for telling you what kind of file a file is
    
*   What is gpg-agent
    
*   [Youtube Video Source](https://www.youtube.com/watch?v=ZSa-d_9O5DA)
