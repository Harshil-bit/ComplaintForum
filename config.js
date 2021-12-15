import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyCvmPvfo2m_XfRFx56q2RZddLiRX3acKdY",
  authDomain: "complaint-forum-4bef7.firebaseapp.com",
  projectId: "complaint-forum-4bef7",
  storageBucket: "complaint-forum-4bef7.appspot.com",
  messagingSenderId: "495335066398",
  appId: "1:495335066398:web:b742e7b51a774331bad70f"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

