import Product from '../models/product.js'

const productPostHandler = async (attributes) => {
  const newProduct = new Product(attributes)
  return await newProduct.save()
}

export default productPostHandler
