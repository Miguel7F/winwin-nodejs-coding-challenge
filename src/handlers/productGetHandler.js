import productGetController from '../controllers/productGetController.js'
const productGetHandler = async (req, res) => {
  try {
    const productList = await productGetController()
    res.status(200).send(productList)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
export default productGetHandler
