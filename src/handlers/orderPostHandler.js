import orderPostController from '../controllers/orderPostController.js'
const orderPostHandler = async (req, res) => {
  try {
    const orderData = req.body
    const orderList = await orderPostController(orderData)
    res.status(200).send(orderList)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
export default orderPostHandler
