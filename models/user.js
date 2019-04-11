var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    dateCreated: {type: Date, default: Date.now()},
    lastLogin: {type: Date, default: Date.now()}
});

//pass the passportLocalMongoose plugin to the User schema
//then u cn model it, then exports it
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);