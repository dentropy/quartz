---
id: NqHVDzRqeif61RGG7qdOy
title: curl
desc: ''
updated: 1666812459555
created: 1630939889006
---

## Examples

**GET**

``` bash
curl https://www.keycdn.com
```

* [How to Make curl Ignore Certificate Errors {Easy Fix} | phoenixNAP](https://phoenixnap.com/kb/curl-ignore-certificate)
  * `-k`
* [Follow Redirects with Command Line cURL - Digital Design Journal](https://www.digitaldesignjournal.com/curl-follow-redirects/)
  * `-L`

## Curl with JSON

``` bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyz","password":"xyz"}' \
  http://localhost:3000/api/login
```
* [rest - How do I POST JSON data with cURL? - Stack Overflow](https://stackoverflow.com/questions/7172784/how-do-i-post-json-data-with-curl)

## Sources

* [Popular curl Examples - KeyCDN Support](https://www.keycdn.com/support/popular-curl-examples)