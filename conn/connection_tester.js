const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 2000;

const db = require('./tester_queries');



app.use(bodyParser.json());

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

//GET function below will display info to client 


app.get('/', (req, res) => {
	res.json({info: 'Node.js, Express, and Postgres API'});
});


//HTTP Requests for each endpoint URL path:

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
//app.post('/users', db.createUser)
//app.put('/users/:id', db.updateUser)
//app.delete('/users/:id', db.deleteUser)


//listener will output to console
app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});


