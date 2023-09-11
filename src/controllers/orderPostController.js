import Order from '../models/order.js'
import User from '../models/user.js'
import Product from '../models/product.js'
import payOrderMercadoPago from '../services/payOrderMercadoPago.js'

const orderPostHandler = async (productId, quantity, userId) => {
  try {
    const user = await User.findById(userId, 'role')
    if (!user.role) throw Error('There is an error with this user. Contact administrator')
    if (user.role === 'admin') throw Error('This user cannot buy any product')

    const product = await Product.findById(productId, 'name price stock seller')
    if (JSON.stringify(product.seller) === JSON.stringify(userId)) throw Error('A seller cannot buy his own products')

    if (quantity > product.stock) throw Error(`You can only buy up to ${product.stock} units of ${product.name}`)

    const { initPoint, id } = await payOrderMercadoPago(product.name, product.price, quantity)

    const newOrder = new Order({
      product: productId,
      quantity,
      owner: userId,
      seller: product.seller,
      preferenceId: id
    })
    await newOrder.save()
    return `Please make your payment with the following link: ${initPoint}`
  } catch (error) {
    throw Error(error)
  }
}

export default orderPostHandler
