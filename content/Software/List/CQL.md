## Drivers for different programming languages

* [Client drivers | Apache Cassandra Documentation](https://cassandra.apache.org/doc/latest/cassandra/getting_started/drivers.html)
* [Language - Query](../Catagories/Language/Language%20-%20Query.md)

## Links

* [wiki.software.List.Apache Cassandra](Apache%20Cassandra.md)

---
id: ncUKuoqivimSxGzWdwRmg
title: CQL Examples
desc: ''
updated: 1643775352345
created: 1643665935462
---

``` SQL
CREATE TABLE IF NOT EXISTS table_name (var_name_1 type, var_name_2 type,  PRIMARY KEY (var_name_1, var_name_2))
```

``` SQL
INSERT INTO table_name (var_name_1, var_name_2) values (1, "test")
```

``` sql
select * from music_library WHERE artist_name='The Beatles'
```

## WHERE clause

Data Modeling in Apache Cassandra is query focused, and that focus needs to be on the WHERE clause
Failure to include a WHERE clause will result in an error
[ALLOW FILTERING explained | DataStax](https://www.datastax.com/blog/allow-filtering-explained)

## Types

* `int`
* `text`
