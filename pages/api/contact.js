const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message } = req.body

  const clientEmail = {
    to: email,
    from: 'Elliott@valtechcreative.com',
    subject: `Submission was successful!`,
    text: message,
    html: `
      <p>Thank you for contacting us! We will be in touch shortly.</p>
      <p>Your message: ${message}</p>
    `
  }

  const userEmail = {
    to: 'Elliott@valtechcreative.com',
    from: 'Elliott@valtechcreative.com',
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>New message from Contact Form: ${message}</p>`
  }

  try {
    await sgMail.send(clientEmail)
    await sgMail.send(userEmail)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}