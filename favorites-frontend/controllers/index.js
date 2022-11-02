const { Favorite } = require('../src/models')

const getAllArtist = async (req, res) => {
  try {
    const artists = await Favorite.find()
    return res.status(200).json({ artists })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Favorite.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Artist deleted')
    }
    throw new Error('Artist not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateArtist = async (req, res) => {
  try {
    const edited = await Favorite.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(edited)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createArtist = async (req, res) => {
  try {
    const artist = await new Favorite(req.body)
    await artist.save()
    return res.status(201).json({
      artist
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

///comment crud
// create
const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
//get

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

///update comment
const updateComment = async (req, res) => {
  let updateComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updateComment)
}

//delete
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  updateArtist,
  deleteArtist,
  createArtist,
  getAllArtist,
  createComment,
  getAllComments,
  updateComment,
  deleteComment
}
