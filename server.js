const express = require('express')
const PORT = process.env.PORT || 3001
const routes = require('./routes')
const db = require('./db')

const app = express()

//middleware
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
