const mongoose = require('mongoose');

async function connection() {
    try {
        // Connect to UserData database
        await mongoose.connect('mongodb://localhost:27017/UserData');
        console.log("UserData Database Connected");

        // Create a separate connection for the bookData database
        const  bookDataConnection = await mongoose.createConnection('mongodb://localhost:27017/BookData');
        console.log("Book DataBase is connected");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connection;
