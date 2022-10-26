const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const routes = require('./routes')
const db = require('./db')
const { Favorite, Comments } = require('./models')

const app = express()
//middleware
app.use(express.json())
app.use(cors())
// app.use('/api', routes)

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})
///crud goes below here

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
