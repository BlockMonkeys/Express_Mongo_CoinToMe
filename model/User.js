import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    nickname : {
        type: String,
        trim: true,
        max: 10,
        default: "Anonymous"
    },
    email : {
        type: String,
        required: true,
        trim: true,
    },
    registeredAt : {
        type: Date,
        default: Date.now(),
    },
})

UserSchema.plugin(passportLocalMongoose, { usernameField : "email" });
const model = mongoose.model("User", UserSchema);

export default model;