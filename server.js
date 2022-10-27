const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Favorite, Comment } = require('./favorites-frontend/src/models')

const app = express()
//middleware
app.use(express.json())
app.use(cors())
// app.use('/api', routes)

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit!!!' })
})
///crud goes below here

// favorite routes
app.get('/favorite', async (req, res) => {
  let allFavorites = await Favorite.find({})
  res.json(allFavorites)
})

app.post('/favorite', async (req, res) => {
  let createdFavorite = await Favorite.create(req.body)
  res.json(createdFavorite)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
