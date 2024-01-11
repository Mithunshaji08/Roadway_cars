const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mithunshaji2003:mithun@cluster0.veqjltb.mongodb.net/Roadway?retryWrites=true&w=majority")
    .then(() => {
        console.log("db is connected");
    })
    .catch((err) => console.log(err));

// Registration schema
const registrationSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    // Add other fields as needed for your registration data
});

const User = mongoose.model("user", registrationSchema);

module.exports = {
    User
    
    
};