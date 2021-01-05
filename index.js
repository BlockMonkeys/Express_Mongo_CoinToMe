import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./router/globalRouter";
const app = express();
const PORT = 5000;


app.set("view engine", "pug");
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use('/', globalRouter);


app.listen(PORT, ()=> console.log(`✅ Server is Runnig at port : ${PORT}`));