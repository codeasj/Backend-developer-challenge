const Book = require("../models/book")

exports.updateBook = async(req,res) => {
    try{
        const {id} = req.params;
        const {title,author,description} = req.body;
        const books = await Book.findByIdAndUpdate(
            { _id: id},
            {title,author,description}
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
            data:books,
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