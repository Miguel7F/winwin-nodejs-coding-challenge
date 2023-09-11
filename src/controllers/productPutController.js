import Product from '../models/product.js'
import User from '../models/user.js'

const productPutController = async (productData, userId) => {
  try {
    const user = await User.findById(userId)
    if (!user.role) throw Error('There is an error with this user. Contact administrator')
    if (user.role !== 'seller') throw Error('This user cannot update products')

    if (!productData.id) throw Error('Incorrect or missing product ID')
    const [productFound] = await Product.find({ _id: productData.id, seller: userId }, 'name price description stock seller')
    if (!productFound) throw Error('This user cannot update this product')

    if (productData.name) productFound.name = productData.name
    if (productData.price) productFound.price = productData.price
    if (productData.description) productFound.description = productData.description
    if (productData.stock) productFound.stock = productData.stock

    return await productFound.save()
  } catch (error) {
    throw Error(error)
  }
}

export default productPutController
