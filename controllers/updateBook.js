const Todo = require("../models/book")

exports.updateTodo = async(req,res) => {
    try{
        const {id} = req.params;
        const {title,description} = req.body;
        const books = await Todo.findByIdAndUpdate(
            { _id: id},
            {title,description,updatedAt: Date.now()}
        )

        if(!books) {
            res.status(404).json({
                success:false,
                message: `No data found with id: ${id}`
            })
            return;
        }

        res.status(200).json({
            success:true,
            data:todo,
            message: "Entry updated succesfully"
        })
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success:false,
            error: err.message,
            message:"Server error"
        })
    }
} 