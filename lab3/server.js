import http from "http";
import fs from "fs";

const port = 3000;
const server = http.createServer(function (request, response) {
  let filePath = request.url.substring(1);
  if (filePath == "") filePath = "index.html";

  fs.readFile(filePath, function (error, data) {
    if (error) {
      response.statusCode = 404;
      response.end("Resource not found!");
    } else {
      if (filePath.endsWith(".js")) {
        response.setHeader("Content-Type", "text/javascript");
      }
      if (filePath.endsWith(".html")) {
        response.setHeader("Content-Type", "text/html");
      }
      response.end(data);
    }
  });
});

server.listen(port, function () {
  console.log(`Server started on the port ${port}`);
});
