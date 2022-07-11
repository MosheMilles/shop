const indexR=require("./index");
const usersR=require("./users");
const shopR=require("./shop");
const productsR=require("./products");
console.log(indexR);
console.log(usersR);

exports.routesInit=(app)=>{
    app.use("/",indexR);

    app.use("/users",usersR);

    app.use("/shop",shopR);

    app.use("/products",productsR);
    };
