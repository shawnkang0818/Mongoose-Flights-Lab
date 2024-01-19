import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flghts
router.get('/', flightsCtrl.index)
// GET localhost:3000/flghts/new
router.get('/new', flightsCtrl.new)
//Get localhost:3000/flghts/:flightId
router.get('/:flightId', flightsCtrl.show)
//Get localhost:3000/flghts/:flightId/edit
router.get('/:flightId/edit', flightsCtrl.edit)
// GET localhost:3000/flghts/
router.post('/', flightsCtrl.create)
// POST localhost:3000/flghts/:flightId/tickets
router.post('/:flightId/tickets', flightsCtrl.createTicket)
//POST localhost:3000/flghts/:flightId/meals
router.post('/:flightId/meals', flightsCtrl.addToCast)
// DELETE localhost:3000/flghts/:flightId
router.delete('/:flightId', flightsCtrl.delete)
//Get localhost:3000/flghts/:flightId
router.put('/:flightId', flightsCtrl.update)

export { 
  router
}
