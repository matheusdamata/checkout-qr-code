import { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from 'mercadopago'
import { z as zod } from 'zod'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const createCheckoutSchema = zod.object({
    email: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    price: zod.number(),
    quantity: zod.number(),
  })

  const { lastName, firstName, email, price, quantity } =
    createCheckoutSchema.parse(req.body)

  mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN as string,
  })

  const preference = {
    transaction_amount: price * quantity,
    description: 'Blusa de frio Moletom, modelo @Rocketseat',
    payment_method_id: 'pix',
    installments: 1,
    payer: {
      email,
      first_name: lastName,
      last_name: firstName,
    },
  }
  try {
    const response = await mercadopago.payment.create(preference)

    const status = response.status

    if (status) {
      const qrCode = response.body.point_of_interaction.transaction_data.qr_code

      res.status(201).json({
        code: qrCode,
      })
    }
  } catch (error) {
    res.status(400).json({
      error: 'An error occurred',
      details: error,
    })
  }
}
