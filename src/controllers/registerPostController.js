import User from '../models/user.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

const registerPostController = async ({ email, password, name }) => {
  const saltRounds = 10
  const passwordHash = bcrypt.hashSync(password, saltRounds)
  const newUser = new User({ email, passwordHash, name })
  return await newUser.save()
}

export default registerPostController
