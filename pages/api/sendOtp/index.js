// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYatFDCkjeYLhedLo7eEvjCdVmXtDIfy0",
  authDomain: "provastotp.firebaseapp.com",
  projectId: "provastotp",
  storageBucket: "provastotp.appspot.com",
  messagingSenderId: "401018938367",
  appId: "1:401018938367:web:1be4ef1a2b321c99fa3dca",
  measurementId: "G-ZF8BRCEME4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phoneNumber } = req.body;
    try {
      // Send OTP to the provided phone number
      const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
      });

      const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
      const verificationId = confirmationResult.verificationId;

      res.status(200).json({ verificationId });
    } catch (error) {
      console.error('Error sending OTP:', error);
      res.status(500).json({ error: 'Failed to send OTP' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
