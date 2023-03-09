[sqlite - python sqlite3 insert list - Stack Overflow](https://stackoverflow.com/questions/43240617/python-sqlite3-insert-list)  [dentropydaemon-wiki/Software/Programming Language/python](dentropydaemon-wiki/Software/Programming%20Language/python)

## Save query as a CSV or JSON file

* [SQLite: How do I save the result of a query as a CSV file? - Stack Overflow](https://stackoverflow.com/questions/6076984/sqlite-how-do-i-save-the-result-of-a-query-as-a-csv-file)
* [Export SQLite Database To a CSV File](https://www.sqlitetutorial.net/sqlite-export-csv/)

## Copy table from one database to another

[SQLite: Easiest way to copy a table from one database to another? - Stack Overflow](https://stackoverflow.com/questions/29220677/sqlite-easiest-way-to-copy-a-table-from-one-database-to-another/29221750)

## Time

**Get Month from datetime**
``` sql
select strftime('%m', dateField) as Month ...
```

* %S seconds
* %M Minutes
* %H hours
* %Y year
* %d day

* [sql - Get month from DATETIME in sqlite - Stack Overflow](https://stackoverflow.com/questions/650480/get-month-from-datetime-in-sqlite)
* [SQLite strftime() function - w3resource](https://www.w3resource.com/sqlite/sqlite-strftime.php)


## Get day of week

[sql - Format date as day of week - Stack Overflow](https://stackoverflow.com/questions/4319302/format-date-as-day-of-week)

## Unsorted

* [MySQL Count Matching Records With COUNT](https://linuxhint.com/identify-duplicate-values-mysql/)
* [SQLite functions](https://zetcode.com/db/sqlite/sqlitefunctions/)
* [sqlite-utils command-line tool - sqlite-utils](https://sqlite-utils.datasette.io/en/stable/cli.html)
* [2 Ways to List the Tables in an SQLite Database | Database.Guide](https://database.guide/2-ways-to-list-tables-in-sqlite-database/)

## String Manipulation

* [sql - How do I find the position of a character in a SQLite column? - Stack Overflow](https://stackoverflow.com/questions/6989895/how-do-i-find-the-position-of-a-character-in-a-sqlite-column)
* [sql - How to search for a substring in SQLite? - Stack Overflow](https://stackoverflow.com/questions/3671761/how-to-search-for-a-substring-in-sqlite)

## JSON Support

* [projects.aw-experiments](../../Projects/ActivityWatch%20Experiments.md)
* [SQLite JSON1 example for JSON extract\set - Stack Overflow](https://stackoverflow.com/questions/33432421/sqlite-json1-example-for-json-extract-set/33433552)
* [sql - Sqllite : search value from json string - Stack Overflow](https://stackoverflow.com/questions/41405569/sqllite-search-value-from-json-string)
* [SQLite and JSON](https://samadhiweb.com/blog/2016.04.24.sqlite.json.html)
* [JSON Functions And Operators](https://sqlite.org/json1.html)
* [wiki.software.list.json](json.md)

## Regex

``` sql
select * from TABLE
where COLUMN regexp '.'
```

[How do I use regex in a SQLite query? - Stack Overflow](https://stackoverflow.com/questions/5071601/how-do-i-use-regex-in-a-sqlite-query)

## Split string by delimiter

``` sql
select foods.value 
from json_each('["' || replace('coffee:apple:orange', ':', '","') || '"]') as foods;
```

* [How to Split String into Array? : sqlite](https://old.reddit.com/r/sqlite/comments/s4b29t/how_to_split_string_into_array/)
  * Source for example above
* [android - How to split comma-separated value in SQLite? - Stack Overflow](https://stackoverflow.com/questions/24258878/how-to-split-comma-separated-value-in-sqlite)
  * Did not get working looks interesting