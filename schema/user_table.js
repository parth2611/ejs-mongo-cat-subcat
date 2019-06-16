var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    user_name: String,
    user_mobile: Number,
    user_id: String

});

module.exports = mongoose.model('users', myschema);