import express from 'express'
import cors from 'cors'
import indexRouter from '../routes/indexRouter.js'
import morgan from 'morgan'
const app = express()

const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(indexRouter)

export default app
