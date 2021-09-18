import express from 'express'
import testimonioAPIRouter from './routers/testimoniosAPIRouter.js'
import router from './routers/router.js'
const app = express()

app.set('views', './views') 
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use('/api/testimonios', testimonioAPIRouter) // API REST

app.use('/', router) // Pagina Web

app.listen(80, function () {
    console.log("Server ON!")
})