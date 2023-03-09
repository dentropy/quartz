[Language - Query](../Catagories/Language/Language%20-%20Query.md)

## TODO

* [cypher - Test if relationship exists in neo4j / spring data - Stack Overflow](https://stackoverflow.com/questions/42022215/test-if-relationship-exists-in-neo4j-spring-data)

## Sources

* [Learn cypher in Y Minutes](https://learnxinyminutes.com/docs/cypher/)
* [The Neo4j Cypher Manual v4.4 - Neo4j Cypher Manual](https://neo4j.com/docs/cypher-manual/current/)

## Commands
 
``` cypher
:server status
:server connect
:sysinfo
:clear
:history
:play start
:help
  :help keys
  :help cypher
  :help Schema
  :help with
  :help match
  :help return
  :help create-constraint-on
  :help create-index-on
  :help load-csv
```

## Default Databases

* neo4j
* system

## Features

* Save and export files just like jupyter notebooks

## Cypher Examples

* [wiki.software.programming language.cypher.Basic Queries](cypher/Basic%20Queries.md)
* [wiki.software.programming language.cypher.examples Simplist Example](cypher/examples%20Simplist%20Example.md)
* [wiki.software.programming language.cypher.examples.Movie Graph Example](cypher/examples/Movie%20Graph%20Example.md)

## Running Scripts

``` bash
cypher-shell -f yourscriptname
cat neo_4.cypher | cypher-shell
sudo cypher-shell arguments_as_needed < neo_4.cypher
```

* Source 
  * [csv - How to run a cypher script file from Terminal with the cypher-shell neo4j command? - Stack Overflow](https://stackoverflow.com/questions/56038659/how-to-run-a-cypher-script-file-from-terminal-with-the-cypher-shell-neo4j-comman)
