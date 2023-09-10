import loginPostController from '../controllers/loginGetController.js'
const loginGetHandler = async (req, res) => {
  try {
    const infoUser = req.body
    const confirmedUser = await loginPostController(infoUser)
    res.status(201).send(confirmedUser)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
export default loginGetHandler
