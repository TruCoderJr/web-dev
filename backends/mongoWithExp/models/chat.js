const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {type:String, require},
    to: {type:String, require},
    message:{type:String,trim: true},
    created: {type:Date, default: Date.now,require}
})

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;