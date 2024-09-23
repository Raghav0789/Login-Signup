const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email : {type : String , required : true},
    FirstName : {type : String , required : true},
    LastName : {type : String , required : true},
    MobileNo : {type : Number , required : true},
    PassWord : {type : String , require : true}
})

module.exports = mongoose.model('Users',UserSchema)