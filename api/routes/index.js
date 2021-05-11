
const express = require('express')
const app = express()
// Routes 
const user = require('./routes/user')
app.use('/api', user)