import Firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDGBrYLSjvkRvUQXcqPMv184Yc1Un1rmqs",
  authDomain: "minaseauth.firebaseapp.com",
  databaseURL: "https://minaseauth.firebaseio.com",
  storageBucket: "minaseauth.appspot.com",
  messagingSenderId: "783980969875"
};

Firebase.initializeApp(config);

export default Firebase;
