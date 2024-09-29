const express = require('express');
const BookContoller = require('../Controllers/BookController');
const Users = require('../Models/Users')
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended : false}));
router.get('/',(req,res)=>{
    
})
router.get('/book/add/page',(req,res)=>{
     res.render('AddBook');
})
router.post('/book/add',(req,res)=>{
     BookContoller.addBook(req,res);
})
router.get('/books/list',(req,res)=>{
     BookContoller.getBooks(req,res);
})
router.get('/book/delete/:id',(req,res)=>{
     BookContoller.deleteBook(req,res);
})
router.get('/book/update/page/:id',(req,res)=>{
     BookContoller.getBookForEdit(req,res);
})
router.post('/book/update/:id',(req,res)=>{
     BookContoller.updateBook(req,res);
})
router.get('/user/book/list',(req,res)=>{
     BookContoller.getBookForUser(req,res);
})
router.get('/user/home',(req,res)=>{
     res.render('userHome');
})
router.get('/contact',(req,res)=>{
     res.render('Contact');
})
router.get('/about',(req,res)=>{
     res.render('AboutUs');
})
module.exports=router;