const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    namecode:{
    name: {
        type: String,
        required: true
    },
    base_unit: {
        type: String,
        required: true
    },
    Buy:{
        type:String,
        required:true

    },
    Sell:{
        type:String,
        required:true

    },
    last:{
        type:String,
        required:true

    },
    volume:{
        type:String,
        required:true

    },
}
})
const User=mongoose.model('Data',userSchema)
User.createIndexes()
module.exports = User
// btcinr: {
//     base_unit: "btc",
//     quote_unit: "inr",
//     low: "1595972.0",
//     high: "1690534.0",
//     last: "1642999.0",
//     type: "SPOT",
//     open: "1690027",
//     volume: "6.02812",
//     sell: "1642999.0",
//     buy: "1642000.0",
//     at: 1665167303,
//     name: "BTC/INR"
//     },