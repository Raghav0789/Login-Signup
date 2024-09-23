const express = require('express');
const path = require('path');
const connection = require('./Connection');
const user = require('./Routes/User');
const app = express();
connection();
app.use(user);
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