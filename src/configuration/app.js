import express from 'express'
import cors from 'cors'
import indexRouter from '../routes/indexRouter.js'
import morgan from 'morgan'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

app.use(indexRouter)
export default app
