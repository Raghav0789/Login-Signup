const { log } = require('console');
const Users = require('../Models/Users');

async function addUser(req,res) {
    try {
        console.log(req.body);
        let user = new Users(req.body);
        if (req.body.PassWord==req.body.ConfirmPass) {
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
async function getUser(req,res){
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
module.exports = {
    addUser,
    getUser
}