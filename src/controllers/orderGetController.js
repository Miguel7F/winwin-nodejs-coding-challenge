import Order from '../models/order.js'

const orderGetController = async (userId) => {
  console.log(userId)
  const orders = await Order.find({ owner: userId }, 'status product quantity orderId').populate('product')
  if (!orders.length) throw Error('No order found for this user')
  return orders
}

export default orderGetController
