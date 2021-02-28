import express from "express";
import { getBoardCreate, postBoardCreate } from "../controller/boardCreate";
import { getBoardDelete } from "../controller/boardDelete";
import { getBoardDetail } from "../controller/boardDetail";
import { getBoardEdit, postBoardEdit } from "../controller/boardEdit";
import { getCoinBoard, getFreeBoard, getNewsBoard, getPLBoard } from "../controller/homeController";
import { authUser } from "../middleware";
import routes from "../routes";

const boardRouter = express.Router();

boardRouter.get(routes.BOARD_FREE, getFreeBoard);
boardRouter.get(routes.BOARD_COIN, getCoinBoard);
boardRouter.get(routes.BOARD_NEWS, getNewsBoard);
boardRouter.get(routes.BOARD_PL, getPLBoard);

//글쓰기
boardRouter.get(routes.BOARD_CREATE, authUser, getBoardCreate);
boardRouter.post(routes.BOARD_CREATE, authUser, postBoardCreate);

//상세페이지
boardRouter.get("/:id", authUser, getBoardDetail);

//수정페이지
boardRouter.get("/:id/edit", authUser, getBoardEdit);
boardRouter.post("/:id/edit", authUser, postBoardEdit);

//삭제페이지
boardRouter.get("/:id/delete", authUser, getBoardDelete);


export default boardRouter;