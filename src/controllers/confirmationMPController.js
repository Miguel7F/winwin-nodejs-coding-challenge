import mercadopago from 'mercadopago'
import Order from '../models/order.js'

import dotenv from 'dotenv'
dotenv.config()
const { PROD_ACCESS_TOKEN } = process.env

const confirmationMPController = async (id, topic) => {
  try {
    mercadopago.configurations.setAccessToken(PROD_ACCESS_TOKEN)
    if (topic === 'merchant_order') {
      // el id en este caso corresponde al Order_ID en Mercado Pago. Se realiza la búsqueda en MP
      const { response } = await mercadopago.merchant_orders.findById(id)
      await Order.findOneAndUpdate(
        { preferenceId: response.preference_id },
        {
          orderId: id,
          status: response.order_status === 'paid' ? 'purchase' : 'pending'
        }
        // { new: true }
      )
    }

    if (topic === 'payment') {
      // el id en este caso corresponde al MercadoPago_operation de Mercado Pago. Se realiza la búsqueda en MP
      const { response } = await mercadopago.payment.findById(id)
      await Order.findOneAndUpdate(
        { orderId: response.order.id },
        { mercadoPagoOperation: response.id }
        // { new: true }
      )
    }
  } catch (error) {
    throw Error('Something goes wrong')
  }
}
export default confirmationMPController
