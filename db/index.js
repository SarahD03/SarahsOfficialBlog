const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://sarah03:swag123@cluster0.jn663e9.mongodb.net/musicDatabase'
  )
  .then(() => {
    console.log('SUCCESSFUL connected to MongoDB')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection
module.exports = db
