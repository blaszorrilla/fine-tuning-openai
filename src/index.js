const express = require("express");
const apiRoute = require("./routes/routes");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use("/api",apiRoute);
app.listen(port,() =>{console.log("El puerto es:"+port)});