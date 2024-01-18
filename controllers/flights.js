import { Flight } from "../models/flight.js"

function newFlight(req,res){
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req, res){
  if (req.body.cast) {
		// remove whitespace next to commas
    req.body.cast = req.body.cast.split(', ')
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
    flights: flights,
    title: 'All Flights'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res){
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/show', {
      flight: flight,
      title: 'Flight Detail'
    }) 
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newFlight as new,
  create,
  index,
  show
}