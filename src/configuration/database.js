import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const DB_PASSWORD = process.env.DB_PASSWORD
const DB_CLUSTER = process.env.DB_CLUSTER
const DB_USER = process.env.DB_USER
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.kaegzcw.mongodb.net/${DB_USER}?retryWrites=true&w=majority`

const database = async () => {
  return await mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Database connected')
    })
    .catch((error) => {
      console.error('Error connecting database: ', error)
      throw Error(error)
    })
    .finally(() => {
      mongoose.connection.close()
    })
}
export default database
