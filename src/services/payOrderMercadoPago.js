import mercadopago from 'mercadopago'
import dotenv from 'dotenv'
dotenv.config()
const { PROD_ACCESS_TOKEN } = process.env
const URL_NGROK = 'https://cb47-179-6-14-41.ngrok.io'

const payOrderMercadoPago = async (name, price, quantity) => {
  mercadopago.configure({ access_token: PROD_ACCESS_TOKEN })

  const preference = {
    items: [
      {
        title: name,
        unit_price: price,
        currency_id: 'USD',
        quantity
      }
    ],
    notification_url: `${URL_NGROK}/order/webhook`
    // back_urls: {
    //   success: '',
    //   pending: '',
    //   failure: ''
    // },
    // auto_return: 'approved'
  }

  return await mercadopago.preferences.create(preference)
    .then((response) => {
      return {
        initPoint: response.body.init_point,
        id: response.body.id
      }
    })
    .catch((error) => {
      console.log(error)
      throw Error({ message: 'Error creating payment preferences' })
    })
}

export default payOrderMercadoPago
