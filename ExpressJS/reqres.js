const express = require("express");
const port = 2000;
const app = express();

// chaining of apis

app
  .get("/get", (req, res) => {
    res.send("This is get request");
  })
  .post("/post", (req, res) => {
    res.send("This is post request.");
  })
  .put("/put", (req, res) => {
    res.send("This is a put request");
  })
  .delete("/delete", (req, res) => {
    res.send("delete request");
  });

app.listen(port);
