const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    username:String,
    password : String,
    details : String
})

const UserModel = mongoose.model("store_datacol", UserSchema)
module.exports = UserModel