import Board from "../model/Board";
import _ from "lodash";

export const getSearch = async(req, res) => {
    const searchingFor = req.query.search;
    try{
        const searchedTitle = await Board.find({
            title: { $regex: searchingFor, $options: "i"}
        });
        const searchedDes = await Board.find({
            description: { $regex: searchingFor, $options: "x"}
        });
        const searched = searchedTitle.concat(searchedDes);
        const searchedResult = _.uniqBy(searched, "id");
        res.render("search", { searchedResult });
    } catch(error){
        console.log(error);
    }
}