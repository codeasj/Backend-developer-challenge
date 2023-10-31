const Book = require("../models/book")

exports.deleteBook = async(req,res) => {
    try{
        const {id} = req.params;
        const books = await Book.findByIdAndDelete({_id:id});
        
        if(!books) {
            res.status(404).json({
                success:false,
                message: `No data found with id: ${id}`
            })
            return;
        }

        res.status(200).json({
            success:true,
            message:"Book data deleted succesfully"
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}