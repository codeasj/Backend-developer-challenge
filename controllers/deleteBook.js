const Book = require("../models/book")

exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;
        const books = await Book.findByIdAndDelete({_id:id});
        res.status(200).json({
            success:true,
            message:"Book data deleted succesully"
        })

        if(!books) {
            res.status(404).json({
                success:false,
                message: `No data found with id: ${id}`
            })
            return;
        }
    }
    catch(err){
        console.error(error);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}