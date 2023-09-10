import Product from '../models/product.js'

const productGetController = async () => {
  const findProduct = await Product.find({})
  return findProduct
}

export default productGetController
