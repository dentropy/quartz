## Default username and password

User: postgres
Pass: postgres

## Reminders

``` bash
\l                    # list databases
CREATE DATABASE_NAME  # Create a new database
\c DATABASE_ NAME     # connect to database
\dt                   # Show Tables in Database
\df                   # List all functions
\d+ TABLE_NAME        # Show what is in the table
```

## Connect docker

``` bash
```
docker run --name misskey-db -e POSTGRES_PASSWORD=example-misskey-pass -d -p 5432:5432 postgres
```
```
## Example Databases

* [PostgreSQL Sample Database](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/)

## Functions

## Cursor

``` sql
BEGIN;
DECLARE 
    curs1 CURSOR FOR
    SELECT * FROM rental;
FETCH 10 FROM curs1;
FETCH PRIOR FROM curs1;
FETCH PRIOR FROM curs1;
FETCH PRIOR FROM curs1;
FETCH 3 FROM curs1;
COMMIT;
```

* [PostgreSQL - Cursor - GeeksforGeeks](https://www.geeksforgeeks.org/postgresql-cursor/)

## Triggers 

* [The Ultimate Guide To The PostgreSQL Triggers](https://www.postgresqltutorial.com/postgresql-triggers/)

## Restore from backup

``` bash
pg_restore --host localhost --port 5432 --password user -c -U user -d dvdrental -v "/home/paul/Downloads/dvdrental.tar" -W
```

## Data Types

[PostgreSQL: Documentation: 9.5: Data Types](https://www.postgresql.org/docs/9.5/datatype.html)

## Raw Install

* [How To Install PostgreSQL on Ubuntu 20.04 [Quickstart] | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart)

``` bash
sudo -u postgres psql
```


## [wiki.software.list.docker.docker-compose.templates](docker-compose%20templates)

* What is searchPath in postgres

``` bash
psql postgresql://user:user@127.0.0.1:5432/postgres
```

``` yaml
version: '3.1'

services:

  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: user 
      POSTGRES_DB: postgres
    ports:
      - 127.0.0.1:5432:5432

  adminer:
    image: adminer
    restart: always
    ports:
      - 127.0.0.1:8086:8080
```

## Links

* [wiki.software.List.psql](psql.md)


## Sources

* [linux - Error: You must install at least one postgresql-client-<version> package - Stack Overflow](https://stackoverflow.com/questions/5301997/error-you-must-install-at-least-one-postgresql-client-version-package)