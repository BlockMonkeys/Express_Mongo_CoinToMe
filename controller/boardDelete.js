import Board from "../model/Board";

export const getBoardDelete = async(req, res) => {
    try{
        const _id = req.params.id;
        await Board.findOneAndRemove({ _id });
        res.redirect('/'); //이전페이지로 수정.
    }catch(error){
        console.log(error);
    }
};