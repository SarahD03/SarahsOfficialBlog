const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is a root!!!'))

router.put('/form', controllers.updateArtist)

router.delete('/form/:id', controllers.deleteArtist)

router.post('/form/:id', controllers.updateArtist)

router.get('/form', controllers.getAllArtist)

router.post('/comments/:id', controllers.createComment)

router.get('/comments', controllers.getAllComments)

router.put('/comments', controllers.updateComment)

router.delete('/comments/:id', controllers.deleteComment)

module.exports = { router }
