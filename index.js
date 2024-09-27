const express = require('express');
const path = require('path');
const connection = require('./Connection');
// const connection2 = require('./Connection2');
const user = require('./Routes/User');
const book = require('./Routes/Book')
const app = express();
const common = require('./helper/common');
connection();
// connection2();
// common.createAdmin();
app.use(user);
app.use(book);
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.listen(3000,(err)=>{
    if (err) {
        console.log(err);
        
    }
    else{
        console.log("Server is listening on port 3000");
        
    }
})