const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const { routesInit } = require("./routes/config_route");
require('dotenv').config({ override: true });
require("./db/mongo_connect");


///////////////
app.use((req, res, next) => {
 
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
/////////////

app.use(express.json());

app.use(express.static(path.join(__dirname, "client/build")));

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)

routesInit(app);



const server = http.createServer(app);
let port = process.env.port || "3001";
console.log(port)
server.listen(port);