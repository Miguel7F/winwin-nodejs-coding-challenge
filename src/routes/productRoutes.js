import productGetHandler from '../handlers/productGetHandler.js'
import productPutHandler from '../handlers/productPutHandler.js'
import inventoryGetHandler from '../handlers/inventoryGetHandler.js'
import productPostHandler from '../handlers/productPostHandler.js'
import validateProduct from '../middlewares/validateProduct.js'
import tokenValidation from '../middlewares/tokenValidation.js'

import { Router } from 'express'
const productRoutes = Router()

productRoutes.get('/', tokenValidation, productGetHandler)
productRoutes.get('/inventory', tokenValidation, inventoryGetHandler)
productRoutes.post('/', tokenValidation, validateProduct, productPostHandler)
productRoutes.put('/', tokenValidation, productPutHandler)
// productRoutes.delete('/')

export default productRoutes
