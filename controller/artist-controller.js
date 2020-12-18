const { User, Artist, Song } = require('../models')

class ArtistController {
      static showArtist(req, res) {
            Artist.findAll() 
                  .then(data => {
                        res.render('./user/artists.ejs', {artist: data})
                  })
                  .catch(err => {
                        res.send(err)
                  })
      }

      static seeArtist(req, res) {
            let id = req.params.id
            Artist.findAll({
                  where: {id},
                  include: [Song]
                  })
                  .then(data => {
                        res.render('./user/artist-page', {artist: data})
                    
                  })
                  .catch(err => {
                        res.send(err)
                  })
      }
}

module.exports = ArtistController