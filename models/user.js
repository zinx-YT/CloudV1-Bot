const mongooes = require('mongoose');
const data101 = mongooes.Schema({
    "id":String,
    "allowsGifts":Boolean,
    "createdAt":Date,
    "displayName":String,
    "email":String,
    "password":String,
    "userId": String,
    "discord": String
})

module.exports = mongooes.model("users", data101);
