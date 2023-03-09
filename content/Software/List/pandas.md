---
id: YA2CwIJOjc2BBPKHthXY5
title: pandas
desc: ''
updated: 1666320500443
created: 1643035979743
---


## Memorize

* [pandas.concat() function in Python - GeeksforGeeks](https://www.geeksforgeeks.org/pandas-concat-function-in-python/)
* [python - Count unique values per groups with Pandas - Stack Overflow](https://stackoverflow.com/questions/38309729/count-unique-values-per-groups-with-pandas)
* [8 Python Pandas Value\_counts() tricks that make your work more efficient](https://re-thought.com/pandas-value_counts/)
  * [python - Get keys of pandas.Series.value\_counts - Stack Overflow](https://stackoverflow.com/questions/44353516/get-keys-of-pandas-series-value-counts)

## TODO

* [Python Pandas: selecting 1st element in array in all cells - Stack Overflow](https://stackoverflow.com/questions/41708059/python-pandas-selecting-1st-element-in-array-in-all-cells)

## Create a basic data frame

``` python
>>> d = {'col1': [1, 2], 'col2': [3, 4]}
>>> df = pd.DataFrame(data=d)
>>> df
   col1  col2
0     1     3
1     2     4

display(df)
```

## Aggregate strings

[How to Count Duplicates in Pandas DataFrame - Data to Fish](https://datatofish.com/count-duplicates-pandas/)

## Create a dataframe

``` python
import pandas as pd
d = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data=d)
df
```

[pandas.DataFrame — pandas 1.4.0 documentation](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.html)

## Select n=3 off front

``` python3
final_df.head(3)
```

## Select n=3 off back

``` python3
final_df.tail(3)
```

## Import CSV

df = pd.read_csv('./my.csv')

## Select Columns

* [4 Ways to Use Pandas to Select Columns in a Dataframe • datagy](https://datagy.io/pandas-select-columns/)

## Errors

* [How to Fix: if using all scalar values, you must pass an index - Statology](https://www.statology.org/valueerror-if-using-all-scalar-values-you-must-pass-an-index/)


## Read [wiki.software.list.json.ndjson](json/ndjson.md)

[json - How to open .ndjson file in Python? - Stack Overflow](https://stackoverflow.com/questions/63501251/how-to-open-ndjson-file-in-python)

## Query Data

* [Pandas: Select rows that match a string - David Hamann](https://davidhamann.de/2017/06/26/pandas-select-elements-by-string/)
* [Pandas: How to Select Rows Based on Column Values - Statology](https://www.statology.org/pandas-select-rows-based-on-column-values/)

## Sort

* [RDBMS Design | Apache Cassandra Documentation](https://cassandra.apache.org/doc/trunk/cassandra/data_modeling/data_modeling_rdbms.html#sorting-is-a-design-decision)



## Can only append a Series if ignore_index=True or if the Series has a name

* [python - Is it possible to append Series to rows of DataFrame without making a list first? - Stack Overflow](https://stackoverflow.com/questions/33094056/is-it-possible-to-append-series-to-rows-of-dataframe-without-making-a-list-first)

## Links

* [Software.List.Python](MyDendronExistence/Knowledge/Programing%20Language/python)