---
id: gsgn2o3zibgd93afo580zx0
title: Snippit
desc: ''
updated: 1649701671585
created: 1649437058844
---

## URL
[code.snippits](MyDendronExistence/Code/snippits)
``` python
text = ['My Profile: https://auth.geeksforgeeks.org/user/Chinmoy%20Lenka/articles in the portal of https://www.geeksforgeeks.org/',
        "Hello world https://www.udacity.com/", 
        "Hello World www.udacity.com", 
        "What about these URLs google.com NOPE",  
]

df = spark.createDataFrame(text, T.StringType()).toDF("text")

df = df.withColumn("url", F.regexp_extract(df.text, r"(?i)\b((?:https?://|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'\".,<>?«»“”‘’]))", 0))          
df = df.withColumn("domain", F.regexp_extract(df.url, r'^(?:http:\/\/|www\.|https:\/\/)([^\/]+)', 0))            
df["url", "domain"](%22url%22,%20%22domain%22).show(5, False)
```


``` python
files = glob.glob('./out/git_out/**/*.json',  recursive=True)
first_file = files.pop()
git_repo_df = spark.read.json(first_file)
git_repo_df.first()
for tmp_df_path in files:
    tmp_git_repo_df = spark.read.json(tmp_df_path)
    final_df = git_repo_df.unionByName(tmp_git_repo_df)
git_repo_df = parsers.df_parse_email(final_df,  "author_email")
```