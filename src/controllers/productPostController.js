import Product from '../models/product.js'

const productPostController = async (productData) => {
  const newProduct = new Product(productData)
  return await newProduct.save()
}

export default productPostController
