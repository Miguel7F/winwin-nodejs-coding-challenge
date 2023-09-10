import orderGetController from '../controllers/orderGetController.js'
const orderGetHandler = async (req, res) => {
  try {
    const orderList = await orderGetController()
    res.status(200).send(orderList)
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error })
  }
}
export default orderGetHandler
