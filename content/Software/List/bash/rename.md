---
id: vgomlTstFdXFtgt5D12Q9
title: Rename
desc: ''
updated: 1630771092591
created: 1630771085585
---

``` bash
#!/bin/bash

for file in home.dentropy.PaulMullinsDendron.vault.*
do
  mv "$file" "${file/home.dentropy.PaulMullinsDendron.vault./}"
done

# https://stackoverflow.com/questions/7450818/rename-all-files-in-directory-from-filename-h-to-filename-half

for file in Software.Software*
do
  mv "$file" "${file/Software.Software/Software}"
done
```
