const express = require('express')
const Controller = require('../../controller/admin/artistController.js')
const router = express.Router()

router.get('/', Controller.artistsListAdmin)
router.get('/add', Controller.addArtist)
router.get('/edit/:id', Controller.updateArtist)
router.get('/delete/:id', Controller.deleteArtist)

router.post('/add', Controller.addArtistPost)
router.post('/edit/:id', Controller.updateArtistPost)

module.exports = router