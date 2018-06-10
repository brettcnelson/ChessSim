const mongoose = require('mongoose');

const schema = mongoose.Schema({
	parent: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('chess', schema);
