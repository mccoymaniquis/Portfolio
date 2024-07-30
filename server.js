import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import formData from 'form-data'
import Mailgun from 'mailgun.js'

dotenv.config() // For loading environment variables from a .env file

const app = express()
const port = process.env.PORT || 8080

// Configure CORS to allow requests from specific origin
app.use(
  cors({
    origin: 'http://localhost:3000', // Update this to your frontend origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
)

app.use(bodyParser.json())

const mailgun = new Mailgun(formData)

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
  url: 'https://api.mailgun.net', // Default base URL
})

app.post('/send-email', (req, res) => {
  const { fullname, email, message } = req.body

  if (!fullname || !email || !message) {
    return res.status(400).send('Missing required fields')
  }

  const data = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${fullname}`,
    text: message,
  }

  mg.messages
    .create(process.env.MAILGUN_DOMAIN, data)
    .then((msg) => {
      console.log('Email sent successfully:', msg)
      res.status(200).send('Email sent successfully')
    })
    .catch((err) => {
      console.error('Error sending email:', err)

      if (err.message.includes('Free accounts are for test purposes only')) {
        res.status(403).send({
          error:
            'Unauthorized recipient. Please add the recipient email to your Mailgun authorized recipients or upgrade your account.',
        })
      } else {
        res.status(500).send({
          error: 'Failed to send email',
          details: err.message,
        })
      }
    })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
