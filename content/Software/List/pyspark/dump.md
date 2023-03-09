---
id: om7apzqt7zyuw4dwpmg23d5
title: Dump
desc: ''
updated: 1646686202521
created: 1646686141773
---

``` python

builder = SparkSession.builder \
        .appName("Spark NLP") \
        .master("local[*]") \
        .config("spark.jars.packages", "org.apache.hadoop:hadoop-aws:2.7.3")\
        .config('spark.hadoop.fs.s3a.aws.credentials.provider', 'org.apache.hadoop.fs.s3a.TemporaryAWSCredentialsProvider') \
        .config('spark.hadoop.fs.s3a.session.token', os.environ["AWS_SESSION_TOKEN"]) \
        .config('spark.hadoop.fs.s3a.impl', 'org.apache.hadoop.fs.s3a.S3AFileSystem')\
        .config('spark.hadoop.fs.s3n.awsAccessKeyId', os.environ["AWS_ACCESS_KEY_ID"])\
        .config('spark.hadoop.fs.s3n.awsSecretAccessKey', os.environ["AWS_SECRET_ACCESS_KEY"]) \
        .config('spark.hadoop.fs.s3a.access.key', os.environ["AWS_ACCESS_KEY_ID"] ) \
#         .config('spark.hadoop.fs.s3a.secret.key', os.environ["AWS_SECRET_ACCESS_KEY"])\
        # .config('spark.hadoop.fs.s3a.endpoint', 's3-us-west-2.amazonaws.com') \
spark = builder.getOrCreate()

builder = SparkSession.builder \
        .appName("Spark NLP") \
        .master("local[*]") \
        .config("spark.jars.packages", "org.apache.hadoop:hadoop-aws:2.7.0")\
        .config('spark.hadoop.fs.s3a.access.key', os.environ["AWS_ACCESS_KEY_ID"] ) \
        .config('spark.hadoop.fs.s3a.secret.key', os.environ["AWS_SECRET_ACCESS_KEY"])\
        .config('spark.hadoop.fs.s3a.session.token', os.environ["AWS_SESSION_TOKEN"]) \
        .config('spark.hadoop.fs.s3a.endpoint', 's3-us-west-2.amazonaws.com') \
        .config('spark.hadoop.fs.s3a.impl', 'org.apache.hadoop.fs.s3a.S3AFileSystem')
spark = builder.getOrCreate()


spark = SparkSession.builder\
     .config("spark.jars.packages","org.apache.hadoop:hadoop-aws:2.10.1")\
     .getOrCreate()
spark._jsc.hadoopConfiguration().set("fs.s3a.access.key", os.environ["AWS_ACCESS_KEY_ID"] )
spark._jsc.hadoopConfiguration().set("fs.s3a.secret.key", os.environ["AWS_SECRET_ACCESS_KEY"] )
spark._jsc.hadoopConfiguration().set("fs.s3a.session.token", os.environ["AWS_SESSION_TOKEN"]  )


spark = SparkSession.builder\
     .config("spark.jars.packages","org.apache.hadoop:hadoop-aws:2.7.0")\
     .config("fs.s3a.access.key", os.environ["AWS_ACCESS_KEY_ID"] ) \
     .config("fs.s3a.secret.key", os.environ["AWS_SECRET_ACCESS_KEY"] ) \
     .config("fs.s3a.session.token", os.environ["AWS_SESSION_TOKEN"] ) \
     .config("fs.s3a.endpoint", "s3.us-west-2.amazonaws.com") \
     .getOrCreate()

spark = SparkSession.builder \
    .appName("test bucket access") \
    .config("spark.hadoop.fs.s3.impl", "org.apache.hadoop.fs.s3a.S3AFileSystem") \
    .config("spark.hadoop.fs.s3a.aws.credentials.provider", "org.apache.hadoop.fs.s3a.TemporaryAWSCredentialsProvider") \
     .config("spark.hadoop.fs.s3a.access.key", os.environ["AWS_ACCESS_KEY_ID"] ) \
     .config("spark.hadoop.fs.s3a.secret.key", os.environ["AWS_SECRET_ACCESS_KEY"] ) \
     .config("spark.hadoop.fs.s3a.session.token", os.environ["AWS_SESSION_TOKEN"] ) \
     .config("spark.hadoop.fs.s3a.endpoint", "s3.us-west-2.amazonaws.com")
    .getOrCreate()
```