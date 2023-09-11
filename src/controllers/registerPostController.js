import User from '../models/user.js'
import { hashSync } from 'bcrypt'

const registerPostController = async ({ email, password, name, role }) => {
  const saltRounds = 10
  const passwordHash = hashSync(password, saltRounds)

  const addUser = {
    name: name.toUpperCase(),
    email: email.toLowerCase(),
    passwordHash
  }

  if (role)addUser.role = role.toLowerCase()

  const newUser = new User(addUser)
  return await newUser.save()
}

export default registerPostController
