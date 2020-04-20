const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const app = express()
dotenv.config()


// after express is invoked, declare the port that the server should choose from and provide a message
app.listen(3000, () => console.log('server is up and running on port 3000'))
app.get('/', (req, res) => {
  res.send('server is running on port 3000')
})

//After setting up database cluster on MongoDB Atlas, 
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true  },
  () => console.log('database is connected')
)