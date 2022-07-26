const express=require("express");
const http=require("http");
// const { override } = require("joi");
const path=require("path");
const app=express();
const {routesInit}=require("./routes/config_route");
require ('dotenv').config({override:true});
require ("./db/mongo_connect");

app.use(express.json());

app.use(express.static(path.join(__dirname,"client/build")));

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)

routesInit(app);



const server=http.createServer(app);
let port=process.env.port||"3001";
console.log(port)
server.listen(port);