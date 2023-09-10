import User from '../models/user.js'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

const loginGetController = async ({ email, password }) => {
  const userConfirmed = await User.findOne({ email })

  const passwordCorrect = userConfirmed === null
    ? false
    : await compare(password, userConfirmed.passwordHash)

  if (!(userConfirmed && passwordCorrect)) throw Error('invalid user or password')

  const dataToken = {
    id: userConfirmed._id,
    email: userConfirmed.email
  }

  const token = jwt.sign(
    dataToken,
    JWT_SECRET,
    { expiresIn: 60 * 2 })

  return {
    name: userConfirmed.name,
    email: userConfirmed.email,
    role: userConfirmed.role,
    token
  }
}

export default loginGetController
