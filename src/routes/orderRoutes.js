import orderGetHandler from '../handlers/orderGetHandler.js'
import orderPostHandler from '../handlers/orderPostHandler.js'
import { Router } from 'express'
const orderRoutes = Router()

orderRoutes.get('/', orderGetHandler)
orderRoutes.post('/', orderPostHandler)
// orderRoutes.put('/')
// orderRoutes.delete('/')

export default orderRoutes
