import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'apiKey',
    pass: 'Friendly03!!',
  },
})

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
})
transporter.verify((error, success) => {
  if (error) {
    console.error('Error:', error)
    console.log(process.env.EMAIL_USER)
    console.log(process.env.EMAIL_PASS)
  } else {
    console.log('Server is ready to take our messages')
  }
})
