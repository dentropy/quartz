---
id: NnaqyvemlPlYI3OgTL27J
title: Express
desc: ''
updated: 1637861280858
created: 1637605069282
---

[wiki.concepts.list.Boilerplate](../../../../Wiki/Concepts/List/Boilerplate.md)

``` javascript
import express from 'express';
import dotenv from 'dotenv';
let dotenv_config = dotenv.config()

var app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
// app.use(express.static("static"));


// This responds with "Hello World" on the homepage
// app.get('/', function (req, res) {
//   console.log("Got a GET request for the homepage");
//   res.send('Hello GET');
// })

// app.get("/", (req, res) => {
//     res.sendFile(path.join("./static", "public", "index.html"));
//   });

app.post('/query', async function (req, res) {
    console.log(req.body)
    try {
        // Actually do or calculate something
        console.log(req.body)
        res.send(req.body)
    } catch (err){
      res.send(err)
    }
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })
 

```

## File Upload

[File Uploads with Express.js 4.0+ | by Ricky Romero | Medium](https://romerorickyio.medium.com/file-uploads-with-express-js-4-0-30ff3a60f23f)

* Research
  * [Uploading Images to Your Node.js Backend | by Andrew Richards | The Startup | Medium](https://medium.com/swlh/uploading-images-to-your-node-js-backend-978261eb0724)
    * Convert format in the frontend
  * [wiki.software.list.curl.File Upload](../../curl/File%20Upload.md)
    * Works
  * [How to upload files to the server using JavaScript](https://flaviocopes.com/file-upload-using-ajax/)
  * [Uploading files using Node.js and Multer - LogRocket Blog](https://blog.logrocket.com/uploading-files-using-multer-and-node-js/)
  * [How to upload files in Node.js and Express](https://attacomsian.com/blog/uploading-files-nodejs-express)
## Errors

* [node.js - ERR_HTTP_HEADERS_SENT: Cannot set headers after they are sent to the client - Stack Overflow](https://stackoverflow.com/questions/52122272/err-http-headers-sent-cannot-set-headers-after-they-are-sent-to-the-client)

