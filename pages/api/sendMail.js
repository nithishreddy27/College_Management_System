// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;
    console.log(to)
    // Create a Nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
    //   host: 'gmail', // Replace with your SMTP host
    //   port: 587, // Replace with your SMTP port
    //   secure: false, // Set to true if your SMTP port requires a secure connection
    service: 'gmail',
      auth: {
        user: 'nithishreddy0627@gmail.com', // Replace with your email address
        pass: 'Nithish@2002', // Replace with your email password or API key
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: 'nithishreddy9848@gmail.com', // Replace with your email address
        to,
        subject,
        text,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'An error occurred while sending the email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
