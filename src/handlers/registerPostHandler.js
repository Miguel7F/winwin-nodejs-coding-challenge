import registerPostController from '../controllers/registerPostController.js'
const registerPostHandler = async (req, res) => {
  try {
    const infoUser = req.body
    const confirmedUser = await registerPostController(infoUser)
    res.status(201).send(confirmedUser)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
export default registerPostHandler
