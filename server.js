const express = require('express');
const mongoose = require('mongoose');


const app = express();


//connect to MongoDB
mongoose.connect('mongodb:' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB database');


})
.catch((error) => {
    console.log('Error connecting to mongodb database', error);

});


//define api endpoints
app.get('/', (req, res) => {
    res.send('Hello, World');
});

app.get('/users', (req, res) => {
    // Retrieve list of users from database and send as response
});



app.post('/users', (req, res) => {
    // Create a new user in the database and send the user object as response
});
  
  // Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
