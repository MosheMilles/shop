const indexR=require("./index");
const usersR=require("./users");
const shopR=require("./shop");
const productsR=require("./products");
const clientR=require("./client");
console.log(indexR);
console.log(usersR);

exports.routesInit=(app)=>{
    app.use("/api/",indexR);

    app.use("/api/users",usersR);

    app.use("/api/shop",shopR);

    app.use("/api/products",productsR);

    app.use("*",clientR);
    };
