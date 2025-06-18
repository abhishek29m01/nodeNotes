const express = require("express");
const port = 4000;
const app = express();

const path = require("path");

console.log("View directory:", path.join(__dirname, "views"));
//set the view engine to EJS

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //explictitly set view directory

// Define a route
app.get("/", (req, res) => {
  let data = {
    name: "Yamini verma",
    age: 23,
    sub: ["ML", "IOT", "CNS", "CC", "SEPM", "IPCV"],
  };
  res.render("home", { data: data });
});


console.log(result)
const server = app.listen(port, function () {
  console.log("listening to port 4000");
});
