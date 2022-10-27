const { Schema } = require('mongoose')

const favoriteSchema = new Schema(
  {
    artist: { type: String, required: true },
    image: { type: String, required: true },
    lyrics: { type: String, required: true },
    albums: { type: Number, required: true },
    comments: { type: Schema.Types.ObjectId, ref: 'Comments' }
  },
  { timestamps: true }
)

module.exports = favoriteSchema
