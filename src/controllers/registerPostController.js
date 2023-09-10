import User from '../models/user.js'
import { hashSync } from 'bcrypt'

const registerPostController = async ({ email, password, name, role }) => {
  const saltRounds = 10
  const passwordHash = hashSync(password, saltRounds)
  const newUser = new User({ email: email.toLowerCase(), passwordHash, name: name.toUpperCase(), role: role.toLowerCase() })
  return await newUser.save()
}

export default registerPostController
