---
id: 0terwhvxp4ezipq4f934tmq
title: awk
desc: ''
updated: 1663572444612
created: 1663568993196
---

## Getting started

* Awesome text tutorial
  * [AWK Command Examples for Beginners / AWK Linux Tutorial](https://bytexd.com/awk-command-examples-tutorial/)
* Awesome video tutorial
  * [Learning Awk Is Essential For Linux Users - YouTube](https://www.youtube.com/watch?v=9YOZmI-zWok)
* Remember `man awk` if you want to be hardcore
 
## Questions

How do I search a single file,

How do I search a directory,

How do I search a directory recursively,

## Getting Started

``` bash
ps

# First column
ps | awk '{print $1}'

# Second column
ps | awk '{print $2}'

# basically cat a file
ps | awk '{print $0}'
ps | awk '{print}'

# This file has the users on a linux system
cat /etc/passwd

# List all users, notice ":" is the separator
awk -F ":" '{print $1}' /etc/passwd

# List different columns
awk -F ":" '{print $1 $6 $7}' /etc/passwd

# Format that shit
awk -F ":" '{print $1" "$6" "$7}' /etc/passwd
awk -F ":" '{print $1"\t"$6"\t"$7}' /etc/passwd

# Swap out the separator
awk 'BEGIN{FS=":"; OFS="-"} {print $1 $6 $7}' /etc/passwd

cat /etc/shells

# Search for lines that begin with a slash
awk -F "/" '/^\// {print $NF}' /etc/shells
awk -F "/" '/^\// {print $NF}' /etc/shells | uniq
awk -F "/" '/^\// {print $NF}' /etc/shells | uniq | sort

df

# Search a file for specific string
df | awk '/\/dev\/nvme/ {print $1"\t"$2"\t"$3}' # May return nothing

# Do some math on the variables
df | awk '/\/dev\/nvme/ {print $1"\t"$2 + $3}'
df | awk '/\/dev\/nvme/ {print $1"\t"$2 - $3}'

# Get variables larger than a length
awk 'length($0) > 7' /etc/shells
awk 'length($0)' /etc/shells

# awk is also a programming language
ps -ef | awk '{ if($NF == "/bin/zsh") print $0 }'
awk 'BEGIN { for(i = 0; i <= 10; i++) print "The square root of", i*i, "is", i}'

# Find lines where first column starts with b,c or e
awk '$1 ~ /^[b,c,e]/ {print $0}' ~/.zshrc

# Get position of character on the line

# Print a specific number of numbers
df | awk 'NR==7, NR==11 {print NR, $0}'
df | awk 'NR==7, NR==11 {print $0}'

# Get a line count, FOR MULTIPLE FILES
awk 'END {print NR}' /etc/shells
awk 'END {print NR}' /etc/shells /etc/passwd
```

## #Links

* [A practical guide to learning awk | Opensource.com](https://opensource.com/article/20/9/awk-ebook)
  * Too much back story
* [Awk in 20 Minutes](https://ferd.ca/awk-in-20-minutes.html)
  * Too specific
* [Learn X in Y Minutes: Scenic Programming Language Tours](https://learnxinyminutes.com/docs/awk/)
  * Too weird adn specialized, not ELI5

