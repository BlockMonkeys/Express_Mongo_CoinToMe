import Board from "../model/Board";

export const getBoardEdit = async(req, res) => {
    try{
        const _id = req.params.id;
        const board_data = await Board.findById(_id);
        res.render("board_edit", { dataList : board_data});
    }catch(error){
        console.log(error);
    }
};

export const postBoardEdit = async(req, res) => {
    try{
        const _id = req.params.id;
        const category = req.body.category;
        const title = req.body.title;
        const description = req.body.description;
        await Board.findOneAndUpdate({ _id }, {
            category,
            title,
            description
        });
        res.redirect(`/board/${_id}`);
    }catch(error){
        console.log(error);
    }
}