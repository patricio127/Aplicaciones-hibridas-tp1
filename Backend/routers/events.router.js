import express from 'express'
import controller from '../controllers/events.controller.js'
import { adminValidator } from '../middleware/adminValidator.js'
import { tokenValidator } from '../middleware/tokenValidator.js'

const router = express.Router()

// TODO add adminValidator for some routes (remove, edit, create)
router.get('/', [tokenValidator], controller.getAll)
router.get('/:id', [tokenValidator], controller.get)
router.delete('/:id', [tokenValidator, adminValidator], controller.remove)
router.patch('/:id', [tokenValidator, adminValidator], controller.update)
router.post('/', [tokenValidator, adminValidator], controller.create)

export default router