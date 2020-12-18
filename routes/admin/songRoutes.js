const express = require('express')
const Controller = require('../../controller/admin/songController')
const router = express.Router()

router.get('/', Controller.songsListAdmin)
router.get('/add', Controller.addSong)
router.get('/edit/:id', Controller.updateSong)
router.get('/delete/:id', Controller.deleteSong)

router.post('/add', Controller.addSongPost)
router.post('/edit/:id', Controller.updateSongPost)

module.exports = router