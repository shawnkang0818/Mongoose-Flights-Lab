import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

// GET localhost:3000/meals/new
router.get('/new', mealsCtrl.new)
// post localhost:3000/meals/new
router.post('/',mealsCtrl.create)
export {
  router
}