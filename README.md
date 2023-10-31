# Backend-developer-challenge

API endpoints and their usage:

router.post("/createBook",createBook);       //Adding a book

router.get("/getBook",getBook)               //fetching all books

router.get("/getBook/:id",getBookById)       //fetching book by id

router.put("/updateBook/:id",updateBook)     //updating a book

router.delete("/deleteBook/:id",deleteBook)  //deleting a book



Instructions to set up and run the application locally:

run "npm init -y"

run "npm i"

setup env file by putting port number and your mongodb instance url

run "npm run dev" or "npm run start"


Note-> Books names, author and summary are random.
