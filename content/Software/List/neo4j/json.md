---
id: YH3a6DGwTxpojx7UH1Fu2
title: Json
desc: ''
updated: 1639930777967
created: 1639693717186
---

## TODO

* [Neo4j query examples](https://gist.github.com/wjgilmore/8ba5f31ef1435dc04c52)

## Dumping Data Procedure

* Load data in
* Index data
* Relate data

## Remember to check [wiki.software.list.neo4j.errors](dentropydaemon-wiki/Wiki/Software/list/neo4j/errors) 

``` bash
# data folder
/var/lib/neo4j/data
```

``` bash
cp nvdcve-1.1-modified.json /var/lib/neo4j/
cypher-shell -u $neouser -p $neopass
cypher-shell -u neo4j -p neo4jneo4j
```

``` cypher
WITH "file:///nvdcve-1.1-modified.json" as url 
CALL apoc.load.json(url) YIELD value 
UNWIND keys(value) AS key
RETURN key, apoc.meta.type(value[key]);

WITH "file:///nvdcve-1.1-modified.json" as url 
CALL apoc.load.json(url) YIELD value 
UNWIND  value.CVE_data_numberOfCVEs as Cnt
RETURN Cnt;


CALL apoc.load.json('nvdcve-1.1-modified.json');
CALL apoc.load.json('file:///testcred.json');

WITH "file:///testcred.json" as url 
CALL apoc.load.json(url) YIELD value 
UNWIND keys(value) AS key
RETURN key, apoc.meta.type(value[key]);

WITH "file:///testcred.json" as url 
CALL apoc.load.json(url)
```

## Source

* [Setting apoc.import.file.enabled=true in your neo4j.conf - Neo4j Graph Platform / Procedures & APOC - Neo4j Online Community](https://community.neo4j.com/t/setting-apoc-import-file-enabled-true-in-your-neo4j-conf/4293/4)
* [Loading JSON in Neo4j & Creating Nodes | by Faaiz SHAH | Medium](https://medium.com/@faaizhussain/loading-json-in-neo4j-1e3e396fd219)
* * [Load JSON - APOC Documentation](https://neo4j.com/labs/apoc/4.1/import/load-json/)