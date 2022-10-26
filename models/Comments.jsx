const { Schema } = require('mongoose')

const commentsSchema = new Schema(
    {
        title: { type: String, required: true},
        body: {type: String, required: true},
        name: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = commentsSchema