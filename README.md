# Node.js Introduction
### Basic Node Methods
***
#### Async & Sync File Methods
***
````javascript
    //Call HTTP method
    let http = require("http");
    //Call FILE SYSTEM method: fs = File System
    let fs = require("fs");

    // Create a server
    let server = http.createServer(function (req, res) {

        //It defines index.html file by default
        if (req.url == "/") {

            //Async - readFile() : To read a file content
            fs.readFile('index.html', function (error, data) {
                res.writeHead(200, {
                    'Content-type': 'text/html'
                });
                res.write(data);
                res.end();
            });

            //Sync - readFileSync() : To read a file content by sync
            let data = fs.readFileSync('index.html');

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();

            //Async - writeFile()  : To write a file
            fs.writeFile("demo.txt", "Hello World", function (error) {
                if (error) {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.write("File write failed!");
                    res.end();
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.write("File write done!");
                    res.end();
                }
            });

            //Sync - writeFileSync()  : To write a file by sync
            let error = fs.writeFileSync("demoSync.txt", "Welcome to file Sync");

            if (error) {

                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write("File write failed!");
                res.end();
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write("File write Done");
                res.end();
            }

            //Async - rename() : To rename a file 
            fs.rename("demoNew.txt", "demoNew2.txt", function (error) {
                if (error) {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    res.write("File rename failed!");
                    res.end();
                } else {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    res.write("File rename done!");
                    res.end();
                }
            });

            //Sync - renameSync() : To rename a file by sync
            let error = fs.renameSync("demoSync.txt", "demoSyncNew.txt");
            if (error) {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write("File rename failed!");
                res.end();
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write("File rename done!");
                res.end();
            }

            //Async - unlink() : It deletes file
            fs.unlink("demoNew2.txt", function (error) {
                if (error) {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    res.write("File delete failed!");
                    res.end();
                } else {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    res.write("File delete done!");
                    res.end();
                }
            });

            //Sync - unlinkSync() : It deletes file by sync
            let error = fs.unlinkSync("index.html");

            if (error) {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write("File delete failed!")
                res.end();
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write("File delete done!");
                res.end();
            }

            //Async - exists() : Find file exists or not
            fs.exists("index.html", function (result) {
                if (result) {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    res.write("File exists")
                    res.end();
                } else {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    res.write("File does not exist!")
                    res.end();
                }

            });

            //Sync - existsSync() : Find file exists or not by sync
            let result = fs.existsSync("demoSyncNew.txt");

            if (result) {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write("File exists")
                res.end();
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write("File does not exist!")
                res.end();
            }


        }

    });

    //Run server on port 8080(by default it's 8080)
    //You can use any port i.e. 3000, 3001, 5050, 5000 ...
    server.listen(8080);
    //It gives a message on Console Server works properly or not
    console.log("Server run Successfully!")

````
### Add an HTTP Header
***
If the response from the **HTTP** server is supposed to be displayed as **HTML**, ***you should include an HTTP header with the correct content type:***
***
###### ````res.writeHead(200, {'Content-Type': 'text/html'});````
The first argument of the **res.writeHead()** method is the status code, **200 means that all is OK**, the second argument is an object containing the response headers.
***
Example:
```
    var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('Hello World!');
      res.end();
    }).listen(8080);
```