import orderPostController from '../controllers/orderPostController.js'
const orderPostHandler = async (req, res) => {
  try {
    const orderData = req.body
    const orderList = await orderPostController(orderData)
    res.status(200).send(orderList)
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error })
  }
}
export default orderPostHandler
