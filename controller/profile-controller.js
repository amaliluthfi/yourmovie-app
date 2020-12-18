const { User, Song, Artist } = require('../models')

class ProfileController {
      static profile(req, res) {
            let username = req.session.username
           User.findAll() 
            .then(data => {
                  res.render('./user/profile', {user: data, username})
            })
            .catch(err => {
                  res.send(err)
            })
      }

      static playlist(req, res) {
            
      }
}

module.exports = ProfileController