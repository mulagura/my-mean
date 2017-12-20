const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ModelSchema = new Schema({
    name:String
});

module.exports = mongoose.model('modelName',ModelSchema,'CRUD');


//modelName is name of this model

//ModelSchema is schema for model Data

//CRUD iS collection name 
