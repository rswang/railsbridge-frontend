var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    age: Number
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;