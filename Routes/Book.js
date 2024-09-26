const express = require('express');
const BookContoller = require('../Controllers/BookController');
const Users = require('../Models/Users')
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended : false}));
router.get('/',(req,res)=>{
    
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
module.exports=router;