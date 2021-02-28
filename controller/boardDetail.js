import Board from "../model/Board";
import User from "../model/User";

export const getBoardDetail = async(req, res) => {
    try{
        const _id = req.params.id;
        const board_data = await Board.findById(_id).populate("creator");
        const user = await User.findById(board_data.creator.id);
        if(user.id !== req.user.id){
            board_data.views++;
            board_data.save();
        }
        console.log(board_data);
        res.render("board_detail", { dataList: board_data });
    }catch(error){
        console.log(error);
    }
};