import express from 'express'
import controller from '../controllers/testimoniosAPIController.js'

const router = express.Router()

router.get('/', controller.getAll)
router.delete('/:id', controller.remove)
router.patch('/:id', controller.update)

export default router