## Shortcuts

Copy Note Reference : ctrl+shift+r

https://github.com/dendronhq/dendron/issues/1966#issuecomment-1000248470

## Link

[wiki.software.Comparison.dendron vs trilium vs org-mode](../Comparison/dendron%20vs%20trilium%20vs%20org-mode.md)

## Issues

* [Note refactoring support · Issue #39 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/39)
* [Extension Request: Dendron · Issue #2066 · cdr/code-server · GitHub](https://github.com/cdr/code-server/issues/2066)
* [Can't Install from .vsix · Issue #508 · cdr/code-server · GitHub](https://github.com/cdr/code-server/issues/508)

## Convert Dendron to [Obsidian](Obsidian.md)

``` python
from pathlib import Path

import glob

import os

import shutil

  

# Want to use Obsidian, run this script

  

dendron_path = os.getcwd() + "/dentropydaemon-wiki/"

output_path = dendron_path # os.getcwd() + "/export/"

  

dendron_markdown_files = glob.glob(dendron_path + "*.md")

  

def fix_file(file_path, out_path):

file_name = file_path.split("/")[-1]

final_file_name = "/" + file_name.split(".")[-2:-1][0] + ".md"

new_path = "/".join(file_name.split(".")[0:-2])

Path(out_path + new_path).mkdir(parents=True, exist_ok=True)

Path(file_path).rename(out_path + new_path + final_file_name)

# shutil.copyfile(file_path, out_path + new_path + final_file_name)

  

Path(output_path).mkdir(parents=True, exist_ok=True)

for file_name in dendron_markdown_files:

fix_file(file_name, output_path)
```

## Sources

* [Copy Note Reference](https://wiki.dendron.so/notes/3tp2xkqy4o1gza8as8d0h2d/)