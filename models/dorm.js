const mongoose = require("mongoose")
const dormSchema = mongoose.Schema({
dorm_Name:
{
    type:String,
    lowercase: true,
    required :[true, "Dorm name must have a value"],
    
    },
dorm_Type: String,
dorm_Cost: {
    type:String,
    lowercase: true,
    description: "Dorm Cost  have a Name"
}
})
module.exports = mongoose.model("Dorm",
dormSchema)