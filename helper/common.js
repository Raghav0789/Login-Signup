let User = require('../Models/Users');
const bcrypt = require('bcrypt');
const saltRound = 10;

async function createAdmin(){
    try {
        let password = bcrypt.hashSync('12345',saltRound

        )
        let adminData = {
            FirstName : 'Raghav',
            LastName : 'Sharma',
            email : 'admin@rdec.in',
            PassWord : password,
            MobileNo : 78954321,
            userType : 1,

        }
        let user = new User(adminData);
        await user.save();

    } catch (err) {
        console.log(err);
        
    }
}
module.exports = {
    createAdmin
}