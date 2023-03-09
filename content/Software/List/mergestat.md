---
id: ufl8mewl84ggop5zk64kutp
title: Mergestat
desc: ''
updated: 1649094689347
created: 1649094689347
---

* [Releases · mergestat/mergestat · GitHub](https://github.com/mergestat/mergestat/releases)
  * [Example](https://gist.github.com/varemenos/e95c2e098e657c7688fd?permalink_comment_id=3364009#gistcomment-3364009)
  ``` bash
  mergestat  "SELECT * FROM commits" --format ndjson
  ```
  * [Schema](https://docs.mergestat.com/reference/git-tables)
## Get all emails

``` sql
/* Get list of emails and authors*/
SELECT DISTINCT author_email, author_name FROM commits

/* Get list of emails and authors, with the repo name*/
SELECT DISTINCT author_email, author_name, COUNT(*) FROM commits
```

``` bash
mergestat "SELECT UNIQUE(author_email) FROM commits" --format ndjson


REMOTE_URL="https://github.com/mergestat/mergestat.git"
REMOTE_URL="https://github.com/ethereum/EIPs.git"
mergestat "SELECT COUNT(*), author_name, author_email, '${REMOTE_URL}' as remote_url from commits('${REMOTE_URL}') GROUP BY author_email" --format ndjson



```