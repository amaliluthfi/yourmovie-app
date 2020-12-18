const express = require('express')
const router = express.Router()
const ArtistController = require('../../controller/artist-controller')

router.get('/', ArtistController.showArtist)
router.get('/:id/songs', ArtistController.seeArtist)

module.exports = router
