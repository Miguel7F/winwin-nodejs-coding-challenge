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
  }],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
{ timestamps: true })

orderSchema.set('toJSON', {
  transform: (document, transformedObject) => {
    transformedObject.id = transformedObject._id

    delete transformedObject._id
    delete transformedObject._v
  }
})

const Order = model('order', orderSchema)
export default Order
