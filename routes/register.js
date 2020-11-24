const router= require("express").Router()
const User = require("../models/user.model")


router.route('/register').get((req,res)=>{
    res.status(200).json('register')
})

router.route('/register').post((req,res)=>{
    const {username,email,password}=req.body
    const user = new User({
        username,
        email,
        password
    })
    user.save().then(()=>{res.status(200).json('new user son')})
console.log(req.body)
})

module.exports = router; 