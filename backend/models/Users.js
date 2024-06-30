const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

const Users = mongoose.model('users', contactSchema); // Use 'users' as the schema name

module.exports = Users;
