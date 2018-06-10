const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const chess = require('./models/chess');

const mongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : 'mongodb://localhost/chess';
mongoose.connect(mongoURI);
const db = mongoose.connection;

const app = express();
const port = process.env.PORT || 4040;

process.env.NODE_ENV === 'production' && app.use(express.static('client/build'));

app.use(bodyParser.json());

app.post('/api/chess', (req, res) => {
	var entry = req.body;
	defaultCollection.create(entry, (err, entry) => {
		if (err) {
			throw err;
		}
		res.json(entry);
	});
});

app.get('/api/chess', (req, res) => {
	defaultCollection.find((err, chess) => {
		if (err) {
			throw err;
		}
		res.json(chess);
	});
});

app.put('/api/chess/:_id', (req, res) => {
	defaultCollection.findByIdAndUpdate(req.params._id, req.body, {new:true}, (err, entry) => {
		if (err) {
			throw err;
		}
		res.json(entry);
	});
});

// app.delete('/api/chess/:_id', (req, res) => {
// 	defaultCollection.findByIdAndRemove(req.params._id, (err, result) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(result);
// 	});
// });


app.listen(port, () => console.log(`express listening on port ${port}`));
