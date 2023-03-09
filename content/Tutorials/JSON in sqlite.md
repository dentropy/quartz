```sql
create table user(name,phone);
insert into user (name, phone) values("oz", json('{"cell":"+491765", "home":"+498973"}'));
select user.phone from user where user.name=='oz';
select json_extract(user.phone, '$.cell') from user;
select json_set(user.phone, '$.cell', 123) from user;
```

## Sources
* [SQLite JSON1 example for JSON extract\set - Stack Overflow](https://stackoverflow.com/questions/33432421/sqlite-json1-example-for-json-extract-set)
* [python loop over sqlite select with .fetchmany() until no entries left - Stack Overflow](https://stackoverflow.com/questions/41852393/python-loop-over-sqlite-select-with-fetchmany-until-no-entries-left)