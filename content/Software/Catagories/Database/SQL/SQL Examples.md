## TODO

* [SQL sum field when column values match - Stack Overflow](https://stackoverflow.com/questions/12713187/sql-sum-field-when-column-values-match)
* [Sum sql for data in multiple columns and across rows with Total & Percentage](https://www.plus2net.com/sql_tutorial/sql_sum-multiple.php)
* [How to Multiply Two Columns in SQL | LearnSQL.com](https://learnsql.com/cookbook/how-to-multiply-two-columns-in-sql/)
* [How to Write a Multiplication Aggregate Function in SQL – Java, SQL and jOOQ.](https://blog.jooq.org/how-to-write-a-multiplication-aggregate-function-in-sql/)


## Test Database

``` sql
DROP TABLE users;
CREATE TABLE IF NOT EXISTS users (username VARCHAR(50), phone_num VARCHAR(15), bio TEXT, email TEXT);

INSERT INTO users (username, phone_num, bio, email) VALUES ('user001', '11111111111', 'Hi I am user001', 'user001@test.com');
INSERT INTO users (username, phone_num, bio, email) VALUES ('user002', '11112222222', 'This is user 002', 'user002@test2.xyz');
INSERT INTO users (username, phone_num, bio, email) VALUES ('user003', '11113333333', 'I am here to ...', 'user003@test3.org');
INSERT INTO users (username, phone_num, bio, email) VALUES ('user004', '11114444444', 'Hi I am user004', 'user004@test4.net');

select * from users;

SELECT (SELECT regexp_matches(bio, 'Hi')) FROM users;


INSERT INTO users (username, phone_num, bio) VALUES ('user005', '1111555555', 'Hi I am user004 my website is https://randomest.blogspot.com/');

INSERT INTO users (username, phone_num, bio) VALUES ('user005', '1111555555', 'https://news.ycombinator.com/');


SELECT (SELECT regexp_matches(bio, '(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?')) FROM users;


SELECT (SELECT regexp_matches(body, '(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?')) FROM test_reddit_data;


SELECT (SELECT regexp_matches(email, '([^@]+)'  )) FROM users;

SELECT (SELECT regexp_matches(email, '@(.*)'  )) FROM users;

select substring(column_name from '.*://([^/]*)') as domain_name from table_name;

select substring(url from '.*://([^/]*)') as website_domain from test_reddit_comments;
```

``` sql
/* redshift sql */
SELECT (SELECT regexp_substr(bio, '(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?')) FROM users;

SELECT (SELECT regexp_substr(bio, '(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])')) FROM users;


SELECT (SELECT regexp_substr(bio, '/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm')) FROM users;

select substring(bio FROM '.*://([^/]*)') AS domain_name FROM users;

SELECT (SELECT regexp_substr(bio, '[^/]+\\.[^/:]+')) FROM users;

SELECT (SELECT regexp_substr(email, '([^@]+)'  )) FROM users;

SELECT (SELECT regexp_substr(email, '@(.*)'  )) FROM users;

```


[SQL Query To Extract URL / Link From Text Content Of Postgres Database Table | Regex Extractor](https://shareablecode.com/snippets/sql-query-to-extract-url-link-from-text-content-of-postgres-database-table-regex-BbC8-wPyn)

## Create Table

``` sql
CREATE TABLE IF NOT EXISTS table_name (column_name_1 type, column_name_2 type);
```

## Insert into Table

``` sql
INSERT INTO table_name (column_name_1, column_name_2) VALUES (value1, value2)
```

## FInd Duplicates

``` sql
SELECT email, 
 COUNT(email) AS NumOccurrences
FROM users
GROUP BY email
HAVING ( COUNT(email) > 1 )
```

* [Finding Duplicates with SQL](https://www.petefreitag.com/item/169.cfm)

## Auto increment Primary Key

#TODO

## JOIN

``` sql
SELECT * FROM table_1 JOIN table_2 ON \ 
    table_1.column_name_1 = table_2.column_name_2 ;


SELECT * FROM (transactions2 JOIN albums_sold ON \
                               transactions2.Transaction_Id = albums_sold.Transaction_Id JOIN \
                               employees ON transactions2.Employee_Id = employees.Employee_Id );


SELECT transactions2.transaction_id, transactions2.customer_name, \
                     employees.employee_name, transactions2.year, albums_sold.album_name, \
                     sales.amount_spent FROM transactions2\
                JOIN employees    ON transactions2.cashier_id     = employees.employee_id \
                JOIN albums_sold  ON transactions2.transaction_id = albums_sold.transaction_id \
                JOIN sales        ON transactions2.transaction_id = sales.transaction_id;
```

## SUM

``` sql
SELECT cashier_name, SUM(amount_spent) FROM cashier_sales GROUP BY cashier_name;
```

* [SQL SUM() | Syntax and examples of SQL SUM() with code and output](https://www.educba.com/sql-sum/)

## WHERE

## Delete Table

``` sql
DROP table table_name;
```

## Constraints ("NOT NULL", "UNIQUE", "PRIMARY KEY")

``` sql

CREATE TABLE IF NOT EXISTS customer_transactions (
    customer_id int NOT NULL, 
    store_id int NOT NULL, 
    spent numeric
);

CREATE TABLE IF NOT EXISTS customer_transactions (
    customer_id int NOT NULL UNIQUE, 
    store_id int NOT NULL UNIQUE, 
    spent numeric 
);

CREATE TABLE IF NOT EXISTS customer_transactions (
    customer_id int NOT NULL, 
    store_id int NOT NULL, 
    spent numeric,
    UNIQUE (customer_id, store_id, spent)
);

CREATE TABLE IF NOT EXISTS store (
    store_id int PRIMARY KEY, 
    store_location_city text,
    store_location_state text
);

CREATE TABLE IF NOT EXISTS customer_transactions (
    customer_id int, 
    store_id int, 
    spent numeric,
    PRIMARY KEY (customer_id, store_id)
);
```

Note that the last example here of a primary key is actually a composite key

[PostgreSQL: Documentation: 9.4: Constraints](https://www.postgresql.org/docs/9.4/ddl-constraints.html)

## ON CONFLICT

``` sql
CREATE TABLE IF NOT EXISTS customer_address (
    customer_id int PRIMARY KEY, 
    customer_street varchar NOT NULL,
    customer_city text NOT NULL,
    customer_state text NOT NULL
);

INSERT into customer_address (
VALUES
    (432, '758 Main Street', 'Chicago', 'IL'
);

INSERT INTO customer_address (customer_id, customer_street, customer_city, customer_state)
VALUES
 (
 432, '923 Knox Street', 'Albany', 'NY'
 ) 
ON CONFLICT (customer_id) 
DO NOTHING;


INSERT INTO customer_address (customer_id, customer_street)
VALUES
    (
    432, '923 Knox Street, Suite 1' 
) 
ON CONFLICT (customer_id) 
DO UPDATE
    SET customer_street  = EXCLUDED.customer_street;
```

## Insert String Quotes

**Correct**

``` sql
Where 
    pm.Alias = 'Toys''R''Us France'
```

**WRONG**

``` sql
Where 
    pm.Alias = 'Toys'R'Us France'
```

``` sql
Where 
    table_name_one.column_name_one in ('val_1', 'val_2') AND
    table_name_two.column_name_two = 'val3'
```


* [sql server - How do I use single quotes as part of a string in SQL - Stack Overflow](https://stackoverflow.com/questions/47693393/how-do-i-use-single-quotes-as-part-of-a-string-in-sql)

## Distinct

``` sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

* [SQL COUNT DISTINCT | Learn the Examples of SQL COUNT DISTINCT](https://www.educba.com/sql-count-distinct/)
* [SQL SELECT DISTINCT Statement](https://www.w3schools.com/Sql/sql_distinct.asp)

## Group By

## GROUP BY GROUPING SETS

## GROUP BY CUBE

* [GROUP BY CUBE — Snowflake Documentation](https://docs.snowflake.com/en/sql-reference/constructs/group-by-cube.html)

## Order By

## SUM

``` sql
SELECT count(DISTINCT table_name.users)
FROM table_name
```

* [tsql - SQL Server SUM() for DISTINCT records - Stack Overflow](https://stackoverflow.com/questions/20010337/sql-server-sum-for-distinct-records)

## COUNT of DISTINCT

``` sql
SELECT
  category,
  COUNT(*) AS `num`
FROM
  posts
GROUP BY
  category
```

``` sql
SELECT
  district,
  COUNT(*) AS num
FROM
  address
GROUP BY
  district
ORDER BY
  num DESC
LIMIT 10
```

* [mysql - How to get the count of each distinct value in a column? - Stack Overflow](https://stackoverflow.com/questions/7053902/how-to-get-the-count-of-each-distinct-value-in-a-column)

## Limit

``` SQL
SELECT * FROM table_name LIMIT 3;
```

## EXTRACT

## COPY

[PostgreSQL: Documentation: 9.1: COPY](https://www.postgresql.org/docs/9.1/sql-copy.html)

## distkey

## sortkey

## Truncate

## `IS NOT NULL`

## EXISTS

## ETL

``` sql
INSERT INTO table_in (val_in_1, val_in_2, val_in_3)
SELECT val_select_1, val_select_2, val_select_3
FROM table_select;
```

## List Tables

``` sql
select * from pg_catalog.pg_tables;
```

[PostgreSQL List Tables | Listing Out Tables using SELECT Query](https://www.educba.com/postgresql-list-tables/)

## Sources

* [SQL Tutorial](https://www.w3schools.com/sql/)
* [SQL Where – Clause Examples](https://www.freecodecamp.org/news/sql-where-clause-examples/)
* [SQL Query to Match Any Part of String - GeeksforGeeks](https://www.geeksforgeeks.org/sql-query-to-match-any-part-of-string/)
* [SQL exercises on soccer Database: Find the match no, play stage, date of match, number of gole scored, and the result of the match where Portugal played against Hungary - w3resource](https://www.w3resource.com/sql-exercises/soccer-database-exercise/sql-subqueries-exercise-soccer-database-5.php)
* [SQL: Newbie Mistake #1: Using float instead of decimal - The Bit Bucket](https://blog.greglow.com/2018/01/15/sql-newbie-mistake-1-using-float-instead-decimal/)
* [How to use Backticks and quotes when querying a MySQL database](https://chartio.com/learn/sql-tips/single-double-quote-and-backticks-in-mysql-queries/)