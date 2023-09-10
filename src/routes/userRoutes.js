import registerPostHandler from '../handlers/registerPostHandler.js'
import loginGetHandler from '../handlers/loginGetHandler.js'
import registerValidation from '../middlewares/registerValidation.js'
import { Router } from 'express'
const userRoutes = Router()

userRoutes.post('/register', registerValidation, registerPostHandler)
userRoutes.get('/login', loginGetHandler)

export default userRoutes
