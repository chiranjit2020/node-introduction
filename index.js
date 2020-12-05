let http = require("http");
let fs = require("fs");


let server = http.createServer(function (req, res) {


    if (req.url == "/") {

        //Async - readFile()
        //        fs.readFile('index.html', function (error, data) {
        //            res.writeHead(200, {
        //                'Content-type': 'text/html'
        //            });
        //            res.write(data);
        //            res.end();
        //        });

        //Sync - readFileSync()
        //        let data = fs.readFileSync('index.html');
        //
        //        res.writeHead(200, {
        //            'Content-Type': 'text/html'
        //        });
        //        res.write(data);
        //        res.end();

        //Async - writeFile()
        //        fs.writeFile("demo.txt", "Hello World", function (error) {
        //            if (error) {
        //                res.writeHead(200, {
        //                    'Content-Type': 'text/html'
        //                });
        //                res.write("File write failed!");
        //                res.end();
        //            } else {
        //                res.writeHead(200, {
        //                    'Content-Type': 'text/html'
        //                });
        //                res.write("File write done!");
        //                res.end();
        //            }
        //        });

        //Sync - writeFileSync()

        //        let error = fs.writeFileSync("demoSync.txt", "Welcome to file Sync");
        //
        //        if (error) {
        //
        //            res.writeHead(200, {
        //                "Content-Type": "text/html"
        //            });
        //            res.write("File write failed!");
        //            res.end();
        //        } else {
        //            res.writeHead(200, {
        //                "Content-Type": "text/html"
        //            });
        //            res.write("File write Done");
        //            res.end();
        //        }

        //Async - rename()
        //        fs.rename("demoNew.txt", "demoNew2.txt", function (error) {
        //            if (error) {
        //                res.writeHead(200, {
        //                    "Content-Type": "text/html"
        //                });
        //                res.write("File rename failed!");
        //                res.end();
        //            } else {
        //                res.writeHead(200, {
        //                    "Content-Type": "text/html"
        //                });
        //                res.write("File rename done!");
        //                res.end();
        //            }
        //        });

        //Sync - renameSync()
        //        let error = fs.renameSync("demoSync.txt", "demoSyncNew.txt");
        //        if (error) {
        //            res.writeHead(200, {
        //                "Content-Type": "text/html"
        //            });
        //            res.write("File rename failed!");
        //            res.end();
        //        } else {
        //            res.writeHead(200, {
        //                "Content-Type": "text/html"
        //            });
        //            res.write("File rename done!");
        //            res.end();
        //        }

        //Async - unlink()
        //        fs.unlink("demoNew2.txt", function (error) {
        //            if (error) {
        //                res.writeHead(200, {
        //                    "Content-Type": "text/html"
        //                });
        //                res.write("File delete failed!");
        //                res.end();
        //            } else {
        //                res.writeHead(200, {
        //                    "Content-Type": "text/html"
        //                });
        //                res.write("File delete done!");
        //                res.end();
        //            }
        //        });
        //Sync - unlinkSync()
        //        let error = fs.unlinkSync("index.html");
        //
        //        if (error) {
        //            res.writeHead(200, {
        //                "Content-Type": "text/html"
        //            });
        //            res.write("File delete failed!")
        //            res.end();
        //        } else {
        //            res.writeHead(200, {
        //                "Content-Type": "text/html"
        //            });
        //            res.write("File delete done!");
        //            res.end();
        //        }

        //Async - exists()
        //        fs.exists("index.html", function (result) {
        //            if (result) {
        //                res.writeHead(200, {
        //                    "Content-Type": "text/html"
        //                });
        //                res.write("File exists")
        //                res.end();
        //            } else {
        //                res.writeHead(200, {
        //                    "Content-Type": "text/html"
        //                });
        //                res.write("File does not exist!")
        //                res.end();
        //            }
        //
        //        });
        //Sync - existsSync()
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









server.listen(8080);
console.log("Server run Successfully!")
