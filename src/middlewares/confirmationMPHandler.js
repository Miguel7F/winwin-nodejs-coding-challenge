import confirmationMPController from '../controllers/confirmationMPController.js'
const confirmationMPHandler = async (req, res) => {
  try {
    const { id, topic } = req.query
    const updateOrder = await confirmationMPController(id, topic)
    res.status(200).send(updateOrder)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
export default confirmationMPHandler
