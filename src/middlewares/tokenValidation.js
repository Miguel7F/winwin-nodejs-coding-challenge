import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET
const tokenError = { error: 'Authorization or Token invalid' }

const tokenValidation = async (req, res, next) => {
  const authorization = req.get('authorization')
  try {
    const [authSchema, token] = authorization.split(' ')

    if (!authSchema || authSchema.toLowerCase() !== 'bearer') throw Error('Schema problems')
    if (!token) throw Error('Token no exists')

    const { id } = jwt.verify(token, JWT_SECRET)
    if (!id) throw Error('ID no exists')

    req.userId = id
    next()
  } catch (error) {
    res.status(401).json(tokenError)
  }
}
export default tokenValidation
