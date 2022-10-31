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

app.put('/favorite', async (req, res) => {
  let updatedArtist = await Favorite.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    res.json(updatedArtist)
  )
})
app.delete('/favorite/:id', async (req, res) => {
  let deletedFavorite = await Favorite.findByIdAndDelete(req.params.id)
  res.json(deletedFavorite)
})

app.get('/comment', async (req, res) => {
  let allComments = await Comment.find({})
  res.json(allComments)
})

app.post('/comment', async (req, res) => {
  let createdComment = await Comment.create(req.body)
  res.json(createdComment)
})

app.delete('/comment', async (req, res) => {
  let deletedComment = await Comment.findByIdAndDelete(req.params.id)
  res.json(deletedComment)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
