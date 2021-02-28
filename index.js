import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import globalRouter from "./router/globalRouter";
import boardRouter from "./router/boardRouter";
import "./db";
import "./passport";
import { globalVar } from "./middleware";
dotenv.config();

const app = express();
const PORT = 5000;


app.set("view engine", "pug");
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(session({ 
    secret: process.env.COOKIE_SECRET, 
    resave: true, 
    saveUninitialized: false 
}));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(globalVar);
app.use('/', globalRouter);
app.use('/board', boardRouter);


app.listen(PORT, ()=> console.log(`✅ Server is Runnig at port : ${PORT}`));