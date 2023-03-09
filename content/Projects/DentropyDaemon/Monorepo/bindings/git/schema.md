---
id: H5TKlUst9hBsZV02Mwizy
title: Git Schema
desc: ''
updated: 1640706194658
created: 1639493724876
---

```
codium ./assets/diagrams/Schema.Git.Elasticsearch.drawio
```


``` json
PUT git-commits-*/_mapping
{
  "properties": {
    "message": { 
      "type":     "text",
      "fielddata": true
    },
    "repoName": { 
      "type":     "text",
      "fielddata": true
    },
    "authorName": { 
      "type":     "text",
      "fielddata": true
    },
    "authorEmail": { 
      "type":     "text",
      "fielddata": true
    },
    "authorEmailDomain": { 
      "type":     "text",
      "fielddata": true
    }
  }
}
```

**git-repos**

``` JSON
{
    "sourceURL" : INDEXED STRING,
        // github ,gitlab, etc....
    "ownerName" : INDEXED STRING,
    "repoName" : INDEXED STRING,
    "numCommits" : INT,
    "numCommitters" : INT,
    "firstCommit" : DATE TIME,
    "latestCommit" : DATE TIME
}
```

**git-committers**

``` json
{
    "name" : INDEXED STRING,
    "email" : INDEXED STRING,
    "emailDomain" : INDEXED STRING,
    "numTotalCommits" : INT,
    "numReposCommittedTo" : INT,
    "totalNumLinesAdded" : INT,
    "totalNumLinesRemoved" : INT
}
```

**git-commits**

``` json
{
    "id": STRING,
    "commit": STRING,
    "author" : STRING,
    "date" : DATE TIME,
    "message": INDEXED STRING,
    "repoName" : INDEXED STRING,
    "authorName": INDEXED STRING,
    "authorNameCount": INT,
    "authorEmail": INDEXED STRING,
    "authorEmailDomain": INDEXED STRING,
    "messageWordCount": INT,
    "messageCharacterCount": INT,
    "messageCharacterVersesWord": FLOAT,
    "urlCountInMessage" : INT,
    "pathCount" : INT,
    "totalInsertions" : INT,
    "totalDeletions" : INT, 
    "paths":[
         {
             "insertions": INT,
             "deletions": INT,
             "path": STRING
        }
        ......
    ]
}
```
