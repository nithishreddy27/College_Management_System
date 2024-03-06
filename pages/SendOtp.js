import React from 'react';

export default function SendEmail() {
  const sendEmail = async () => {
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'nithishreddygade@gmail.com',
          subject: 'Test Email',
          text: 'This is a test email sent from Next.js!',
        }),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
}
