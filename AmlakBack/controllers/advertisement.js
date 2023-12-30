const newadvertisement = require("../models/advertisement");
const newregister = require("../models/register");
const jwt = require('jsonwebtoken');


class advertisement{
    async create(req,res){

        const authHeader = req.headers['authorization'];
        const usertoken = authHeader && authHeader.split(' ')[1];
        const secret = 'Amlak'
        const decoded = jwt.verify(usertoken, secret);

        const user = await newregister.findOne({phone : decoded.phone})
        
        if (!usertoken) {
            return res.sendStatus(401);
        }
        else{
            // console.log(user);
            // console.log(adv);

            const ostan = req.body.ostan
            const shahr= req.body.shahr
            const mantaghe= req.body.mantaghe
            const karbari= req.body.karbari
            const melktype= req.body.melktype
            const address= req.body.address
            const zirbana= req.body.zirbana
            const masahat= req.body.masahat
            const barmelk= req.body.barmelk
            const gheimat= req.body.gheimat
            const ejare= req.body.ejare ? req.body.ejare : 0
            // const number = adv ? adv + 1 : 0

            // console.log("number :", number);

            let reg = new newadvertisement({
                // number: await newadvertisement.find().lenght,
                ostan,
                shahr,
                mantaghe,
                karbari,
                melktype,
                address,
                zirbana,
                masahat,
                barmelk,
                gheimat,
                ejare
            });
            reg = await reg.save();
            // user.posts.put(req._id)
            // res.send({exist:false,reg});
        }
    }
}
module.exports = new advertisement;