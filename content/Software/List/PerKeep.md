[Perkeep](https://perkeep.org/)

[LinuxFest Northwest 2018: Perkeep - YouTube](https://www.youtube.com/watch?v=PlAU_da_U4s&t=3640s)

## Getting Started

* [Install Perkeep](https://perkeep.org/download)
* Add [Go](Go.md) path in `.bashrc` or `.zshrc`
* `perkeepd`
	* We need a service file to start this don't we
* `pk-put init`

## Reminders

``` bash

cd ~/.config/perkeep
```

## Install the Thing

``` bash

go version
# 1.19 Minimum
git clone https://github.com/perkeep/perkeep.git perkeep.org
cd perkeep.org
go run make.go

cd ~/go/bin
ls
```

## CLI Tools

``` bash
perkeepd
pk
pk-deploy
pk-get
pk-mount
pk-put
```

## Actually using the thing

Checkout the UI at [localhost:3179/ui/](http://localhost:3179/ui/)

**How do I actually store and retrieve a file?**

``` bash
echo "I Like Pie" >> test.md
filenode=`pk-put file ./test.md`
echo $filenode
pk-get $filenode
pk-get -contents $filenode > test2.md
cat test2.md
```

**How do I actually name a file rather than just referencing a hash?**

Perkeep thinks in terms of the permanode, that hash, rather than the file name. Files can have titles and tags. For example.

``` bash
echo "Your Life Matters" >> life.md
filenode=`pk-put blob --permanode --title='life.md' --tag=inspiration ./life.md`
pk-get 
```

**Installing pk-mount**

``` bash

which pk-mount

pk-mount --help

go install perkeep.org/cmd/pk-mount@latest

```

**Mounting pk-mount file system**

``` bash
sudo mkdir /mnt/pk
sudo chown $USER:$USER /mnt/pk

# Init Perkeep
pk-put init

# For local perkeep instance
pk-mount /mnt/pk &

# Mounting a remote perkeep instance
pk-mount -server http://192.168.133.168:3179 /mnt/pk
pk-mount /home/paul/test/pk2

# Accessing your files
cd /mnt/pk
ls

# test
echo "I Like Pie" >> test.md
filenode=`pk-put file ./test.md`
echo $filenode
pk-get $filenode
pk-get -contents $filenode > test2.md
cat test2.md


# To kill
killall perkeepd
killall pk-mount
```

Now how do we choose what root node to actually mount? Can't do this, turns out this is not actually possible. If you want to do that use virtual links.

``` bash
cd your_desired_path
ln -s /mnt/pk/roots/SUB_ROOT SUB_ROOT
```

[pk-mount (/cmd/pk-mount) - Perkeep](https://perkeep.org/cmd/pk-mount/#hdr-Creating_a_Root_Node)

**Version Control, Accessing Content form a specific point in time**

- [Camlistore Time Travel - YouTube](https://www.youtube.com/watch?v=G9f74_JjFYQ)
- [Accessing Content form a specific point in time - Perkeep Docs](https://perkeep.org/cmd/pk-mount/#hdr-Accessing_Content_at_a_specific_Point_in_Time)
- Check the `at` folder, so
``` bash
cd /mnt/pk/at
ls
cat README.txt  
```

## Copy Perkeep ID

``` bash

cd ~/.config/perkeep

remote_user=root
remote_host=10.10.10.10
scp -r ~/.config/perkeep/ $remote_user@$remote_host:~/.config/


ssh $remote_user@$remote_host
~/.config/perkeep/
sed -i 's/original/new/g' file.txt
```

## User Stories

**So what do I want to use perkeep for?**

My number one use case for Perkeep is to use it in replacement of [Obsidian](Obsidian.md) sync. pk-mount can track every file and how it changes within my obsidian vault. I can even still have git stored in there and backed up. Perkeep would work nicely with 

Perkeep could be the solution to my cloud storage account. I would like to track all my photos, personal videos, personal documents, data exports, voice recordings, and quantified self information.

I don't need many of my files as raw files. My school notes can be archived, most sources of quantified self data can be archived.

The ebooks and audiobooks would have to be mounted on some sort of file system to work with calibre. It would be nice to do backup and restores to perkeep.

Movies and Music are not stored on the cloud storage drive.

## Docker and Perkeep

* You still need to compile for the CLI tools and stuff
* You also need to run perkeepd before you can connect to the server
* [docker](docker.md)
*  [Stepan Pantera / docker-perkeep · GitLab](https://gitlab.com/banderovets/docker-perkeep)

## Sources

* [Messing around with Perkeep (part 1) | by Ben Meier | Medium](https://medium.com/@benmeier_/messing-around-with-perkeep-part-1-67c6b8b0f8d7)
* [Setting up your own Cloud Storage with Perkeep and Tailscale | by Selahaddinh | Medium](https://medium.com/@selahaddinh123/setting-up-your-own-cloud-storage-with-perkeep-and-tailscale-5b9d082fd324)