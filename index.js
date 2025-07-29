const fs = require('fs');
const http = require('http');
const path = require('path');
const port = 8000;


function requestHandler(req, res){
    console.log(req.url);
    let filePath = path.join(
        "C:/Users/devanshu/Downloads/Mini Projects/Resume",
        req.url === "/" ? "index.html" : req.url
    );
    console.log(path.extname(filePath));
        switch (path.extname(filePath)) {
            case ".css" :
            {
                fs.readFile('./style.css', (err, data)=>{
                   res.writeHeader(200, {'Content-Type': 'text/css'});
                   res.write(data);
                   return res.end();
                });  
            }
            break;
            case ".js":
            {
                fs.readFile('./script.js', (err, data)=>{
                    if(err)
                        console.log("error" + err);
                   res.writeHeader(200, {'Content-Type': 'text/javascript'});
                   res.write(data);
                   return res.end();
                });  
            }
            break;
            case ".png":
                {
                    fs.readFile("." + req.url, (err, data)=>{
                        if(err)
                            console.log("error");
                       res.writeHeader(200, {'Content-Type': 'image/png'});
                       res.write(data);
                       return res.end();
                    });  
                }
                break;
            case ".jpg":
                {
                    fs.readFile("." + req.url, (err, data)=>{
                        if(err)
                            console.log("error");
                        res.writeHeader(200, {'Content-Type': 'image/jpg'});
                        res.write(data);
                        return res.end();
                    });  
                }
                break;
            case ".jpeg":
            {
                fs.readFile("." + req.url, (err, data)=>{
                    if(err)
                        console.log("error");
                    res.writeHeader(200, {'Content-Type': 'image/jpeg'});
                    res.write(data);
                    return res.end();
                });  
            }
            break;
            case ".html":
                {
                    if(res.err)
                    log("error occured");
                    res.writeHead(200, {"content-type":"text/html"})
                    fs.readFile("./index.html", (err, data) => {
                    return res.end(data);
                })
                }
                break;

        }
        
        
        
        
}
const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err)
        console.log("Server Error");
    console.log("My First Server");
})