import productGetHandler from '../handlers/productGetHandler.js'
import productPostHandler from '../handlers/productPostHandler.js'
import { Router } from 'express'
const productRoutes = Router()

productRoutes.get('/', productGetHandler)
productRoutes.post('/', productPostHandler)
// productRoutes.put('/')
// productRoutes.delete('/')

export default productRoutes
