const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.send('This is a root!!!'))

module.exports = router
