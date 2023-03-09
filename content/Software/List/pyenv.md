---
id: navvkntqlwx5zb6xtvacna4
title: pyenv
desc: ''
updated: 1663113649377
created: 1647529446171
---

## Install

**Run**

``` bash
curl https://pyenv.run | bash
```

**Add to ~/.bashrc**

``` bash
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

## Commands

``` bash
# List python versions available
pyenv install --list

# Install specific version
pyenv install -v 3.6.15
# pyenv install -v 2.7.18

# List versions installed
ls ~/.pyenv/versions/

# Switch forever to pyenv
pyenv global 3.6.15
# pyenv global -v 2.7.18

# Switch temporary python version
pyenv shell 3.8.12
# pyenv shell 2.7.18

# Switch directory python version
pyenv local 2.7.15
```

## Sources

* [Managing Multiple Python Versions With pyenv – Real Python](https://realpython.com/intro-to-pyenv/#installing-pyenv) ^10xmhp3mc4v7
* [Common build problems · pyenv/pyenv Wiki](https://github.com/pyenv/pyenv/wiki/Common-build-problems#error-the-python-ssl-extension-was-not-compiled-missing-the-openssl-lib)