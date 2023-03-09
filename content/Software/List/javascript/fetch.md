---
id: LXnawHLWz1rZzhHnrPnnG
title: fetch
desc: ''
updated: 1633823981192
created: 1631974678779
---


## ON NODEJS YOU SHOULD USE AXIOS

[Using the Javascript Fetch API with GraphQL](https://fjolt.com/article/graphql-fetch-api-frontend-javascript)

``` bash
npm install node-fetch
```

``` javascript
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
```

``` javascript
let base64 = require('base-64');

let url = 'http://localhost:9200/idx';
let username = 'elastic';
let password = 'rgIcWCIg2IMNmnoRIJMudHEXVVFyPk5';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + base64.encode(username + ":" + password));
headers.append('Content-Type', 'text/json');
fetch(url, {method:'GET',
        headers: headers,
        //credentials: 'user:passwd'
       })
.then(response => response.json())
.then(json => console.log(json));
//.done();
```
