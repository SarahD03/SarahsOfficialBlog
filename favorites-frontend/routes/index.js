const { Router } = require('express')
// const { Favorite } = require('../src/models')
// const { Comment } = require('./favorites-frontend/src/models')
// const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is a root!!!'))

// router.post('/form', controllers.updateFavorite)

module.exports = { router }
