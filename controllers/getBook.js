const Book = require("../models/book")

//get all
exports.getBook = async (req,res) => {
    try {
        const books = await Book.find({})
        res.status(200).json({
            success: true,
            data: books,
            message: "Entire data fetched succesfully"
        })
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message, 
            message: "Server Error"
        })
    }
}

//get single todo
exports.getTodoById = async (req,res) => {
    try{
        const id = req.params.id;
        const books = await Book.findById({_id:id});
        
        if(!books) {
            res.status(404).json({
                success:false,
                message: `No data found with id: ${id}`
            })
            return;
        }
        res.status(200).json({
            success :true,
            data: books,
            message: "Entry fetched by id succesfully"
        })
    }
    catch(err) {
        console.error(err)
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'server error' 
        })
    }
}