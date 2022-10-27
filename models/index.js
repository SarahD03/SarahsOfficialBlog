const mongoose = require('mongoose')
const favoriteSchema = require('./favorite')
const commentSchema = require('./comment')

const Favorite = mongoose.model('Favorites', favoriteSchema)
const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
  Favorite,
  Comment
}
