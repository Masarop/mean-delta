/**
 * Created by Jonnas on 27/05/2017.
 */

const db = require('./db');
const mongoose = require('mongoose');

function MongoDBConnection() {

    this.connect=connect;
    return this;
}

function connect() {
    console.log('Conectando ao MongoDB');

    mongoose.connect(getUrlConnection(),(err)=>{
        if(err)throw err;
    });

    console.log('Conectado ao MongoDB!!!');

}

function getUrlConnection() {
    return 'mongodb://'
            +db.usuario+':'
            +db.senha
            +'@ds155191.mlab.com:55191/mean-delta';
}

module.exports = MongoDBConnection();