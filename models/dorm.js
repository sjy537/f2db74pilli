const mongoose = require("mongoose")
const dormSchema = mongoose.Schema({
dorm_Name:
{
    type:String,
    lowercase: true,
    required :[true, "name must have a value"]
    },
dorm_Type: String,
dorm_Cost: String
})
module.exports = mongoose.model("Dorm",
dormSchema)