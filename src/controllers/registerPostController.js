import User from '../models/user.js'
import { hashSync } from 'bcrypt'

const registerPostController = async ({ email, password, name }) => {
  const saltRounds = 10
  const passwordHash = hashSync(password, saltRounds)
  const newUser = new User({ email, passwordHash, name })
  return await newUser.save()
}

export default registerPostController
