const mongoose = require("mongoose");

var registerSchema = new mongoose.Schema({
    surname: String,
    given_name: String,
    dob: String,
    placeofresidence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String,
    
});

module.exports= mongoose.model("Virus", registerSchema)

