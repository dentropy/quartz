[Language - Programming](../Catagories/Language/Language%20-%20Programming.md)

[How to print an exception in Python? - Stack Overflow](https://stackoverflow.com/questions/1483429/how-to-print-an-exception-in-python)

## Install

* [wiki.software.List.pipenv](pipenv.md)
* [wiki.software.List.pyenv](pyenv.md)
* [wiki.software.Programming Language.python.Virtual Environments](python/Virtual%20Environments.md)

## Links to Solutions

*   [Python: Read a CSV file line by line with or without header](https://thispointer.com/python-read-a-csv-file-line-by-line-with-or-without-header/)

## Is key in dictionary

``` python
# Dictionary Initialisation
My_Dict = {'Joy':78, 'John':96, 'Kyler':65, 'Sona':85}

My_key = input("Enter the key to be searched: ")

if My_key in My_Dict:
    print("Found!")
else:
    print("Not Found!")
```
    

[https://www.journaldev.com/40231/check-if-a-key-exists-in-python-dictionary](https://www.journaldev.com/40231/check-if-a-key-exists-in-python-dictionary)

## Optional Arguments

[https://stackoverflow.com/questions/9539921/how-do-i-create-a-python-function-with-optional-arguments](https://stackoverflow.com/questions/9539921/how-do-i-create-a-python-function-with-optional-arguments)

### Setting optional arguments

[https://codereview.stackexchange.com/questions/148153/optional-arguments-in-a-function](https://codereview.stackexchange.com/questions/148153/optional-arguments-in-a-function)

## How to sort a column in a multi dimentional list

[https://stackoverflow.com/questions/20183069/how-to-sort-multidimensional-array-by-column](https://stackoverflow.com/questions/20183069/how-to-sort-multidimensional-array-by-column)

## Try and Except

``` python
try:
    some_method()
except Exception as e:
    s = str(e)
```

Get the Exception Value

* [Getting the exception value in Python - Stack Overflow](https://stackoverflow.com/questions/4308182/getting-the-exception-value-in-python)

## Regex a list


*   [https://stackoverflow.com/questions/3640359/regular-expressions-search-in-list](https://stackoverflow.com/questions/3640359/regular-expressions-search-in-list)

## subprocess

``` python
import subprocess

##vp

# JSON output
command = ["keybase", "chat", "api", "-m", dentropydaemon_channels_json]
response = subprocess.check_output(command)
return json.loads(response.decode('utf-8'))
    

[https://stackoverflow.com/questions/2525263/capture-subprocess-output#2525493](https://stackoverflow.com/questions/2525263/capture-subprocess-output#2525493)

[Search Code Snippets | python capture output of os.system](https://www.codegrepper.com/search.php?answer_removed=1&q=python%20capture%20output%20of%20os.system)

URL from string
---------------

    from urlextract import URLExtract
    extractor = URLExtract()
    urls = extractor.find_urls("Github https://github.com is fucking evil")
    print(urls)
    

TODO
----

[https://www.digitalocean.com/community/tutorials/how-to-import-modules-in-python-3](https://www.digitalocean.com/community/tutorials/how-to-import-modules-in-python-3)

[https://stackoverflow.com/questions/20001229/how-to-get-posted-json-in-flask](https://stackoverflow.com/questions/20001229/how-to-get-posted-json-in-flask)

[https://stackoverflow.com/questions/34439/finding-what-methods-a-python-object-has](https://stackoverflow.com/questions/34439/finding-what-methods-a-python-object-has)

[https://stackoverflow.com/questions/9535954/printing-lists-as-tabular-data](https://stackoverflow.com/questions/9535954/printing-lists-as-tabular-data)

[python - How can I safely create a nested directory? - Stack Overflow](https://stackoverflow.com/questions/273192/how-can-i-safely-create-a-nested-directory)

[python - Most lightweight way to create a random string and a random hexadecimal number - Stack Overflow](https://stackoverflow.com/questions/2782229/most-lightweight-way-to-create-a-random-string-and-a-random-hexadecimal-number)

*   Strings
    *   [What does %s mean in a python format string? - Stack Overflow](https://stackoverflow.com/questions/997797/what-does-s-mean-in-a-python-format-string)
        *   [PyFormat: Using % and .format() for great good!](https://pyformat.info/)

## How to import from other folder

[Relative Imports in Python - Without Tearing Your Hair Out | Aiming to Misbehave](https://gideonbrimleaf.github.io/2021/01/26/relative-imports-python.html)
