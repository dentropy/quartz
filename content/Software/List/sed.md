---
id: fz4eZ6zUocnggh1Uw9FZC
title: sed
desc: ''
updated: 1634563896017
created: 1628444413879
---

## Examples

``` bash
# For single file
sed 's/unix/linux/g' geekfile.txt

# For file type in directory (not saving)
for file in *md
do
  sed 's/html/md/' $file
done

# For file type in directory (saving)
for file in *md
do
  sed 's/html/md/' -i $file
done
```

## Sources

* [Sed Command in Linux/Unix with examples - GeeksforGeeks](https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/)* [linux - Environment variable substitution in sed - Stack Overflow](https://stackoverflow.com/questions/584894/environment-variable-substitution-in-sed)
