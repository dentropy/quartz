---
id: af6hnVBdxnRgLF4C5uobF
title: Chaos
desc: ''
updated: 1630780208178
created: 1628449250435
---
# Chaos
Deploy mssql
------------

    from string import Template 
    import subprocess
    import os
    default_docker_cmd = "docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=PaulIsAwesome!123' -p $InPort:1433 -d mcr.microsoft.com/mssql/server:2017-CU8-ubuntu"
    
    
    for i in range(3):
        command_string = default_docker_cmd.replace("$InPort", str(4000 + i))
        os.system(command_string)
    

Regex match special character
-----------------------------

*   [regex - What's the regular expression that matches a square bracket? - Stack ...](https://stackoverflow.com/questions/928072/whats-the-regular-expression-that-matches-a-square-bracket)
*   [Prepend a line to an existing file in Python - Stack Overflow](https://stackoverflow.com/questions/4454298/prepend-a-line-to-an-existing-file-in-python)
*   `python3 setup.py install --user`

[PEP 257 -- Docstring Conventions | Python.org](https://www.python.org/dev/peps/pep-0257/)

