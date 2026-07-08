import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
}))
app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, destination, travelers, message } = req.body

  if (!name || !email || !destination || !travelers) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const htmlContent = `
    <h2>Nouvelle demande de contact - Golden Morocco Voyage</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nom</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Destination</td><td style="padding:8px;border:1px solid #ddd;">${destination}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Voyageurs</td><td style="padding:8px;border:1px solid #ddd;">${travelers}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message || 'Aucun message'}</td></tr>
    </table>
  `

  try {
    await resend.emails.send({
      from: 'Golden Morocco Voyage <contact@goldenmoroccovoyage.com>',
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande: ${name} - ${destination}`,
      html: htmlContent,
    })

    res.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ error: 'Failed to send email', detail: error.message })
  }
})

// Booking form endpoint (from trip detail page)
app.post('/api/booking', async (req, res) => {
  const { name, email, phone, travelers, date, destination } = req.body

  if (!name || !email || !travelers || !date) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const htmlContent = `
    <h2>Nouvelle réservation - Golden Morocco Voyage</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nom</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Téléphone</td><td style="padding:8px;border:1px solid #ddd;">${phone || 'Non renseigné'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Destination</td><td style="padding:8px;border:1px solid #ddd;">${destination}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Voyageurs</td><td style="padding:8px;border:1px solid #ddd;">${travelers}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Date</td><td style="padding:8px;border:1px solid #ddd;">${date}</td></tr>
    </table>
  `

  try {
    await resend.emails.send({
      from: 'Golden Morocco Voyage <contact@goldenmoroccovoyage.com>',
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Réservation: ${name} - ${destination} (${date})`,
      html: htmlContent,
    })

    res.json({ success: true, message: 'Booking email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ error: 'Failed to send email', detail: error.message })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})
