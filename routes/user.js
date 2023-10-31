const express = require("express");
const router = express.Router();

const {createBook} = require("../controllers/createBook");
const {getBook,getBookById} = require("../controllers/getBook");
const {updateBook} = require("../controllers/updateBook");
const {deleteBook} = require("../controllers/deleteBook")

//define api route
router.post("/createBook",createBook);
router.get("/getBook",getBook)
router.get("/getBook/:id",getBookById)
router.put("/updateBook/:id",updateBook)
router.delete("/deleteBook/:id",deleteBook)
module.exports = router;

