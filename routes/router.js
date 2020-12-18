const express = require('express')
const router = express.Router()
const HomeController = require('../controller/home-controller')
const Controller = require('../controller/home-login-register.js')
const profile = require('./user/profile-router')
const song = require('./user/songs-router')
const artist = require('./user/artist-router')
const routerArtist = require('./admin/artistRoutes')
const routerSong = require('./admin/songRoutes')


const isLogin =  (req, res, next) => {
    if (req.session.userId) {
        next()
        
    }
    else {
        res.redirect('/login')
    }
}

const isAdmin = (req, res, next) => {
    if (req.session.username == 'Administrator') {
        next()
    }
    else {
        res.redirect('/login')
    }
}

router.get('/yourmusic/home', HomeController.home)
router.use('/yourmusic/profile', profile)
router.use('/yourmusic/songs', song)
router.use('/yourmusic/artists', artist)

router.get('/', isLogin, Controller.home)
router.get('/login', Controller.login)
router.get('/register', Controller.register)
router.get('/logout', Controller.logout)

router.post('/login',  Controller.loginPost)
router.post('/register',  Controller.registerPost)

//UNTUK ADMIN
router.use('/admin/artist', isAdmin, routerArtist)
router.use('/admin/song', isAdmin, routerSong)


module.exports = router
