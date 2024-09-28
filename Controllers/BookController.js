const Books = require('../Models/Book');

async function addBook(req,res){
    try {
        console.log(req.body);
        let Book = new Books(req.body);
        Book.isbn = await Book._id;
        await Book.save();
        let books = await Books.find({});
        res.render('bookList',{
            books:books
        })  
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
async function getBookForEdit(req,res) {
    try {
        let id = req.params.id;
        let book = await Books.findOne({_id:id});
        if(book){
            res.render('UpdateBook',{
                book:book
            })
        }
    } catch (err) {
        console.log(err);
        
    }
}
async function updateBook(req,res) {
    let id = req.params.id;
    let book = await Books.findOne({_id:id});
    book.bookTitle = req.body.bookTitle;
    book.publisher = req.body.publisher;
    book.price = req.body.price;
    book.language = req.body.language;
    book.edition = req.body.edition;
    book.noOfPages = req.body.noOfPages;
    book.country = req.body.country;
    await book.save();
    books = await Books.find({});
    res.render('bookList',{
        books : books
    })

}
module.exports={
    addBook,
    getBooks,
    deleteBook,
    getBookForEdit,
    updateBook
}