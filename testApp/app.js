const Joi = require('joi') // Joi is a class
const express = require('express')
const bodyParser = require('body-parser')

const test = require('./routes/testroute');

const app = express();
app.use('/test',test);

app.get('/', (req, res) => {
	res.send("<h1>Hello Bitch! </h1>");
})

app.post('/api/courses', (req, res) => {
	const schema = {
		name: Joi.string().min(3).required()
	};

	const result = Joi.validate(req.body, schema)
	console.log(result)
	if(result.error) {
		res.status(400).send("Bad request"+result.error.details[0].name);
		return; 
	}
});

const port = process.env.PORT || 3000; // Reads environment var PORT or uses 3000
app.listen(port, () => {console.log(`Listening on port ${port}...`)})

app.get('/api/courses/:id', (req, res) => {
	res.send(`Port : ${port} <br/> id : ${res.params.id}`)
})
