import Board from "../model/Board";

export const getBoardCreate = async(req, res) => {
    res.render("board_create");
};

export const postBoardCreate = async(req, res) => {
    const category = req.body.category;
    const title = req.body.title;
    const description = req.body.description;
    try{
        await Board.create({
            category,
            title,
            description,
            creator : req.user.id
        });
        res.status(200);
        res.redirect('/');
    } catch(error){
        res.status(400);
        console.log(error);
    };
}
