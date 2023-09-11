import inventoryGetController from '../controllers/inventoryGetController.js'
const inventoryGetHandler = async (req, res) => {
  try {
    const productList = await inventoryGetController()
    res.status(200).send(productList)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
export default inventoryGetHandler
