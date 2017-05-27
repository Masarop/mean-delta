const express = require('express');
const router = express.Router();
const LocalizacaoService=require('../services/localizacao.service')
let Localizacao = require('../model/localizacao.model');



router.get('/',(req,res,next)=>{
    LocalizacaoService
        .consultar()
        .then((doc)=>{
            res.status(200).json(doc);
        },(err)=>{
            res.status(500).json(err);
        });
});

router.post('/',(req,res,next)=>{
    let localizacao = new Localizacao(req.body);

    LocalizacaoService
        .salvar(localizacao)
        .then((doc)=>{
        res.status(201).json(doc);
        },(err)=>{
        res.status(500).json(err);
        });


    res.status(201).json(localizacao);
});

router.put('/',(req,res,next)=>{
    res.status(200).json({nome:"Átilla"});
});

router.delete('/',(req,res,next)=>{
    res.status(200).json({nome:"Átilla"});
});
module.exports=router;