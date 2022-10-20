const usersR=require("./users");
const ordersR=require("./orders");
const productsR=require("./products");
const clientR=require("./clientRoute");

exports.routesInit=(app)=>{

    app.use("/api/users",usersR);

    app.use("/api/orders",ordersR);

    app.use("/api/products",productsR);

    app.use("*",clientR);
    };
