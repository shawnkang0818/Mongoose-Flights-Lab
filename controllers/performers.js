import { Performer } from '../models/performer.js'

function newPerformer(req, res) {
  Performer.find({}).sort('name')
  .then(performers => {
    res.render('performers/new', {
      title: 'Add Performer',
      performers: performers,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/movies")
  })
}

function create(req, res){
  Performer.create(req.body)
  .then(performer => {
    res.redirect('/performers/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/perfomers/new")
  })
}

export {
  newPerformer as new,
  create

}