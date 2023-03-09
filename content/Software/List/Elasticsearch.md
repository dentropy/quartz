
## Test Server

``` bash
curl http://localhost:9200 -u elastic:changeme

curl http://45.32.84.33:9200 -u elastic:changeme


curl -XPOST "https://45.32.84.33:9200/_search" -d'
  {
     "query": {
       "match_all": {}
     }
  }'
```

## Important Links

* You can use [apps/ELK DentropyCloud-traefik](https://gitlab.com/dentropy/dentropycloud-traefik/-/tree/master/apps/ELK) to set up your own instance

## TODO

* [Elasticsearch from the command line with curl and jq](https://jehrhardt.github.io/blog/2015/04/29/elasticsearch-from-the-command-line-with-curl-and-jq/)
  * [wiki.software.list.jq](jq.md)
* Full Unique Values in Aggregation
    * [Significant terms aggregation | Elasticsearch Guide [7.15] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-significantterms-aggregation.html)
    * [Aggregations | Elasticsearch Guide [7.15] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html)
    * [Elasticsearch - return aggregation to match a specific value? - Stack Overflow](https://stackoverflow.com/questions/37079445/elasticsearch-return-aggregation-to-match-a-specific-value)
    * [Why is SQL join needed? - Quora](https://www.quora.com/Why-is-SQL-join-needed)
    * [elasticsearch - Aggregation returns terms in key , but not the complete field, how can I get full field returned? - Stack Overflow](https://stackoverflow.com/questions/24640117/elasticsearch-aggregation-returns-terms-in-key-but-not-the-complete-field-h)
    * [elasticsearch - No handler for type [string] declared on field [name] - Stack Overflow](https://stackoverflow.com/questions/47452770/no-handler-for-type-string-declared-on-field-name)
    * [ruby - ElasticSearch terms aggregation by entire field - Stack Overflow](https://stackoverflow.com/questions/22798170/elasticsearch-terms-aggregation-by-entire-field)
    * [token - How to not-analyze in ElasticSearch? - Stack Overflow](https://stackoverflow.com/questions/18235996/how-to-not-analyze-in-elasticsearch)
    * [Case insensitive exact matches in Elasticsearch | Codementor](https://www.codementor.io/@mehuljain/case-insensitive-exact-matches-in-elasticsearch-nny7ii7fw)
* [ElasticSearch - Return Unique Values - Stack Overflow](https://stackoverflow.com/questions/25465215/elasticsearch-return-unique-values)
* [Elasticsearch find unique items in list field - Stack Overflow](https://stackoverflow.com/questions/51455713/elasticsearch-find-unique-items-in-list-field)
* [Terms aggregation | Elasticsearch Guide [7.15] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html)
* [A Basic Guide To Elasticsearch Aggregations | Logz.io](https://logz.io/blog/elasticsearch-aggregations/#keys)
* [Elasticsearch Mapping: Basics, Updates, and a Few Examples](https://logz.io/blog/elasticsearch-mapping/)
* [Term query | Elasticsearch Guide [7.15] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-term-query.html)
* [Terms query | Elasticsearch Guide [7.15] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-terms-query.html)
* [Case insensitive exact match search in Elasticsearch · Pranav Prakash](https://pranavprakash.net/2017/09/13/case-insensitive-exact-match-search-in-elasticsearch/)
* Total_fields.limit
  * [Increase total fields limit via creation of index in logstash - Elastic Stack / Logstash - Discuss the Elastic Stack](https://discuss.elastic.co/t/increase-total-fields-limit-via-creation-of-index-in-logstash/98742)
*   [https://subscription.packtpub.com/book/big\_data\_and\_business\_intelligence/9781789954395/2/ch02lvl1sec19/rest-api-overview](https://subscription.packtpub.com/book/big_data_and_business_intelligence/9781789954395/2/ch02lvl1sec16/core-concepts-of-elasticsearch)
*   Install
    *   [GitHub - deviantony/docker-elk: The Elastic stack (ELK) powered by Docker and Compose.](https://github.com/deviantony/docker-elk)
        *   Works currently using
    *   [Running the Elastic Stack on Docker | Getting Started \[7.12\] | Elastic](https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-docker.html)
        *   Offical
    *   [Install Elasticsearch with Debian Package | Elasticsearch Guide \[7.12\] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/7.12/deb.html#deb-repo)
    *   [Install Kibana with Debian package | Kibana Guide \[7.12\] | Elastic](https://www.elastic.co/guide/en/kibana/7.12/deb.html#deb-repo)
*   Tutorials
    *   [Learn Elastic Search and Kibana in 75 Minutes 0 to Hero - YouTube](https://www.youtube.com/watch?v=C-JKcMM6IXE)
    *   [Elasticsearch Tutorial for Beginners - YouTube](https://www.youtube.com/watch?v=kjN7mV5POXc&t=2518s)
    *   [Beginner's Crash Course to Elastic Stack Series Part 1 - YouTube](https://www.youtube.com/watch?v=gS_nHTWZEJ8&list=PL_mJOmq4zsHZYAyK606y7wjQtC0aoE6Es)
        *   [LisaHJung/Beginners-Crash-Course-to-the-Elastic-Stack-Series](https://github.com/LisaHJung/Beginners-Crash-Course-to-the-Elastic-Stack-Series)
*   Books
    *   [Elasticsearch 7 Quick Start Guide | Packt](https://www.packtpub.com/product/elasticsearch-7-quick-start-guide/9781789803327)
    *   [Elasticsearch 7.0 Cookbook - Fourth Edition | Packt](https://www.packtpub.com/product/elasticsearch-7-0-cookbook-fourth-edition/9781789956504)
*   What is Elastic Search
    *   Document Database
*   What can Elastic Search Be used for?
*   Notes
    *   Percussion vs Recall
    *   Ranking via Scoring Algorithm
    *   Inverse Document Frequency
*   Resources
    *   [ElasticSearch Sample Data](https://ikeptwalking.com/elasticsearch-sample-data/)
    *   [News Category Dataset | Kaggle](https://www.kaggle.com/rmisra/news-category-dataset)
*   Other Stuff
    *   [Richard Hallett - Elasticsearch random sampling](http://richardhallett.com/posts/random-sampling-elasticsearch/)
    *   [23 Useful Elasticsearch Example Queries - DZone Big Data](https://dzone.com/articles/23-useful-elasticsearch-example-queries)
    *   [Query string query | Elasticsearch Guide \[7.13\] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html)
    *   [Cardinality Aggregation](http://man.hubwiz.com/docset/ElasticSearch.docset/Contents/Resources/Documents/www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-cardinality-aggregation.html)
*   TODO
    *   [Elasticsearch Scripting: Sorting | Qbox HES](https://qbox.io/blog/elasticsearch-scripting-sorting)
    *   [Getting started with Elasticsearch Painless Script - Programmer Sought](https://www.programmersought.com/article/66035480777/)


## Example curl skipping HTTPS

``` bash
curl -XPUT -u elastic:PASSWORD -k -L http://elasticsearch.dentropy.local/test-index
```

## Skip Verify HTTPS

* [ssl verification fails despite verify_certs=false · Issue #712 · elastic/elasticsearch-py](https://github.com/elastic/elasticsearch-py/issues/712)
* [python - Suppress InsecureRequestWarning: Unverified HTTPS request is being made in Python2.6 - Stack Overflow](https://stackoverflow.com/questions/27981545/suppress-insecurerequestwarning-unverified-https-request-is-being-made-in-pytho)


``` python
import urllib3
from elasticsearch import Elasticsearch
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
es = Elasticsearch(
  ['https://elastic:PASSWORD@elasticsearch.dentropy.local:443'],
  verify_certs=False)
```

## TODO

* [What does "Limit of total fields [1000] in index [] has been exceeded" means in Elasticsearch - Stack Overflow](https://stackoverflow.com/questions/55372330/what-does-limit-of-total-fields-1000-in-index-has-been-exceeded-means-in)
* [How to increase ElasticSearch total field limit using Python API – TechOverflow](https://techoverflow.net/2021/08/03/how-to-increase-elasticsearch-total-field-limit-using-python-api/)
* [How to Create and Delete Elasticsearch Indexes Using the Python Client Library | ObjectRocket](https://kb.objectrocket.com/elasticsearch/how-to-create-and-delete-elasticsearch-indexes-using-the-python-client-library)

## Aggregations

* [ElasticSearch Aggregations Explained – BMC Software | Blogs](https://www.bmc.com/blogs/elasticsearch-aggregation/)
* [Composite aggregation | Elasticsearch Guide [7.15] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-composite-aggregation.html)
* [aggregation query and return all fields in elasticsearch - Stack Overflow](https://stackoverflow.com/questions/33973478/aggregation-query-and-return-all-fields-in-elasticsearch)
* [ElasticSearch - How to display an additional field name in aggregation query - Stack Overflow](https://stackoverflow.com/questions/31721757/elasticsearch-how-to-display-an-additional-field-name-in-aggregation-query)
* [faceted search - elasticsearch - additional field in aggregation results - Stack Overflow](https://stackoverflow.com/questions/30236061/elasticsearch-additional-field-in-aggregation-results)

