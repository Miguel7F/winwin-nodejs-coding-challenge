import { Schema, model } from 'mongoose'
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    default: 0
  }
},
{ timestamps: true })
const Product = model('product', productSchema)
export default Product
