``` python
# read
import json
json.load(open('data.json'))
json.load(STRING)

# write
import json
with open('data.json', 'w') as f:
    json.dump(data, open('data.json', 'w'))

# single line
import json
json.dump(data, open('data.json', 'w'))
```
[Read JSON file using Python - GeeksforGeeks](https://www.geeksforgeeks.org/read-json-file-using-python/)
[python - How do I write JSON data to a file? - Stack Overflow](https://stackoverflow.com/questions/12309269/how-do-i-write-json-data-to-a-file)
