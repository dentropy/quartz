---
id: Z1vQVhwuJVF7SMN73q8BC
title: Virtual Environments
desc: ''
updated: 1628449250436
created: 1628449250436
---
# Virtual Environments
[python - How to create a requirements.txt? - Stack Overflow](https://stackoverflow.com/questions/29938554/how-to-create-a-requirements-txt)

    
``` bash
pip install virtualenv
mkdir python-virtual-environments && cd python-virtual-environments

# In Project Folder
python3 -m venv env
source env/bin/activate
```
[python - How to create a requirements.txt? - Stack Overflow](https://stackoverflow.com/questions/29938554/how-to-create-a-requirements-txt)

[Virtual Environments — The Hitchhiker's Guide to Python](https://python-guide-kr.readthedocs.io/ko/latest/dev/virtualenvs.html)


## Setting up a Python workspace virtualenv virtual environment


* [The definitive guide to setup my Python workspace | by Henrique Bastos | Medium](https://medium.com/@henriquebastos/the-definitive-guide-to-setup-my-python-workspace-628d68552e14)
* [wiki.software.List.pyenv](../pyenv.md)


## Python Virtual Environment Setup

[Python Virtual Environments: A Primer -- Real Python](https://realpython.com/python-virtual-environments-a-primer/)

**Install pyenv**

[wiki.software.List.pyenv](../pyenv.md)

**Install virtualenv via pip**

``` bash
# Install virtualenv
sudo pip install virtualenv

# Create virtual environment
python3 -m venv env

# Activate virtual environment
source ./env/bin/activate
```

* [https://www.pythonforbeginners.com/basics/how-to-use-python-virtualenv](https://www.pythonforbeginners.com/basics/how-to-use-python-virtualenv)
* [Use different Python version with virtualenv - Stack Overflow](https://stackoverflow.com/questions/1534210/use-different-python-version-with-virtualenv)

## Generate requirements.txt from virtual environment

``` bash
pip3 freeze > requirements.txt
```

[python - Automatically create requirements.txt - Stack Overflow](https://stackoverflow.com/questions/31684375/automatically-create-requirements-txt)
