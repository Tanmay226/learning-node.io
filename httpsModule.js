const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
  res.end(
    "<h1> This is node js tutorial by code with Ayan dey</h1> <p> Tis tutorial is very helpfull </p> <pre> Thank You Harry Bhai<pre>"
  );
});

server.listen(port, ()=>{
 
console.log(`server is running port ${port}`)

})