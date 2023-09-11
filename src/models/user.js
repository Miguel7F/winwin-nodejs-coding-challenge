import { Schema, model } from 'mongoose'
const userSchema = new Schema({
  name: {
    type: String,
    uppercase: true,
    trim: true,
    required: true
  },
  role: {
    type: String,
    lowercase: true,
    trim: true,
    enum: ['buyer', 'seller', 'admin'],
    default: 'buyer'
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
      message: 'The email address is not valid.'
    }
  },
  passwordHash: {
    type: String,
    required: true,
    minlength: 6
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'product'
  }]
},
{ timestamps: true })

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = model('user', userSchema)
export default User
