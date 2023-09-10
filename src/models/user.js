import { Schema, model } from 'mongoose'
const userSchema = new Schema({
  role: {
    type: String,
    enum: ['buyer', 'seller', 'admin'],
    default: 'user'
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (value) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return emailRegex.test(value)
      },
      message: 'La dirección de correo electrónico no es válida.'
    }
  },
  passwordHash: {
    type: String,
    required: true
  }
},
{ timestamps: true })

userSchema.set('toJson', {
  transform: (document, transformedObject) => {
    transformedObject.id = transformedObject._id

    delete transformedObject._id
    delete transformedObject._v
    delete transformedObject.password
  }
})

const User = model('user', userSchema)
export default User
