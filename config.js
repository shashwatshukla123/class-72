 import firebase from 'firebase'
 require ('@firebase/firestore')
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAqVaSjpoNTfruW1jmuVZpeOK5DA0LgkSM",
    authDomain: "liberary-app.firebaseapp.com",
    projectId: "liberary-app",
    storageBucket: "liberary-app.appspot.com",
    messagingSenderId: "687912706977",
    appId: "1:687912706977:web:027151538ef6f26ee361e0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
