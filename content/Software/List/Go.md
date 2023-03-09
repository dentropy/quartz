## Install

``` bash


wget https://go.dev/dl/go1.20.2.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.20.2.linux-amd64.tar.gz

sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.20.2.linux-amd64.tar.gz

export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:~/go/bin

/usr/local/go/bin
vim ~/.bashrc

go version


pkill perkeepd

```

[Download and install - The Go Programming Language](https://go.dev/doc/install)

## pk-mount

``` bash

go install perkeep.org/cmd/pk-mount@latest

```


[pk-mount (/cmd/pk-mount) - Perkeep](https://perkeep.org/cmd/pk-mount/)
[pk-mount command - perkeep.org/cmd/pk-mount - Go Packages](https://pkg.go.dev/perkeep.org/cmd/pk-mount)

## Links

[Language - Programming](../Catagories/Language/Language%20-%20Programming.md)