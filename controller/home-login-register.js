const {Song, Artist, User} = require('../models')
const bcrypt = require('bcryptjs')

class Controller {

    static home(req, res){
        res.render('home')
    }
    static login(req, res){
        res.render('login')
    }
    static loginPost(req, res){
        User.findOne({
            where: {
                username : req.body.username
            }
        })
            .then(function(user){
                if (user) {
                    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
                    if (isPasswordValid) {
                        req.session.userId = user.id
                        req.session.username = user.username
                        res.redirect('/')
                    }
                    else{
                        res.send('Username or Password invalid')
                    }
                }
                else {
                    res.send('Username or Password invalid')
                }
            })
            .catch(function (err) {
                res.send(err)
            })
    }
    static register(req, res){
        res.render('register')
    }
    static registerPost(req, res){
        const obj = {
            name: req.body.name,
            password: req.body.password,
            username: req.body.username
        }
        console.log(obj);
        User.create(obj)
            .then(function(status){
                res.redirect('/login')
            })
            .catch(function(err){
                res.send(err)
            })
    }

    static logout(req, res){
        
        delete req.session.userId
        delete req.session.username
        res.redirect('/login')
    }
}

module.exports = Controller