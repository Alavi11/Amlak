const newregister = require("../models/register");
const jwt = require('jsonwebtoken');



class login {
    async doLogin(req,res) {
        const user = await newregister.findOne({phone : req.body.phone})
        if(user){
            if(user.password !== req.body.password){
                return res.send({userIsExisted : true,passwordIsOk:false, massage:"رمز عبور یا نام کاربری اشتباه است"})
            }
            else{
                const phone = user.phone
                const secret = 'Amlak';
                const options = { expiresIn: '1000h' };
                const token = jwt.sign({phone}, secret, options)
                return res.send({userIsExisted : true,passwordIsOk:true, token :token , isLogin : true})
            }
        }
        else{
            return res.send({userIsExisted:false, massage:"رمز عبور یا نام کاربری اشتباه است"})
        }
    }
}


module.exports = new login;