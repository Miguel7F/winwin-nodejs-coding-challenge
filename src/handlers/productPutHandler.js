import productPutController from '../controllers/productPutController.js'
const productPutHandler = async (req, res) => {
  try {
    const productData = req.body
    const { userId } = req
    const updatedProduct = await productPutController(productData, userId)
    res.status(200).send(updatedProduct)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
export default productPutHandler
