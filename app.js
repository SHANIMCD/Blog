const express = require('express')

const app = express()

// after express is invoked, declare the port that the server should choose from and provide a message
app.listen(3000)
app.get('/', (req, res) => {
  res.send('server is running on port 3000')
})