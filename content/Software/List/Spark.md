---
id: lAOa4owv1KicuxWCy1kRg
title: Spark
desc: ''
updated: 1650380115013
created: 1645640000122
---

## TODO

* [Create a Spark session optimized to work with Amazon S3. · GitHub](https://gist.github.com/claudinei-daitx/3766d01b070f3f0f8d1b64fd06b71585)

## Similar Software

* [Software.List.pyspark](pyspark.md)
* [Software.list.hdfs](hdfs.md)

## Bookmarks

* [Data Types - Spark 3.2.1 Documentation](https://spark.apache.org/docs/latest/sql-ref-datatypes.html)

## Install

* [docker-spark/docker-compose.yml at master · big-data-europe/docker-spark](https://github.com/big-data-europe/docker-spark/blob/master/docker-compose.yml)
* [Submitting pyspark script to a remote Spark server? - Stack Overflow](https://stackoverflow.com/questions/54641574/submitting-pyspark-script-to-a-remote-spark-server)
* [PierreKieffer/docker-spark-yarn-cluster: Docker multi-nodes Hadoop cluster with Spark 2.4.1 on Yarn](https://github.com/PierreKieffer/docker-spark-yarn-cluster)
* [mohsenasm/spark-on-yarn-cluster: A Procedure To Create A Yarn Cluster Based on Docker, Run Spark, And Do TPC-DS Performance Test.](https://github.com/mohsenasm/spark-on-yarn-cluster)


[Software.list.JDK](JDK.md)

``` bash
ssh -L 8080:localhost:8080 paul@10.10.64.125
ssh -L 7077:localhost:7077 paul@10.10.64.125
``` 
``` bash
./sbin/start-master.sh --webui-port 8090

# Check local URL, localhost:8090

# ./sbin/start-worker.sh spark://pop-os.localdomain:7077 
./sbin/start-worker.sh spark://pop-os.localdomain:7077 --memory 10G
# --memory 4G

./sbin/start-slave.sh spark://pop-os.localdomain:7077  --memory 4G
# --memory 4G

## Stop

./sbin/stop-all.sh
./sbin/stop-slave.sh
./sbin/stop-worker.sh
```

``` bash
SPARK_HOME=/home/paul/Projects/Software/spark-3.2.1-bin-hadoop3.2
$SPARK_HOME/bin/pyspark

$SPARK_HOME/bin/spark-submit \
--master spark://127.0.0.1:7707 \
--packages 'com.somesparkjar.dependency' \
--py-files packages.zip \
--files configs/etl_config.json \
jobs/etl_job.py
```

* How to I test a connection to a spark cluster
  ```
  pip3 install pipenv
  ```
* QPS
  * How to I get access to the dashboard
    * `localhost:8080`

## Connect

* EMR, SSH in wih port forwarding then connect localhost

``` python
from pyspark.sql import SparkSession
import pyspark.sql.functions as F
import pyspark.sql.types     as T
spark = SparkSession.builder.master("spark://pop-os.localdomain:7077").getOrCreate()
```

## AWS EMR

``` bash
aws emr create-cluster \
  --name pauls-erm-cluster \
  --use-default-roles \
  --release-label emr-5.28.0 \
  --instance-count 3 \
  --applications Name=Spark  \
  --ec2-attributes KeyName=spark-cluster \
  --instance-type m5.xlarge 
aws emr describe-cluster --cluster-id j-15X6GZ29LDDWQ
arn:aws:elasticmapreduce:us-east-1:223248724517:cluster/j-15X6GZ29LDDWQ


aws emr list-clusters
aws emr ssh --cluster-id j-2P9C90OTJUUXO --key-pair-file ~/.ssh/spark-cluster.pem
aws emr socks --cluster-id j-2P9C90OTJUUXO --key-pair-file ~/.ssh/spark-cluster.pem
aws emr terminate-clusters --cluster-ids j-15X6GZ29LDDWQ
```

## Core Functions

* SparkContext, SparkConf
* General Functions
    * select()
    * filter()
    * where()
    * sort()
    * dropDuplicates()
    * withColumn()
* Aggregate Functions
    * count()
    * countDistinct()
    * avg()
    * max()
    * min()
    * groupBy()
    * agg()
* UDFs and pyspark.sql.types
* Window Functions
    * partitionBy
    * rangeBetween
    * rowsBetween
* [Spark SQL and DataFrames - Spark 3.2.1 Documentation](https://spark.apache.org/docs/latest/sql-programming-guide.html)

## List stuff from specific column

``` python
dataframe.select('ID').where(dataframe.ID == 4).count()
```

[Count values by condition in PySpark Dataframe - GeeksforGeeks](https://www.geeksforgeeks.org/count-values-by-condition-in-pyspark-dataframe/)


## Distinct Specific Column

``` python
df.select('col_name').distinct().show()
```

[scala - Fetching distinct values on a column using Spark DataFrame - Stack Overflow](https://stackoverflow.com/questions/38946337/fetching-distinct-values-on-a-column-using-spark-dataframe)

## Count in specifc columns

[Count values by condition in PySpark Dataframe - GeeksforGeeks](https://www.geeksforgeeks.org/count-values-by-condition-in-pyspark-dataframe/)

## Count Distinct

[Spark DataFrame: count distinct values of every column - Stack Overflow](https://stackoverflow.com/questions/40888946/spark-dataframe-count-distinct-values-of-every-column)

## Sorting

[PySpark Sort | How PySpark Sort Function works in PySpark?](https://www.educba.com/pyspark-sort/)
