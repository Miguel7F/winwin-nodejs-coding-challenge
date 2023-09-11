import { Schema, model } from 'mongoose'
const orderSchema = new Schema({
  status: {
    type: String,
    enum: ['pending', 'purchase', 'canceled'],
    default: 'pending'
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'product'
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  preferenceId: {
    type: String,
    unique: true
  },
  orderId: {
    type: String
    // unique: true
  },
  mercadoPagoOperation: {
    type: String
    // unique: true
  }
},
{ timestamps: true })

orderSchema.set('toJSON', {
  transform: (document, transformedObject) => {
    transformedObject.id = transformedObject._id

    delete transformedObject._id
    delete transformedObject.__v
  }
})

const Order = model('order', orderSchema)
export default Order
