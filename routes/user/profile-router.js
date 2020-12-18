const express = require('express')
const router = express.Router()
const ProfileController = require('../../controller/profile-controller')
const SongController = require('../../controller/song-controller')

router.get('/', ProfileController.profile)
router.get('/playlist', ProfileController.playlist)
router.get('/playlist/add/:userId/:songid', SongController.addPlaylist)
router.get('/playlist/:id', SongController.showplaylist)

module.exports = router
