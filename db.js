import mongoose from "mongoose";

mongoose.connect("mongodb+srv://blockmonkey:0608@cointome.eik3s.mongodb.net/cointome?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;


db.once("open", ()=> console.log(`✅ DB is Connected!`));
db.on("error", (error)=> console.log(`❌ DB Problem : ${error}`));