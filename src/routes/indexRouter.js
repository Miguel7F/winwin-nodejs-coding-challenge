import productRoutes from './productRoutes.js'
import orderRoutes from './orderRoutes.js'
import userRoutes from './userRoutes.js'

import { Router } from 'express'
const indexRouter = Router()

indexRouter.use('/product', productRoutes)
indexRouter.use('/order', orderRoutes)
indexRouter.use('/user', userRoutes)

export default indexRouter
