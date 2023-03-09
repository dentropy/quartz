---
id: wBR0JpZHcC7eGZsIJJzt7
title: Elasticsearch Curl
desc: ''
updated: 1640289295688
created: 1628444413887
---


# Elastic Curl Commands

[ElasticSearch Commands Cheat Sheet – BMC Software | Blogs](https://www.bmc.com/blogs/elasticsearch-commands/)

``` bash
ELASTIC_USER=elastic
ELASTIC_USER=admin
ELASTIC_PASS=admin
ELASTIC_NODE=http://localhost:9200
curl -XGET  -iL -u $ELASTIC_USER:$ELASTIC_PASS $ELASTIC_NODE/_cluster/health?pretty --insecure
curl -XGET  -iL -u $ELASTIC_USER:$ELASTIC_PASS $ELASTIC_NODE/_cat/indices/*?v&s=index --insecure 
curl -XPUT  -iL -u $ELASTIC_USER:$ELASTIC_PASS "$ELASTIC_NODE/movies/movie/1" -d''
curl -XPOST -iL -u $ELASTIC_USER:$ELASTIC_PASS "$ELASTIC_NODE/test/_doc/1" -d @lane.json
```

``` bash
curl -v -s -XPUT -iL -u $ELASTIC_USER:$ELASTIC_PASS "$ELASTIC_NODE/${INDEX_NAME}?pretty"
 curl -XDELETE http://<node-ip|hostname>:9200/<index-name>
```


## Change Password

[](User%20Management%7Cwiki.software.List.Opensearch#user-management)


```
PUT _plugins/_security/api/account
{
    "current_password" : "old-password",
    "password" : "new-password"
}
```
```
ELASTIC_USER=admin
ELASTIC_PASS=admin
ELASTIC_NODE=http://localhost:9200
curl --header "Content-Type: application/json" \
  -u $ELASTIC_USER:$ELASTIC_PASS \
  --request PUT \
  --data '{"current_password" : "admin","password" : "admin2"}' \
  $ELASTIC_NODE/_plugins/_security/api/account --insecure

curl --header "Content-Type: application/json" \
  -u $ELASTIC_USER:$ELASTIC_PASS \
  --request PUT \
  --data '{"password": "kirkpass"}' \
  https://localhost:9200/_plugins/_security/api/internalusers/spock --insecure
```


## Links and sources

* [wiki.software.List.curl](dentropydaemon-wiki/Wiki/Software/list/Elasticsearch/Curl)
* [curl - How to perform token authentication in elasticsearch? - Stack Overflow](https://stackoverflow.com/questions/45530480/how-to-perform-token-authentication-in-elasticsearch)
* [Import/Index a JSON file into Elasticsearch - Stack Overflow](https://stackoverflow.com/questions/15936616/import-index-a-json-file-into-elasticsearch)
* [Follow Redirects in cURL](https://stackabuse.com/follow-redirects-in-curl/)
* [How to delete Elasticsearch Index data with curl | ComputingForGeeks](https://computingforgeeks.com/easy-way-to-delete-elasticsearch-index-data/)