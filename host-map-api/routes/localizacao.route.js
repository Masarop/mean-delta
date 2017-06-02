const express = require('express');
const router = express.Router();
const LocalizacaoService=require('../services/localizacao.service')
let Localizacao = require('../model/localizacao.model');



router.get('/',(req,res,next)=>{
    LocalizacaoService
        .consultar()
        .then((doc)=>{
                     //retorna o status de OK
            res.status(200).json(doc);
        },(err)=>{
                    //retorna o status de Erro
            res.status(500).json(err);
        });
});

router.post('/',(req,res,next)=>{
    let localizacao = new Localizacao(req.body);

    LocalizacaoService
        .salvar(localizacao)
        .then((doc)=>{
                     //retorna o status de OK
        res.status(201).json(doc);
        },(err)=>{
                    //retorna o status de Erro
        res.status(500).json(err);
        });

                     //retorna o status de OK
    res.status(201).json(localizacao);
});

router.put('/',(req,res,next)=>{
                 //retorna o status de OK
    res.status(200).json({nome:"Átilla"});
});

router.delete('/',(req,res,next)=>{
    
    LocalizacaoService
        .excluir(req.param('id'))
        .then(
         (doc) => {
             //retorna o status de OK
             res.status(200).json({situacao: "removido"})
         },
         (err) => {
             //retorna o status de Erro
             res.status(500).json(err)
         }
     );
});
     
module.exports=router;
