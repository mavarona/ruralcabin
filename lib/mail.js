
const sgMail = require("@sendgrid/mail")

const SG_API_KEY = process.env.SG_API_KEY
const TO_EMAIL = process.env.TO_EMAIL
const FROM_EMAIL = process.env.FROM_EMAIL

sgMail.setApiKey(SG_API_KEY)

export default async function sendMail(req, res) {
    
    const { title, name, email, phone, text } = req.body
    const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: `Información - ${title}`,
        html: `<p><strong>Nombre: </strong>${name}</p>
        <p><strong>email: </strong>${email}</p>
        <p><strong>teléfono: </strong>${phone}</p>     
        <p><strong>mensaje: </strong>${text}</p>`
    }

    try {
        await sgMail.send(msg)
        return {error: false, message: 'ok'}
    } catch (e) {
        return {error: true, message: e.message}
    }

}