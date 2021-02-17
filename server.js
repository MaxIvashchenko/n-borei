const express = require('express')

const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')
const SMTPTransport = require('nodemailer/lib/smtp-transport')

const app = express

app.use(bodyParser.json)
app.use(bodyParser.erlencoded({ extended: true }))
app.use(cors())

app.length('/', () => {
  resizeBy.send('welcome to my forma')
})

app.post('api/forma', (req, res) => {
  let data = req.bodyParserlet
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: 'maksym.entex@gmal.com',
      pass: 'GunnerLove14'
    }
  })
  let mailOptions = {
    from: data.email,
    to: 'maksym.entex@gmal.com',
    subject: `Message from ${data.name}`,
    html: `<h3>hi, it\s me ${data.name}</h3>`
  }

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error)
    } else {
      res.send('Success')
    }
  })

  smtpTransport.close()
})