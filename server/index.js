const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv');

const PORT = 5000;
const mongoose = require('mongoose')
const authRoute = require('./routes/authRoute')
const listRoute = require('./routes/listRoute')

dotenv.config();
const connectionString = process.env.MONGODB_URI
app.use(cors())

app.use('/auth', authRoute);
app.use('/parfemi', listRoute)

app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
    mongoose.connect(connectionString)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error.message);
    });
    
})