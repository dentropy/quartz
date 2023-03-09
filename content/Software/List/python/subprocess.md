---
id: R4uDIY9nqGxicGF8fxV5a
title: subprocess
desc: ''
updated: 1636906356715
created: 1636906318022
---

[python - Store output of subprocess.Popen call in a string - Stack Overflow](https://stackoverflow.com/questions/2502833/store-output-of-subprocess-popen-call-in-a-string)


``` python
command = "ntpq -p"
process = subprocess.Popen(command, stdout=PIPE, stderr=PIPE, shell=True)
output, error = process.communicate()
```


## TO REview

[python - How to suppress or capture the output of subprocess.run()? - Stack Overflow](https://stackoverflow.com/questions/41171791/how-to-suppress-or-capture-the-output-of-subprocess-run)