---
id: 7bx2w1tgz5hfnwfytkdc5do
title: pyspark
desc: ''
updated: 1649436610445
created: 1645818657956
---

## Getting Started

``` python
from pyspark.sql import SparkSession

def init_spark():
  spark = SparkSession.builder.appName("HelloWorld").getOrCreate()
  # spark = SparkSession.builder.master("spark://192.168.2.99:7077").getOrCreate()
  sc = spark.sparkContext
  return spark,sc

def main():
  spark,sc = init_spark()
  nums = sc.parallelize([1,2,3,4])
  print(nums.map(lambda x: x*x).collect())


if __name__ == '__main__':
  main()
```
* [pyspark-hello-world.py](https://gist.github.com/dvainrub/b6178dc0e976e56abe9caa9b72f73d4a)

## Submit

[python - Pyspark - Error related to SparkContext - no attribute _jsc - Stack Overflow](https://stackoverflow.com/questions/54042945/pyspark-error-related-to-sparkcontext-no-attribute-jsc/56374013)

## TODO

* [PySpark Union and UnionAll Explained — SparkByExamples](https://sparkbyexamples.com/pyspark/pyspark-union-and-unionall/)
* [udacity/nd027-c3-data-lakes-with-spark](https://github.com/udacity/nd027-c3-data-lakes-with-spark)
* [AlexIoannides/pyspark-example-project: Example project implementing best practices for PySpark ETL jobs and applications.](https://github.com/AlexIoannides/pyspark-example-project)
* [PySpark Tutorial For Beginners | Python Examples — Spark by {Examples}](https://sparkbyexamples.com/pyspark-tutorial/#rdd)
* [Running PySpark as a Spark standalone job — Anaconda documentation](https://docs.anaconda.com/anaconda-scale/howto/spark-basic/)
* [First Steps With PySpark and Big Data Processing – Real Python](https://realpython.com/pyspark-intro/)
* [Docker/Jupyter PySpark - charlesreid1](https://charlesreid1.com/wiki/Docker/Jupyter_PySpark)
* [aljavier/spark-docker-setup: Small setup of development environment for Apache Spark with docker](https://github.com/aljavier/spark-docker-setup)
* [python - How divide or multiply every non-string columns of a PySpark dataframe with a float constant? - Stack Overflow](https://stackoverflow.com/questions/44807818/how-divide-or-multiply-every-non-string-columns-of-a-pyspark-dataframe-with-a-fl/44808418)
* [apache spark - Pyspark dataframe write to single json file with specific name - Stack Overflow](https://stackoverflow.com/questions/43269244/pyspark-dataframe-write-to-single-json-file-with-specific-name)
* [python - How do I select rows from a DataFrame based on column values? - Stack Overflow](https://stackoverflow.com/questions/17071871/how-do-i-select-rows-from-a-dataframe-based-on-column-values)
* [python - Concatenate two PySpark dataframes - Stack Overflow](https://stackoverflow.com/questions/37332434/concatenate-two-pyspark-dataframes)

## Cool Sources

* [7 Bilingual PySpark: blending Python and SQL code - Data Analysis with Python and PySpark MEAP V14](https://livebook.manning.com/book/data-analysis-with-python-and-pyspark/chapter-7/v-6/46)
* [INSERT INTO - Spark 3.2.1 Documentation](https://spark.apache.org/docs/latest/sql-ref-syntax-dml-insert-into.html)


## [wiki.software.list.json](json.md)

* [Working with JSON in Apache Spark | by Neeraj Bhadani | Expedia Group Technology | Medium](https://medium.com/expedia-group-tech/working-with-json-in-apache-spark-1ecf553c2a8c)
* [apache spark - PySpark dataframe to_json() function - Stack Overflow](https://stackoverflow.com/questions/49602965/pyspark-dataframe-to-json-function)
* [apache spark - Pyspark dataframe write to single json file with specific name - Stack Overflow](https://stackoverflow.com/questions/43269244/pyspark-dataframe-write-to-single-json-file-with-specific-name)

## Cast as new column 

``` python
changedTypedf = joindf.withColumn("label", joindf["show"].cast("double"))
```
* [python - How to change a dataframe column from String type to Double type in PySpark? - Stack Overflow](https://stackoverflow.com/questions/32284620/how-to-change-a-dataframe-column-from-string-type-to-double-type-in-pyspark)
* [python - Adding a new column in Data Frame derived from other columns (Spark) - Stack Overflow](https://stackoverflow.com/questions/31333437/adding-a-new-column-in-data-frame-derived-from-other-columns-spark)
* [python - Mapping columns from one dataframe to another to create a new column - Stack Overflow](https://stackoverflow.com/questions/46049658/mapping-columns-from-one-dataframe-to-another-to-create-a-new-column)

## Lists

## JOIN

* [udacity-data-lake/etl.py at main · dentropy/udacity-data-lake](https://github.com/dentropy/udacity-data-lake/blob/main/etl.py)

## Notes

* [python - Spark DataFrame groupBy and sort in the descending order (pyspark) - Stack Overflow](https://stackoverflow.com/questions/34514545/spark-dataframe-groupby-and-sort-in-the-descending-order-pyspark)
* Select Column
  ``` python
  df["column_name"](%22column_name%22)
  ```
* Do basic math in middle of query
  ``` python
  df.schema
  df.printSchema()
  ```
  * [scala - How to check the schema of DataFrame? - Stack Overflow](https://stackoverflow.com/questions/52760911/how-to-check-the-schema-of-dataframe)
* Append Dataframe / Add a Row
  * [scala - How to add a Spark Dataframe to the bottom of another dataframe? - Stack Overflow](https://stackoverflow.com/questions/33550983/how-to-add-a-spark-dataframe-to-the-bottom-of-another-dataframe)
  * [Add Row to Dataframe in Pandas – thisPointer](https://thispointer.com/python-pandas-how-to-add-rows-in-a-dataframe-using-dataframe-append-loc-iloc/)
* Copy Columns possibly in another table
  ``` python
  
  ```
  * [How to copy columns to a new Pandas DataFrame in Python](https://www.adamsmith.haus/python/answers/how-to-copy-columns-to-a-new-pandas-dataframe-in-python)
* Set column name in select query `alias`
  ``` python
  import pyspark.sql.functions as F
  unioned_df.select(F.to_timestamp(F.from_unixtime( F.col("ts") / 1000 )).alias('time_stamp')).show()
  ```
* Cast dataframe pyspark
  ``` python
  
  ```
  * [python - How to change a dataframe column from String type to Double type in PySpark? - Stack Overflow](https://stackoverflow.com/questions/32284620/how-to-change-a-dataframe-column-from-string-type-to-double-type-in-pyspark)
* List data already in spark
  ``` python
  spark.sql('show databases').show()
  spark.sql("show tables in default").show()
  spark.catalog.listTables('default')
  ```
  * [List Tables & Databases in Apache Spark | by Swaroop | Medium](https://medium.com/@durgaswaroop/list-tables-and-databases-in-spark-2d03594d2883)
* Save dataframe to spark sql table
  ``` python
  unioned_df.write.saveAsTable('default.log_data')
  ```
* Access data already in spark
  ``` python
  spark.sql("SELECT * FROM log_data").toPandas()
  ```
* Timestamp stuff
  * [scala - How to convert unix timestamp to date in Spark - Stack Overflow](https://stackoverflow.com/questions/31134969/how-to-convert-unix-timestamp-to-date-in-spark)
* Case
  * [pyspark - Apache spark dealing with case statements - Stack Overflow](https://stackoverflow.com/questions/39982135/apache-spark-dealing-with-case-statements)

## Dataframe Examples


* Example Data Frames
  * [PySpark - Create an Empty DataFrame & RDD — SparkByExamples](https://sparkbyexamples.com/pyspark/pyspark-create-an-empty-dataframe/)
  * [PySpark - Create DataFrame from List - GeeksforGeeks](https://www.geeksforgeeks.org/pyspark-create-dataframe-from-list/)
* Put a list of JSON files or CSV's into a single data frame
  * [python - Merging multiple data frames row-wise in PySpark - Data Science Stack Exchange](https://datascience.stackexchange.com/questions/11356/merging-multiple-data-frames-row-wise-in-pyspark)
  ``` python
  import glob
  import os 
  log_files = glob.glob(os.getcwd() + '/log-data/*')
  list_of_dfs = []
  for log_file in log_files:
      list_of_dfs.append( spark.read.json(log_file) )
  import functools 
  def unionAll(dfs):
      return functools.reduce(lambda df1,df2: df1.union(df2.select(df1.columns)), dfs) 
  unioned_df = unionAll(list_of_dfs)
  ```

## S3

* [python - Pyspark Save dataframe to S3 - Stack Overflow](https://stackoverflow.com/questions/45869510/pyspark-save-dataframe-to-s3)