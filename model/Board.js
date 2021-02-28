import mongoose from "mongoose";
const AutoIncrement = require('mongoose-sequence')(mongoose);

const BoardSchema = new mongoose.Schema({
    category:{
        //자게 = 0 , 뉴스 = 1, 코인 = 2, 손익인증 = 3
        type: Number,
        default: 0,
        required: true,
    },
    title:{
        type: String,
        max: 20,
        required: true,
    },
    description:{
        type: String,
        minlength: 3,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    views:{
        type: Number,
        default: 0,
    },
});

BoardSchema.plugin(AutoIncrement, {id:'sequence_seq',inc_field: 'sequence'});

module.exports = mongoose.model('Board', BoardSchema);
