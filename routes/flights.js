import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flghts
router.get('/', flightsCtrl.index)
// GET localhost:3000/flghts/new
router.get('/new', flightsCtrl.new)
// GET localhost:3000/flghts/
router.post('/', flightsCtrl.create)

export { 
  router
}
