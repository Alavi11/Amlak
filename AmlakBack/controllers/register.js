const newregister = require("../models/register");


class register{
    async create(req,res){

        const user = await newregister.findOne({phone : req.body.phone})
        if(user) {
            return res.send({exist:true})
        }
        else{
            const name = req.body.name;
            const phone = req.body.phone; 
            const email = req.body.email;
            const password = req.body.password;

            let reg = new newregister({
                name : name,
                phone : phone,
                email : email,
                password : password,
                posts : []
            });
            reg = await reg.save();
            res.send({exist:false,reg});
        }
    }
}
module.exports = new register;