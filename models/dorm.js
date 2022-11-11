const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
dorm_Name:String,  
dorm_Type: String,
dorm_Cost: String
})
module.exports = mongoose.model("Costume",
costumeSchema)