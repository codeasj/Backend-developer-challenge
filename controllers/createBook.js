//import the model
const Book = require("../models/book")

//Define Route handler
exports.createBook = async(req,res) => {
    try {
        //Extract title, author and description from request body
        const {title,author,description} = req.body;
        //create a new todo obj and insert in db
        const response = await Book.create({title,author,description});
        //Send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created succesfully'
            }
        );
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success:false,
            data: "internal server error",
            message: err.message })
    }
}

