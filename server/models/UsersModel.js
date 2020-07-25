var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserModel = new Schema({
    NameItem: String,
    EmailItem: String,
    PasswordItem: String
});

const User = mongoose.model('User', UserModel);
module.exports = User;