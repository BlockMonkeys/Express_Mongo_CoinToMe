import express from "express";
import routes from "../routes";
import { getHOME } from "../controller/homeController";
import { getSearch } from "../controller/searchController";
import { getLogin, getSignUp, logout, postLogin, postSignUp } from "../controller/auth";
import { authUser, publicUser } from "../middleware";

const globalRouter = express.Router();

globalRouter.get(routes.HOME, getHOME);
globalRouter.get(routes.SEARCH, authUser, getSearch);


//로그인&아웃
globalRouter.get(routes.LOGIN, publicUser, getLogin);
globalRouter.post(routes.LOGIN, publicUser, postLogin);
globalRouter.get('/logout', authUser, logout);

//회원가입
globalRouter.get('/signup', publicUser, getSignUp);
globalRouter.post('/signup', publicUser, postSignUp);


export default globalRouter;