/**
 * Created by Jonnas on 27/05/2017.
 */
const Localizacao = require('../model/localizacao.model')

function LocalizacaoService() {
    this.salvar = salvar;
    this.atualizar=atualizar;
    this.excluir=excluir;
    this.consultar=consultar;
    this.consultarID=consultarId;

    return this;



}

function salvar(localizacao) {
    return new Promise((resolve, reject)=>{
    localizacao.save((err, doc)=>{
        if(err)return reject(err);

        resolve(doc);
        });
    });

}


function atualizar(localizacao) {
    return new Promise((resolve, reject)=>{
        Localizacao.findByIdAndUpdate(localizacao.id,(err,doc)=>{
            if (err) return reject(err);

            resolve(doc);
        });
    });

}

function excluir(id) {
    return new Promise((resolve, reject)=>{
        Localizacao.findByIdAndRemove(id,(err)=>{
            if(err) return reject(err);

            resolve();
        })
    });

}

function consultar() {
    return new Promise((resolve, reject)=>{
        let criteria = {};
        Localizacao.find(criteria,(err,docs)=>{
            if(err) return reject(err);

            resolve(docs);
        });
    });

}

function consultarId(id) {
    return new Promise((resolve, reject)=>{
        Localizacao.findById(id,(err,doc)=>{
            if(err) return reject(err);

            resolve(doc);
        });
    });

}



module.exports = LocalizacaoService();