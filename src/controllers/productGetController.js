import User from '../models/user.js'

const productGetController = async (userId) => {
  const user = await User.findById(userId, 'role products').populate('products')
  if (!user.role) throw Error('There is an error with this user. Contact administrator')
  if (user.role !== 'seller') throw Error('This user has no products assigned')

  return user.products
}

export default productGetController
