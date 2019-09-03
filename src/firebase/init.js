import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAGdNMf59c02jA2os5jLT7rLLrpVCDABkU',
  authDomain: 'udemy-ninja-chat-45439.firebaseapp.com',
  databaseURL: 'https://udemy-ninja-chat-45439.firebaseio.com',
  projectId: 'udemy-ninja-chat-45439',
  storageBucket: '',
  messagingSenderId: '658445664374',
  appId: '1:658445664374:web:200025f392fe62b4'
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
