const {Song, Artist, User} = require('../../models')

class Controller {

    static songsListAdmin(req, res){
        Song.findAll({
            include: Artist})
            .then(function(songs){
                res.render('./admin/songList.ejs', {songs})
            })
            .catch(function(err){
                res.send(err)
            })
    }
    static addSong(req, res){
        Artist.findAll()
            .then(function(artist){
                // res.send(artist)
                res.render('./admin/addSong.ejs', {artist})
            })
            .catch(function(err){
                res.send(err)
            })
    }
    static addSongPost(req, res){
        let obj = {
            name: req.body.name,
            urlImg: req.body.urlImg,
            urlSong: req.body.urlSong,
            ArtistId: +req.body.ArtistId
        }
        
        Song.create(obj)
            .then(function(newsong){
                // console.log(newsong, 'new song');
                res. redirect('/admin/song')
            })
            .catch(function(err){
                res.send(err)
            })

    }
    static updateSong(req, res){
        let id = req.params.id
        let getSong = Song.findAll({
            where: {
                id:id
            }
        })
        let getArtist = Artist.findAll()
        Promise.all([getSong, getArtist])
            .then(function(data){
                // res.send(data[0])
                res.render('./admin/updateSong.ejs', {song: data[0], artist: data[1]})
            })
            .catch(function(err){
                res.send(err)
            })
    }
    static updateSongPost(req, res){
        let id = req.params.id
        let obj = {
            name:  req.body.name,
            urlImg: req.body.urlImg,
            urlSong: req.body.urlSong,
            ArtistId: req.body.ArtistId
        }
        Song.update(obj, {
            where: {
                id: id
            }
        })
            .then(function(updatedSong){
                res.redirect('/admin/song')
            })
            .catch(function(err){
                res.send(err)
            })
    }

    static deleteSong(req, res){
        let id = req.params.id
        Song.destroy({
            where :
            {id : id}
        })
            .then(function(status){
                res.redirect('/admin/song')
            })
            .catch(function(err){
                res.send(err)
            })
    }
}

module.exports = Controller