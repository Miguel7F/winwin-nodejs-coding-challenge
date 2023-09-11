import productGetHandler from '../handlers/productGetHandler.js'
import productPostHandler from '../handlers/productPostHandler.js'
import validateProduct from '../middlewares/validateProduct.js'
import tokenValidation from '../middlewares/tokenValidation.js'

import { Router } from 'express'
const productRoutes = Router()

productRoutes.get('/', tokenValidation, productGetHandler)
productRoutes.post('/', tokenValidation, validateProduct, productPostHandler)
// productRoutes.put('/')
// productRoutes.delete('/')

export default productRoutes
