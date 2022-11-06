const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
     rollNumber: { type: Number , unique: true, required: true },
     dob: { type: Date, required: true },
     password: { type: String, required: true },
     firstName: { type: String, required: true }, 
     lastName: { type: String, required: true },
     class:{type:Number,required:true}
})
module.exports = mongoose.model("student", studentSchema);