const express = require('express')
const router = express.Router()
const SongController = require('../../controller/song-controller')

router.get('/', SongController.showSong)
router.get('/play/:id', SongController.playSong)
router.get('/playlits/add/:userid/:songid', SongController.addPlaylist)

module.exports = router
