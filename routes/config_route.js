const indexR=require("./index");
const usersR=require("./users");
const shopR=require("./shop");
const productsR=require("./products");
const clientR=require("./clientRoute");

exports.routesInit=(app)=>{
    app.use("/api/",indexR);

    app.use("/api/users",usersR);

    app.use("/api/shop",shopR);

    app.use("/api/products",productsR);

    app.use("*",clientR);
    };
