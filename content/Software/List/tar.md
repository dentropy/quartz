* tar flags
  * -c create
  * -t list contents
  * -x extrac files
  * -z compress uging gzip
  * -v verbose
  * -j compress using bzip2
  * -f read arching from start of file

## How to create and extract tar archives

``` bash
Create an Archive
tar -cvf name-of-archive.tar.gz /path/to/directory-or-file

# Extract an Archive
tar -xvf name-of-archive.tar.gz
    
```

## Create Tar Archive

``` bash

sudo tar cvpzf './'$(date +'%m-%d-%Y-%H-%M-%S')'-umbrel.tar.gz' ./umbrel

```

## Create Tar Archive of Entire System

``` bash
sudo tar cvpzf /tmp/backup.tar.gz --exclude=/tmp/backup.tar.gz --one-file-system /
```

## Links

[How to Compress and Extract Files Using the tar Command on Linux](https://www.howtogeek.com/248780/how-to-compress-and-extract-files-using-the-tar-command-on-linux/)


rsync -avzhe ssh --progress ./ddaemon-monorepo root@145.77.86.97:~