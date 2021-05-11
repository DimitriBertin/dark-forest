
const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// Routes 
const user = require('./routes/user')
app.use('/api', user)

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})