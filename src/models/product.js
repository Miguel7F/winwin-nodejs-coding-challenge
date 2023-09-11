import { Schema, model } from 'mongoose'
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    minlength: 3
  },
  price: {
    type: Number,
    required: true,
    min: 10
  },
  description: {
    type: String,
    required: true,
    minlength: 6
  },
  stock: {
    type: Number,
    required: true,
    default: 1
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
{ timestamps: true })

productSchema.set('toJSON', {
  transform: (document, transformedObject) => {
    transformedObject.id = transformedObject._id

    delete transformedObject._id
    delete transformedObject._v
  }
})

const Product = model('product', productSchema)
export default Product
