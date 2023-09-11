import orderGetController from '../controllers/orderGetController.js'
const orderGetHandler = async (req, res) => {
  try {
    const { userId } = req
    const orderList = await orderGetController(userId)
    res.status(200).send(orderList)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
export default orderGetHandler
