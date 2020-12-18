const {Song, Artist, User} = require('../../models')

class Controller {

    static artistsListAdmin(req, res){
        Artist.findAll({include: Song})
            .then(function(Artists){
                res.render('./admin/artistList.ejs', {Artists})
            })
            .catch(function(err){
                res.send(err)
            })
    }

    static addArtist(req, res){
        // res.send('form add Artist')
        res.render('./admin/addArtist.ejs')
    }
    static addArtistPost(req, res){
        let obj = {
            name: req.body.name,
            label: req.body.label
        }
        Artist.create(obj)
            .then(function(newArtist){
                res. redirect('/admin/artist')
            })
            .catch(function(err){
                res.send(err)
            })

    }
    static updateArtist(req, res){
        let id = req.params.id
        Artist.findAll({
            where: {
                id:id
            },
            include: Song
        })
            .then(function(artist){
                // res.send(artist)
                res.render('./admin/updateArtist.ejs', {artist})
            })
            .catch(function(err){
                res.send(err)
            })
    }
    static updateArtistPost(req, res){
        let id = req.params.id
        let obj = {
            name: req.body.name,
            label: req.body.label
        }
        console.log(obj, "<<<<<");
        Artist.update(obj, {
            where: {
                id:id
            }
        })
            .then(function(updatedArtist){
                res.redirect('/admin/artist')
            })
            .catch(function(err){
                res.send(err)
            })
    }
    static deleteArtist(req, res){
        let id = req.params.id
        Artist.destroy({
            where :
            {id : id}
        })
            .then(function(status){
                res.redirect('/admin/artist')
            })
            .catch(function(err){
                res.send(err)
            })
    }
}

module.exports = Controller