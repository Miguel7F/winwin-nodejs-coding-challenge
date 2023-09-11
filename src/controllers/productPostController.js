import Product from '../models/product.js'
import User from '../models/user.js'

const productPostController = async (productData, userId) => {
  try {
    const user = await User.findById(userId)
    if (!user.role) throw Error('There is an error with this user. Contact administrator')

    if (user.role !== 'seller') throw Error('This user cannot add products')
    const newProduct = new Product({ ...productData, seller: userId })
    const createdProduct = await newProduct.save()

    user.products.push(createdProduct._id)
    await user.save()

    return createdProduct
  } catch (error) {
    throw Error(error)
  }
}

export default productPostController
