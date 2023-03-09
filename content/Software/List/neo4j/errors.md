---
id: N9dqCRnCPd2Xl7nWF4vSA
title: Errors
desc: ''
updated: 1639968454388
created: 1639694256751
---

## Failed to invoke procedure `apoc.load.json`: Caused by: java.lang.RuntimeException: Import from files not enabled, please set apoc.import.file.enabled=true in your apoc.conf

* Open up file location for configuration

``` bash
cd /etc/neo4j/apoc.conf
```

``` config
apoc.import.file.enabled=true
apoc.import.file.use_neo4j_config=true
```

``` bash
sudo systemctl restart neo4j
```

* [Setting apoc.import.file.enabled=true in your neo4j.conf - Neo4j Graph Platform / Procedures & APOC - Neo4j Online Community](https://community.neo4j.com/t/setting-apoc-import-file-enabled-true-in-your-neo4j-conf/4293/24)

## apoc.meta.type is unavailable because it is sandboxed and has dependencies outside of the sandbox. Sandboxing is controlled by the dbms.security.procedures.unrestricted setting. Only unrestrict procedures you can trust with access to database internals.

``` bash
cd /etc/neo4j/apoc.conf
```
``` config
# Add lines
dbms.security.procedures.unrestricted=algo.*,apoc.*
```

``` bash
sudo systemctl restart neo4j
```

* [Neo4j Install APOC and Graph Algorithms Neo.ClientError.Procedure.ProcedureRegistrationFailed - Stack Overflow](https://stackoverflow.com/questions/48773505/neo4j-install-apoc-and-graph-algorithms-neo-clienterror-procedure-procedureregis)


## [cypher - Why does neo4j warn: "This query builds a cartesian product between disconnected patterns"? - Stack Overflow](https://stackoverflow.com/questions/33352673/why-does-neo4j-warn-this-query-builds-a-cartesian-product-between-disconnected)