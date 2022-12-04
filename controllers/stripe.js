import axios from 'axios'

export function createSession(lineItems) {
    
    return new Promise((resolve, reject) => {

        var data =  new URLSearchParams({
            "payment_method_types[]":"card",
            "line_items[0][price]":lineItems[0].price,
            "line_items[0][quantity]":lineItems[0].quantity,
            "mode":"payment",
            "allow_promotion_codes":true,
            "success_url":`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
            "cancel_url":`${window.location.origin}?wrong=true`
        })

        var config = {
            method: 'post',
            url: process.env.NEXT_PUBLIC_STRIPE_API_URL,
            headers: { 
              'Authorization': `Bearer sk_test_51L6vSLBRLTPNJifOOjQnLUyIY9KkjvcJcSOJp4Z7zLJB998NJeFYFi1NrGSjhBAkiFZnemft9J4TUuSdxyGrzAEA00CAysmO85`, 
              'Content-Type': 'application/x-www-form-urlencoded', 
              'accept': '*/*'
            },
            data
        }

        axios(config)
            .then((session) => {
                resolve(session.data)
            })
            .catch( (error) => {
                reject(error)
            })

    })

}

export function getSession(session_id) {
    
    return new Promise((resolve, reject) => {

        var config = {
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_STRIPE_API_URL}/${session_id}`,
            headers: { 
              'Authorization': `Bearer sk_test_51L6vSLBRLTPNJifOOjQnLUyIY9KkjvcJcSOJp4Z7zLJB998NJeFYFi1NrGSjhBAkiFZnemft9J4TUuSdxyGrzAEA00CAysmO85`, 
              'Content-Type': 'application/json', 
              'accept': '*/*'
            }
        }

        axios(config)
            .then((session) => {
                resolve(session.data)
            })
            .catch( (error) => {
                reject(error)
            })

    })

}