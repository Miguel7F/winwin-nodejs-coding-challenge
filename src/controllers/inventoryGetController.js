import Product from '../models/product.js'

const inventoryGetController = async () => {
  const productsList = await Product.find({}, 'name price description stock')

  return productsList
}

export default inventoryGetController
