import { Schema, model } from 'mongoose'
const orderSchema = new Schema({
  status: {
    type: String,
    enum: ['pending', 'purchase', 'canceled'],
    default: 'pending'
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]

},
{ timestamps: true })
const Order = model('order', orderSchema)
export default Order
