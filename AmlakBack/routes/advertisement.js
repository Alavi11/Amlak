const express = require("express")
const router  = express.Router()
const multer = require("multer");
const { mkdirp } = require("mkdirp")

const controller = require('../controllers/advertisement')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        mkdirp('./upload').then(made=>{
          cb(null, './upload')
      })
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname )
    }
})

const upload = multer({ storage: storage })

router.post('/',upload.single("picture"),controller.create)

router.post('/search',controller.getBySearch)
router.post('/detail/:postcode',controller.setRate)

router.get('/',controller.getall)
router.get('/detail/:postcode',controller.getone)
router.get('/myadv',controller.getUserAdv)

router.delete("/:postcode",controller.delete)
router.put("/:postcode",controller.put)




module.exports = router;