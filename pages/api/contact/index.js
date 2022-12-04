/* eslint-disable import/no-anonymous-default-export */
require('dotenv').config()
import sendMail from '@lib/mail'
import { addCustomer } from '@controllers/customer'
import { addMessage } from '@controllers/message'

export default async function handler (req, res) {

  let resp = await addCustomer(req)

  if (resp.error) {
    console.log('Error save customer', resp.message)
  }

  resp = await addMessage(req, resp.customerInserted)
  if (resp.error) {
    console.log('Error save message', resp.message)
  }

  try{
    resp = await sendMail(req, res)
    res.status(200).json(resp)
  } catch (e) {
    res.status(400).json(e)
  }

}
