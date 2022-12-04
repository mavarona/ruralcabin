import { loadStripe } from '@stripe/stripe-js'
import { createSession } from '@controllers/stripe'

export async function checkout({lineItems}) {
    let stripePromise = null

    const getStripe = () => {
        if (stripePromise === null) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_PAY)
        }
        return stripePromise
    }

    const stripe = await getStripe()

    createSession(lineItems)
        .then((session) => {

            stripe.redirectToCheckout({
                sessionId: session.id
            })
        })
        .catch(function (error) {
            console.log(error)
    })

}