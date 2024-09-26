const { log } = require('console');
const Users = require('../Models/Users');

async function addUser(req,res) {
    try {
        console.log(req.body);
        let user = new Users(req.body);
        if (req.body.PassWord==req.body.ConfirmPass) {
            user.userType=2;
            await user.save();
            res.render('login');
        } else {
            res.end("Password Did'nt match")
        }
        await user.save();
        res.render('login');    
    } catch (err) {
        console.log(err);
        
    }
}
async function getUser(req,res) {
    try {
        console.log(req.body);
        let username = req.body.username;
        let password = req.body.password;
        console.log(username,'username');
        console.log(password,'password');
        let user = await Users.findOne({ email: username, PassWord: password });
        if (user) {
            res.render('home',{
                user:user
            });
        } else {
            res.end("Can't find user");
        }
    } catch (err) {
        console.log(err);
        
    }


}
async function getUsers(req,res){
    try {
        let users = await Users.find({});
        res.render('userList.ejs',{
            users: users
        });
    } catch (err) {
        console.log(err);
        
    }
}
async function getUserForEdit(req,res){
    try {
        let id = req.params.id;
        console.log(id);
        
        let user = await Users.findOne({_id:id});
        console.log(user);
        res.render('UpdateUser.ejs',{
            user: user
        });
    } catch (err) {
        console.log(err);
        
    }
}
async function UpdateUser(req,res) {
    try {
        let id = req.params.id;
        let user = await Users.findOne({_id:id});
        user.email = req.body.email;
        user.FirstName = req.body.FirstName;
        user.LastName = req.body.LastName;
        user.MobileNo = req.body.MobileNo;
        if(req.body.PassWord == req.body.ConfirmPass){
            user.PassWord = req.body.PassWord;
        }
        else{
            res.end("Password not match....")
        }
        await user.save();
        let users = await Users.find({});
        res.render('userList.ejs',{
            users: users
        });

    } catch (err) {
        console.log(err);
        
    }
}
async function  deleteUser(req,res) {
    try {
        let id = req.params.id;
        await Users.deleteOne({_id:id});
        let users = await Users.find({});
        res.render('userList',({
            users:users
        }));
    } catch (err) {
        console.log(err);
        
    }
}
module.exports = {
    addUser,
    getUser,
    getUsers,
    getUserForEdit,
    UpdateUser,
    deleteUser
}