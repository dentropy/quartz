---
id: QFnXBTA2PwnnKhRejXUlt
title: psql
desc: ''
updated: 1654140247652
created: 1628444413878
---

## Get a prompt

``` bash
psql postgresql://postgres:postgres@localhost/postgres

postgresql://user:secret@localhost/DB_Name

psql postgresql://user:user@localhost/postgres

postgresql://user:secret@localhost/DB_Name

psql postgresql://wikijs@localhost:5432/wiki

psql -h <endpoint> -U <userid> -d <databasename> -p <port>
```

## Load in a file

``` bash
psql --set ON_ERROR_STOP=on -U user -h 127.0.0.1 -p 5432 -d mydb < gem_2021-12-14.sql 


## To Test
sudo -u postgres psql -d myDataBase -a -f myInsertFile
```

## Key Commands

* List Databases
  * `\l`
* Connect Database
  * `\c database_name`
* List Tables in current database
  * `\dt`

## Sources

* [What is the format for the PostgreSQL connection string / URL? - Stack Overflow](https://stackoverflow.com/questions/3582552/what-is-the-format-for-the-postgresql-connection-string-url)
