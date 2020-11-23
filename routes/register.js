const { Router } = require("express")

const router= require("express").Router()

router.route('/register').get((req,res)=>{
    res.status(200).json('register')
})

module.exports = router; 