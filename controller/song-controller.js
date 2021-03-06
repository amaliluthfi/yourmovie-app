const { User, Song, Artist, UserSong } = require('../models')

class SongController {
      static showSong(req, res) {
            let userId = req.session.userId
            console.log(req.session.userId, "INI DARI SHOW SONG CONTROLLER");
            Song.findAll({include: [Artist, User]}) 
                  .then(data => {
                        // res.send(data)
                        res.render('./user/songs', {song: data, userId} )
                  //      console.log(userId)
                  res.send(data)
                        // User.findAll
                  })
                  .catch(err => {
                        res.send(err)
                  }) 
      }

      static addPlaylist(req, res) {
            let newUsersong = {
                  UserId: req.params.userId,
                  SongId: req.params.songid
            }
            
            UserSong.create(newUsersong)
                  .then(data => {
                        console.log(req.session.userId, "INI DARI ADD PLAYLIST CONTROLLER");
                        res.redirect(`/yourmusic/profile/playlist/${newUsersong.UserId}`)
                  })
                  .catch(err => {
                        res.send(err)
                  }) 

      }

      static showplaylist(req, res) {
            let id = req.params.id
            User.findByPk(id, {include: [Song]})
                  .then(data => {
                        res.render('./user/playlist.ejs', {songs: data})
                      
                  })
                  .catch(err => {
                        res.send(err)
                  })
      }

      static playSong(req, res) {
            let id = req.params.id
            console.log(req.session.userId, "INI DARI SHOW SONG CONTROLLER");
            Song.findByPk(id, {include: [Artist]})
                  .then(data => {
                        res.render('./user/playpage', {song: data})
                        // res.send(data)
                  })
                  .catch(err => {
                        res.send(err)
                  })
      }
}

module.exports = SongController