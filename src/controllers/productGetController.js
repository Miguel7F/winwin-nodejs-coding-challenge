import User from '../models/user.js'

const productGetController = async (userID) => {
  const user = await User.findById(userID, 'role products').populate('products')
  if (!user.role) throw Error('There is an error with this user. Contact administrator')
  if (user.role !== 'seller') throw Error('This user has no products assigned')

  return user.products
}

export default productGetController
