const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = commentSchema
