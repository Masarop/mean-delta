
const express = require('express');
let router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({nome:"Átilla"});
});

router.post('/',(req,res,next)=>{
    let localizacao = req.body;
    res.status(201).json(localizacao);
});

router.put('/',(req,res,next)=>{
    res.status(200).json({nome:"Átilla"});
});

router.delete('/',(req,res,next)=>{
    res.status(200).json({nome:"Átilla"});
});
module.exports=router;