const Books = require('../Models/Book');

async function addBook(req,res){
    try {
        console.log(req.body);
        let Book = new Books(req.body);
        Book.isbn = await Book._id;
        await Book.save();
        res.end("Book is added.");   
    } catch (err) {
        console.log(err);
        
    }
}
async function getBooks(req,res) {
    try {
        let books = await Books.find({});  
        res.render('bookList.ejs',({
            books:books
        }))
    } catch (err) {
        console.log(err);
        
    }
}
async function deleteBook(req,res) {
    try {
        let id = req.params.id;
        await Books.deleteOne({_id : id});
        let books = await Books.find({});  
        res.render('bookList.ejs',({
            books:books
        }))
    } catch (err) {
        console.log(err);
        
    }
}
module.exports={
    addBook,
    getBooks,
    deleteBook
}