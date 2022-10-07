const express = require('express')
const User=require('../Models/data')
const ActivityDSA = require('../Models/data')
// const fetchuser = require('../Middleware/fetch')
const axios = require("axios");
const { findByIdAndUpdateDSA } = require('../Models/data');
const { response } = require('express');

const router = express.Router()

router.get('/updatedata', async (req,res) => {
try{
    
    const stock = await axios({
        method: "get",
        url: `https://api.wazirx.com/api/v2/tickers`,
      });

console.log(stoclkl);
    // console.log(Object.parse(stock));
}
catch(error){
    console.error(error.message);
    res.status(400).json({error:"Not updated"})
}
})

router.post('/updatedata, async (req,res) => {
try{
    
    // res.json({success:"Question Done !"});
}
catch(error){
    console.error(error.message);
    res.status(400).json({error:"Not signed up"})
}
})

router.get('/getdata', async (req,res)=>{

    try{
    const user = await Activity.findOne({user:req.user.id});
    res.json(user);
    }
    catch(error){
        res.status(400).json({error:"Error in fetching Data"})
    }
})

module.exports = router;