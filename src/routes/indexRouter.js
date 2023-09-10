import productRoutes from './productRoutes.js'
import orderRoutes from './orderRoutes.js'
import { Router } from 'express'
const indexRouter = Router()

indexRouter.use('/product', productRoutes)
indexRouter.use('/order', orderRoutes)

export default indexRouter
