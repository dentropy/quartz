---
id: CQzalLuwf5C6x7XtsqY7E
title: POA
desc: ''
updated: 1631042175089
created: 1631026949733
---

## Sources

[geth-dev/docker-compose.yml at master · javahippie/geth-dev · GitHub](https://github.com/javahippie/geth-dev/blob/master/docker-compose.yml)

## Reminders

## Setup

``` bash
mkdir node1 node2

geth --datadir node1/ account new

# Password: pwdnode1
# Address : 0xF4BAe94083D0d2B010A338B2022cDDBfedD80922

geth --datadir node2/ account new

# Password: pwdnode2
# Address : 0x73DfA929747203a3746bd9402d24dB3c267C8739

echo 'F4BAe94083D0d2B010A338B2022cDDBfedD80922' >> accounts.txt
echo '73DfA929747203a3746bd9402d24dB3c267C8739' >> accounts.txt

echo 'pwdnode1' > node1/password.txt
echo 'pwdnode2' > node2/password.txt

puppeth
# devnet
# 2. - Configure new Gennisis
# 1. - Create new genesis from scratch
# 2. - Clique - proof-of-authority
# 5 seconds
# Steal
# F4BAe94083D0d2B010A338B2022cDDBfedD80922
# 73DfA929747203a3746bd9402d24dB3c267C8739
# Prefund
# 5409ED021D9299bf6814279A6A1411A7e866A631
# 6Ecbe1DB9EF729CBe972C83Fb886247691Fb6beb
# E36Ea790bc9d7AB70C55260C66D52b1eca985f84
# Enter
# Network ID 1337
# 2. Manage existing genesis
# 2. Export genesis configurations
# Enter
# Ctrl + C

geth --datadir node1/ init devnet.json

geth --datadir node2/ init devnet.json

bootnode -genkey boot.key

bootnode -nodekey boot.key -verbosity 9 -addr :30310

# GET THE ENODE

geth --datadir node1/ --syncmode 'full' \
    --port 30311 \
    --http \
    --allow-insecure-unlock \
    --http.api eth,net,web3 \
    --networkid 1337 \
    --password node1/password.txt \
    --graphql \
    --mine \
    --unlock '0xF4BAe94083D0d2B010A338B2022cDDBfedD80922' \
    --bootnodes \
    enode://cb839ba36fd2ea9e010c1f830727f7b407b02ed17758855d3ab3d70d2a73ba8541258c477f35e1f1a470ed4b96daf3b003fd53268d287df02960f56d41ff24fd@127.0.0.1:0?discport=30310



geth --datadir node2/ --syncmode 'full' \
    --port 30312 --http.port 8502 \
    --http.addr 'localhost' \
    --allow-insecure-unlock \
    --http.api eth,net,web3 \
    --networkid 1337 \
    --password node2/password.txt \
    --mine \
    --unlock '0x73DfA929747203a3746bd9402d24dB3c267C8739'\
    --bootnodes \
    enode://cb839ba36fd2ea9e010c1f830727f7b407b02ed17758855d3ab3d70d2a73ba8541258c477f35e1f1a470ed4b96daf3b003fd53268d287df02960f56d41ff24fd@127.0.0.1:0?discport=30310
```


## RESET

``` bash
killall bootnode
killall geth
rm -rf ./node1/geth
rm -rf ./node1/geth

geth --datadir node1/ init devnet.json

geth --datadir node2/ init devnet.json

bootnode -nodekey boot.key -verbosity 9 -addr :30310 &

geth --datadir node1/ --syncmode 'full' \
    --port 30311 \
    --http \
    --allow-insecure-unlock \
    --http.api eth,net,web3 \
    --networkid 1337 \
    --password node1/password.txt \
    --graphql \
    --mine \
    --unlock '0xF4BAe94083D0d2B010A338B2022cDDBfedD80922' \
    --bootnodes \
    enode://cb839ba36fd2ea9e010c1f830727f7b407b02ed17758855d3ab3d70d2a73ba8541258c477f35e1f1a470ed4b96daf3b003fd53268d287df02960f56d41ff24fd@127.0.0.1:0?discport=30310 &



geth --datadir node2/ --syncmode 'full' \
    --port 30312 --http.port 8502 \
    --http.addr 'localhost' \
    --allow-insecure-unlock \
    --http.api eth,net,web3 \
    --networkid 1337 \
    --password node2/password.txt \
    --mine \
    --unlock '0x73DfA929747203a3746bd9402d24dB3c267C8739'\
    --bootnodes \
    enode://cb839ba36fd2ea9e010c1f830727f7b407b02ed17758855d3ab3d70d2a73ba8541258c477f35e1f1a470ed4b96daf3b003fd53268d287df02960f56d41ff24fd@127.0.0.1:0?discport=30310 &
```

