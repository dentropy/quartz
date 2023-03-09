---
id: EJMNGFUWbbMJv5VBJnan2
title: find
desc: ''
updated: 1663573037297
created: 1628444413870
---

find - search for files in a directory hierarchy

## Questions

How do I find a specific string a specific file?

NOPE

How do I specify a specific file type?

Yes

## Examples

``` bash
# List all files in current directory, RECURSIVELY
find .

# List all files, matching name, in current directory, RECURSIVELY
find .  -name "*.md"

# Search by permissions

# Search by directory name

# Search by modification time

# Search by user

# Search by permissions
```

## Instructions

* One can search for files based on the permissions 
* Remember the id command is a thing and users have a unique ID number
* One can delete all files from a specific use
  * `find / -user jefff -type file -exec cat {} \;`
  * `find / -user jefff -type file -exec cp {} /home/mary \;`
* The Find Command
  * `find {directory}} {-name -directory -user -mtime}} search-term`

## #Links

* [A find Tutorial and Primer - Daniel Miessler](https://danielmiessler.com/study/find/)