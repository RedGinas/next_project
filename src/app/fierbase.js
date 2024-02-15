// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBUZ8mNHmLsegJqho0coxI2IEq2dlArkss',
  authDomain: 'next-back-4e0d3.firebaseapp.com',
  projectId: 'next-back-4e0d3',
  storageBucket: 'next-back-4e0d3.appspot.com',
  messagingSenderId: '672855008645',
  appId: '1:672855008645:web:5b48e31b5d432d151290ec',
  measurementId: 'G-EW4CXS5EWN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
