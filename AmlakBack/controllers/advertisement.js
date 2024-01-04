const newadvertisement = require("../models/advertisement");
const newregister = require("../models/register");
const jwt = require('jsonwebtoken');


class advertisement{

    async getall(req,res){
        const adv = await newadvertisement.find()
        const compareByRate = (a, b) => {
            return a.rate - b.rate;
        }
        adv.sort(compareByRate);
        adv.reverse()
        res.send(adv)
    }
    async getone(req,res){
        const postcode = req.params.postcode
        const adv = await newadvertisement.findOne({postcode : postcode})
        res.send(adv)
    }
    async setRate(req,res){
        const postcode = req.params.postcode
        let adv = await newadvertisement.findOne({postcode : postcode})
        let rate = (req.body.rate + adv.rate)/2
        rate = rate.toFixed(1)
        console.log(rate);
        adv.rate = rate
        adv = await adv.save()
        res.send(adv)
    }


    async create(req,res){

        const authHeader = req.headers['authorization'];
        const usertoken = authHeader && authHeader.split(' ')[1];
        const secret = 'Amlak'
        const decoded = jwt.verify(usertoken, secret);

        let user = await newregister.findOne({phone : decoded.phone})
        
        if (!usertoken) {
            return res.sendStatus(401);
        }
        else{

            const photo = req.file.filename
            const ostan = req.body.ostan
            const shahr= req.body.shahr
            const mantaghe= req.body.mantaghe
            const karbari= req.body.karbari
            const melktype= req.body.melktype
            const address= req.body.address
            const zirbana= req.body.zirbana
            const masahat= req.body.masahat
            const gheimat= req.body.gheimat
            const ejare= req.body.ejare ? req.body.ejare : 0
            const postcode = req.body.postcode
            const otagh = req.body.otagh
            const gharardad = req.body.gharardad
            const phone = req.body.phone
            const year = req.body.year
            const sanad = req.body.sanad


            let reg = new newadvertisement({
                ostan,
                shahr,
                mantaghe,
                karbari,
                melktype,
                address,
                zirbana,
                masahat,
                gheimat,
                ejare,
                postcode,
                photo,
                rate:5,
                otagh,
                gharardad,
                phone,
                year,
                sanad
            });

            reg = await reg.save();
            user.posts.push(postcode)
            user = await user.save()
            res.send({massage:"با موفقیت ثبت شد"});
        }
    }
}
module.exports = new advertisement;