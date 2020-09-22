import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDcSH8sH1OJn8eIYSzczStpNNwS-4Tn20E",
  authDomain: "chat-app-17ed8.firebaseapp.com",
  databaseURL: "https://chat-app-17ed8.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base