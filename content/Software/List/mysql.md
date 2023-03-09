---
id: nvPmwaRnubtwS7Y9NQvO2
title: mysql
desc: ''
updated: 1657157208578
created: 1632919959831
---
## Connecting

``` bash
sudo su
mysql
```

## Basic Commands

``` sql
/* list databases */
SHOW DATABASES;
/* list tables in database */
SHOW SCHEMAS;
/* Connect database */
USE DATABASE_NAME;
```

``` bash
# Docker Compatible
mysql --user=user -p mydb --host=127.0.0.1 -P 3306 < data.sql

mysql --user=root -p deepwork --host=127.0.0.1 -P 3307 < db/script.sql

mysql --user=root -p deepwork --host=127.0.0.1 -P 3307

mysql --user=root -p mydb < data.sql


```

## Allow Remote Connection

``` sql
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%.%.%.%' 
  IDENTIFIED BY 'Piepie1234.' WITH GRANT OPTION;
```
## [wiki.software.list.docker.docker-compose.templates](docker-compose%20templates)

[MySQL :: MySQL Downloads](https://www.mysql.com/downloads/)

``` yaml
version: "3"
services:
  mysql:
    image: mysql:5.7
    # volumes:
    #   - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mydb
      MYSQL_USER: user
      MYSQL_PASSWORD: user
    ports:
      - 127.0.0.1:3306:3306
  
```

## Errors

* [Installing TokuDB - MariaDB Knowledge Base](https://mariadb.com/kb/en/installing-tokudb/)

## Sources

* [How to configure mariadb docker-compose file to use other port than 3306? - Stack Overflow](https://stackoverflow.com/questions/56212960/how-to-configure-mariadb-docker-compose-file-to-use-other-port-than-3306)
* [How do I import an SQL file using the command line in MySQL? - Stack Overflow](https://stackoverflow.com/questions/17666249/how-do-i-import-an-sql-file-using-the-command-line-in-mysql)