---
id: eVZtWFkZMjSNT6SnOck5m
title: MariaDB
desc: ''
updated: 1639606377655
created: 1639524338950
---

## [wiki.software.list.docker.docker-compose.templates](docker-compose%20templates)

``` yaml
version: '3.1'

services:

  db:
    image: mariadb
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: maria
      MYSQL_DATABASE: mydb
      MYSQL_USER: user
      MYSQL_PASSWORD: user
      MYSQL_TCP_PORT: 3306
    # volumes: 
    #     - ./init:/docker-entrypoint-initdb.d
    ports:
      - 127.0.0.1:3306:3306

  adminer:
    image: adminer
    restart: always
    ports:
      - 127.0.0.1:8086:8080
```

``` bash

mysql -u {username} -p'{password}' \
    -h {remote server ip or name} -P {port} \
    -D {DB name}

mysql -u user -p 'user' \
    -h 127.0.0.1 -P 3306 \
    -D mydb
    
     < gem_2021-12-14.sql 

```

* [Docker Compose MariaDB. In this article, We will explain to you… | by Onexlab | Medium](https://onexlab-io.medium.com/docker-compose-mariadb-5eb7a37426a2)
