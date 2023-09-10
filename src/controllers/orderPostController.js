import Order from '../models/order.js'

const orderPostHandler = async (attributes) => {
  const newOrder = new Order(attributes)
  return await newOrder.save()
}

export default orderPostHandler
