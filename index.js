import database from './src/configuration/database.js'
import app from './src/configuration/app.js'
import { config } from 'dotenv'
config()

const PORT = process.env.PORT || 3001

try {
  database()
  app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`)
  })
} catch (error) {
  console.log(error)
}
