import orderGetHandler from '../handlers/orderGetHandler.js'
import orderPostHandler from '../handlers/orderPostHandler.js'
import tokenValidation from '../middlewares/tokenValidation.js'

import { Router } from 'express'
const orderRoutes = Router()

orderRoutes.get('/', tokenValidation, orderGetHandler)
orderRoutes.post('/', tokenValidation, orderPostHandler)
// orderRoutes.put('/')
// orderRoutes.delete('/')

export default orderRoutes
