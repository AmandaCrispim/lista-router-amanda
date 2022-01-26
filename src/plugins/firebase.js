import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCNZxj_XGjHXXuQT5-rE6PGDe3PTmuUSJQ",
    authDomain: "todo-list-vue-amanda.firebaseapp.com",
    projectId: "todo-list-vue-amanda",
    storageBucket: "todo-list-vue-amanda.appspot.com",
    messagingSenderId: "801812902151",
    appId: "1:801812902151:web:152564a525f1e2bbc355a2"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}