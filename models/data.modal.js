const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name:{type:String,required:true},
    sector:{type:String,required:true},
    isAgree:{type:Boolean}
})


const data = mongoose.model('Data',dataSchema)
module.exports = data