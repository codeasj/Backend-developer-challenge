const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
            maxLength:50
        },
        author: {
            type:String,
            required:true,
            maxLength:50
        },
        description: {
            type: String,
            required: true,
        }
    }
)

module.exports = mongoose.model("Book", bookSchema);