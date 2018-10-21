const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TestSchema = new Schema ({
	location : {type: String, required: true, max: 180},
	phone: {type: Number, required: true},
});

module.exports = mongoose.model('Test',TestSchema);
