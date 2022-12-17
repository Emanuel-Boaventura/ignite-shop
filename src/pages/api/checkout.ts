import { NextApiRequest, NextApiResponse } from 'next';
import { IItem } from '../../hooks/CartContext'
import stripe from '../../lib/stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const lineItens = req.body.cartItens.map((item: IItem) => ({
    price: item.priceId,
    quantity: 1,
  }));

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' })

  if (!lineItens) return res.status(400).json({ error: 'Price not found.' })

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItens
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}