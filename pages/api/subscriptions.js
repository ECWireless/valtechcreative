const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, subscription } = req.body

  const clientEmail = {
    to: email,
    from: 'Elliott@valtechcreative.com',
    subject: `Submission was successful!`,
    html: `
      <p>Thank you for contacting us! A developer will be in touch shortly.</p>
      <p>Your subscription preference: ${subscription}</p>
    `
  }

  const userEmail = {
    to: 'Elliott@valtechcreative.com',
    from: 'Elliott@valtechcreative.com',
    subject: `New Subscription Message From - ${name}`,
    html: `<p>New subscription preference message from ${email}: ${subscription}</p>`
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