require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const OwnerController = require('./routes/OwnerController.js')
const HomeController = require('./routes/HomeController')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board

const connection = mongoose.connection;
connection.on('connected', () => {
console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
console.log('Mongoose default connection error: ' + err);
});

// Middleware
app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());

// Controller routes
app.use('/api/owners', OwnerController)
app.use('/api/owners/:ownerId/home', HomeController)

//renders React app
app.get('/', (req,res) => {
	res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log("Magic happening on port " + PORT);
})