const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String
}, {

    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;