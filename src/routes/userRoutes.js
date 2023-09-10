import registerPostHandler from '../handlers/registerPostHandler.js'

import { Router } from 'express'
const userRoutes = Router()

userRoutes.post('/register', registerPostHandler)

export default userRoutes
