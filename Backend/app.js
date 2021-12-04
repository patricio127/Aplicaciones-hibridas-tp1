import express from 'express'
import eventsRouter from './routers/events.router.js'
import router from './routers/router.js'
import authRouter from './routers/auth.router.js'
import cors from 'cors'


const app = express()


app.set('views', './views') 
app.set('view engine', 'ejs')
app.use(cors())

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use('/', router) // Pagina Web
app.use('/usuarios', authRouter)
app.use('/eventos', eventsRouter)

app.listen(9000, function () {
    console.log("Server ON!")
})