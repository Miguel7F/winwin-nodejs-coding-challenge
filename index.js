import database from './configuration/database.js'
import app from './configuration/app.js'
const PORT = process.env.PORT || 3001

database()
.then(()=>{
  console.log('Database connected')
})
.then(() =>{
  app.listen(PORT,()=>{
    console.log(`Server run on: http://localhost:${PORT}`)
  })
}) 
.catch((error)=>{
  console.error('Error to connect: ', error) 
})
