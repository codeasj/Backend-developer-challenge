const express = require("express");
const app = express();

//Load config from env file
require("dotenv").config();
const PORT = process.env.PORT||4000;

//middleware to parse json request body
app.use(express.json());

//import router from book api
const user = require("./routes/user");

//mount the todo API routes
app.use("/api/v1",user);

//start server 
app.listen(PORT, () => console.log(`Server started succesfully at ${PORT}`));

//Connection to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req,res) => {
    res.send('<h1> This is Homepage</h1>');
})