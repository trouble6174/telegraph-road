import http = require("http");
const demoView = (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  switch (req.url) {
    case "/api/users/":
      return res.end(
        JSON.stringify([
          { name: "user1", id: 1 },
          { name: "user2", id: 2 },
        ])
      );
    case "/api/user/1/":
      return res.end(JSON.stringify({ name: "user1", id: 1 }));
    case "/settings":
      res.setHeader("Content-Type", "text/html");
      switch (req.method?.toLowerCase()) {
        case "post":
          res.write("<h1>Form was submitted</h1>");
          return res.end();
        case "get":
          res.write(
            "<h1>settings</h1><form action='settings' method='POST'><input type='text'><button action='submit'>submit</button></input></form>"
          );
          return res.end();
        default:
          res.statusCode = 450;
          res.write("<p>method not allowed</p>");
          return res.end();
      }
    default:
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 404;
      res.write("<p>not found</p>");
      return res.end();
  }
};
module.exports = demoView;
