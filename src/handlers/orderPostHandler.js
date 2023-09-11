import orderPostController from '../controllers/orderPostController.js'
const orderPostHandler = async (req, res) => {
  try {
    const { productId, quantity } = req.body
    const { userId } = req

    const createdOrder = await orderPostController(productId, quantity, userId)
    res.status(201).send(createdOrder)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
export default orderPostHandler
