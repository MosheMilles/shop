const express=require("express");
const http=require("http");
const path=require("path");
const app=express();
const {routesInit}=require("./routes/config_route");
require ('dotenv').config({override:true});
require ("./db/mongo_connect");

app.use(express.json());
app.use(express.static(path.join(__dirname,"client/build")));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)

routesInit(app);



const server=http.createServer(app);
let port=process.env.port||"3001";
console.log(port)
server.listen(port);