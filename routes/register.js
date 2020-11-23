// const { Router } = require("express")


const router= require("express").Router()
const User = require("../models/user.model")



router.route('/register').get((req,res)=>{
    // const {username,email,password}=req.body
    res.status(200).json('register')
})

router.route('/register').post((req,res)=>{
    const {username,email,password}=req.body
    // const username=req.body.username
    // const email=req.body.email
    // const password=req.body.password
    const user = new User({
        username,
        email,
        password
    })
    user.save().then(()=>{res.status(200).json('new user son')})
    // res.status(200).json('registered')

console.log(req.body)
})

module.exports = router; 