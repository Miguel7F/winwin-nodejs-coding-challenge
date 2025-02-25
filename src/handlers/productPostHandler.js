import productPostController from '../controllers/productPostController.js'
const productPostHandler = async (req, res) => {
  try {
    const productData = req.body
    const { userId } = req

    const productList = await productPostController(productData, userId)
    res.status(200).send(productList)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
export default productPostHandler
