import Board from "../model/Board";

export const getHOME = (req, res) => {
    res.render("home");
};

export const getFreeBoard = async(req, res) => {
    try{
        const board_data = await Board.find({
            category: 0
        }).sort({sequence:-1}).populate("creator");
        res.render("board_free", { dataList : board_data });
    } catch(error){
        res.status(400);
        console.log(error);
    }
};

export const getCoinBoard = (req, res) => {
    res.render("board_coin");
};

export const getNewsBoard = (req, res) => {
    res.render("board_news");
};

export const getPLBoard = (req, res) => {
    res.render("board_PL");
};
