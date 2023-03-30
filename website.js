
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-type", "text/html");
 
  
  if (req.url == "/") {
    res.end(
        "<h1> This is node js tutorial by code with Chayan Dey </h1> <p> This tutorial is very helpfull </p> <pre> Thank You Harry Bhai<pre>"
      );
  } else if (req.url == "/about") {

    res.end("<h1> This is node js About  </h1> <p> This is about section </p> <pre>about <pre>")

  }
  else if (req.url == "/contact") {

    res.end("<h1> This is node js contact  </h1> <p> This is contact section </p> <pre>contact<pre>")

  }
});


server.listen(port, () => {
  console.log(`server is running port ${port}`);
});


