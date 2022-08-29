const express=require("express");
const http=require("http");
const path=require("path");
const app=express();
const {routesInit}=require("./routes/config_route");
require ('dotenv').config({override:true});
require ("./db/mongo_connect");


///////////////
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
/////////////

app.use(express.json());

app.use(express.static(path.join(__dirname,"client/build")));

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)

routesInit(app);



const server=http.createServer(app);
let port=process.env.port||"3001";
console.log(port)
server.listen(port);