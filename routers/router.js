import express from 'express'
import controller from '../controllers/homeController.js'

const router = express.Router()


router.get('/agregar-testimonio', controller.testimonioCrearForm)
router.post('/agregar-testimonio', controller.crearTestimonio)
router.get('/', controller.home)

export default router