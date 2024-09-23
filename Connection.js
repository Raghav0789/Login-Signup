const mongoose = require('mongoose');

async function connection() {
    try {
        await mongoose.connect('mongodb://localhost:27017/UserData');
        console.log("DataBase Connected ");
        
    } catch (err) {
        console.log(err);        
    }
}
module.exports = connection;