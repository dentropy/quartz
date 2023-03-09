---
id: Z87UgyYr9co8UkfGREey3
title: files
desc: ''
updated: 1660239222126
created: 1628449250436
---

## Check if file, directory, or both exists

``` python
import os
raw_path  = "/etc"
file_path = "/etc/crontab"
something_exists = os.path.exists(path_to_file)
path_exists = os.path.isdir()
file_exists = os.path.isfile()
dir_list    = os.listdir(path)
```

* [Python - List Files in a Directory - GeeksforGeeks](https://www.geeksforgeeks.org/python-list-files-in-a-directory/)
* [How to Check If a File Exists in Python](https://www.pythontutorial.net/python-basics/python-check-if-file-exists/)
* [Python Check If File Exists | How to Check If a Directory Exists in Python](https://www.guru99.com/python-check-if-file-exists.html#2)

## Create a directory


## List files in directory

*   [https://stackoverflow.com/questions/3207219/how-do-i-list-all-files-of-a-directory](https://stackoverflow.com/questions/3207219/how-do-i-list-all-files-of-a-directory)

## glob

* [wiki.software.Programming Language.python.glob](dentropydaemon-wiki/Software/Programming%20Language/python/glob)

## Read first n lines in python

## Read file without new line character

``` python
with open('data.txt', 'r') as file:
    data = file.read().replace('\n', '')
```

*   [https://stackoverflow.com/questions/8369219/how-to-read-a-text-file-into-a-string-variable-and-strip-newlines](https://stackoverflow.com/questions/8369219/how-to-read-a-text-file-into-a-string-variable-and-strip-newlines)

## Write list to text file

``` python
MyList = ["New York", "London", "Paris", "New Delhi"]

MyFile=open('output.txt','w')
MyFile.writelines(MyList)
MyFile.close()
```

## Write file

``` python
f = open("demofile2.txt", "a")
f.write("Now the file has more content!")
f.close()
```
