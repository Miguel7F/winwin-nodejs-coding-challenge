import registerPostHandler from '../handlers/registerPostHandler.js'
import loginGetHandler from '../handlers/loginGetHandler.js'

import { Router } from 'express'
const userRoutes = Router()

userRoutes.post('/register', registerPostHandler)
userRoutes.get('/login', loginGetHandler)

export default userRoutes
