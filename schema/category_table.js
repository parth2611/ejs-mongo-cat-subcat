var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    category_name: String
});

module.exports = mongoose.model('category', myschema);