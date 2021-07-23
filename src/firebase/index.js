import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";

import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyDBOkobdu-bmIrKFaYtn08CBXl_uQN78OY",
    authDomain: "wf3-commerce.firebaseapp.com",
    projectId: "wf3-commerce",
    storageBucket: "wf3-commerce.appspot.com",
    messagingSenderId: "371927705243",
    appId: "1:371927705243:web:45346a6457b324327b483e"
  })

const auth = firebase.auth()
const db = firebase.firestore()


//authentification

  const loginWithGoogle = async(history) => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
        const result = await auth.signInWithPopup(provider)
        const { additionalUserInfo } = result
        const {displayName, email, uid } = result.user
        // console.log(result.additionalUserInfo.profile.family_name)
        // console.log(result.additionalUserInfo.profile.given_name)
        // console.log(result.additionalUserInfo.profile.email)
        await db.collection('users').doc(uid).set({
          firstname: additionalUserInfo.profile.given_name,
          lastname: additionalUserInfo.profile.family_name,
          // firstname: displayName.split(' ')[0],
          // lastname: displayName.split(' ')[1],
          id: uid, 
          email
        })

        history.push('/')


    } catch (error) {
        console.error(error)
    }
  }

  const register = async (user) => {
    // try {
    //   await auth.createUserWithEmailAndPassword(user.email, user.password)
    // } catch (error) {
    //   console.error(error)
    // }
    const {firstname, lastname, email, password, admin} = user

      try {
        await db.collection('users').add({firstname, lastname, email, admin})

        await auth.createUserWithEmailAndPassword(email, password)

    } catch (error) {
        console.error(error.message)
    }

  }

  const loginWithEmail = async (user) => {
    try {
      await auth.signInWithEmailAndPassword(user.email, user.password)
    } catch (error) {
      console.error(error)
    }

  }

  //database

  const getItems = async () => {
    const list = []
    try {
      const result = await db.collection('items').get()
      result.forEach(doc => list.push(doc.data()))
      return list
    } catch (error) {
      console.error(error)
    }
  }

  export { register, loginWithEmail, loginWithGoogle, auth, getItems, db }