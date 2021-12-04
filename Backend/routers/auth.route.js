import express from 'express'
import authcontroller from '../controllers/auth.controller.js'
import { tokenValidator } from '../middleware/tokenValidator.js'

const router = express.Router()



router.post('/register', authcontroller.register)
router.post('/login', authcontroller.login)
router.get('/login',[tokenValidator], authcontroller.getLogin)

router.get('/',[tokenValidator], authcontroller.findAll)

export default router