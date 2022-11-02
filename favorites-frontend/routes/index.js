const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is a root!!!'))

router.post('/favorite', controllers.createArtist)

router.delete('/favorite/:id', controllers.deleteArtist)

router.put('/favorite/:id', controllers.updateArtist)

router.get('/favorite', controllers.getAllArtist)

router.post('/comment/:id', controllers.createComment)

router.get('/comment', controllers.getAllComments)

router.put('/comment', controllers.updateComment)

router.delete('/comment/:id', controllers.deleteComment)

module.exports = router
