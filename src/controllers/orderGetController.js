import Order from '../models/order.js'

const orderGetController = async () => {
  const findOrder = await Order.find({})
  return findOrder
}

export default orderGetController
