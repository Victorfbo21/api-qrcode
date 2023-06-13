import mongoose from "mongoose";

const MsgSchema = new mongoose.Schema({
    content: { type: String }


}, {
    timestamps: true
})

const Msg = mongoose.model('msg', MsgSchema)

export default Msg