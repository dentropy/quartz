## TODO

* [command line - How to mass prepend text to file names? - Super User](https://superuser.com/questions/486465/how-to-mass-prepend-text-to-file-names)
* [How to split one string into multiple strings separated by at least one space in bash shell? - Stack Overflow](https://stackoverflow.com/questions/1469849/how-to-split-one-string-into-multiple-strings-separated-by-at-least-one-space-in)
* [bash - Set environment variables from file of key/value pairs - Stack Overflow](https://stackoverflow.com/questions/19331497/set-environment-variables-from-file-of-key-value-pairs)
* [Bash Loop Through a List of Strings](https://linuxhint.com/bash_loop_list_strings/)
* [bash - How to replace ${} placeholders in a text file? - Stack Overflow](https://stackoverflow.com/questions/415677/how-to-replace-placeholders-in-a-text-file)
* [unix - How to read a file into a variable in shell? - Stack Overflow](https://stackoverflow.com/questions/7427262/how-to-read-a-file-into-a-variable-in-shell)
* `netstat -tulpn`
* [How To Append Current Date To Filename in Bash Shell - nixCraft](https://www.cyberciti.biz/faq/unix-linux-appleosx-bsd-shell-appending-date-to-filename/)
* [How to List Users in Linux | Linuxize](https://linuxize.com/post/how-to-list-users-in-linux/)

## How to save command as variable

``` bash
x=`{pwd}`
echo $x
```
## Append Path

``` bash
export PATH="your-dir:$PATH"
```
## Load .env file

``` bash
if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi
```

* Source
  * [Load environment variables from dotenv / .env file in Bash](https://gist.github.com/mihow/9c7f559807069a03e302605691f85572)

``` bash
while getopts u:a:f: flag
do
    case "${flag}" in
        P) repo_path=${OPTARG};;
        a) age=${OPTARG};;
        f) fullname=${OPTARG};;
    esac
done
```

## Remove all non ASCII characters in all files in folder

``` sh
for file in *; do 
    if [ -f "$file" ]; then 
         mv $file $(echo `$file` | sed -e 's/[^A-Za-z0-9._-]/_/g')
    fi 
done
```