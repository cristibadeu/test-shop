import firebase from "@firebase/app-compat";
import "firebase/compat/firestore";
import "firebase/compat/auth";
//import { signInWithCredential } from "firebase/auth";

const config = {
  apiKey: "AIzaSyAU8ZwKMI_OuOsXTS2DTf99BO_34J19KKU",
  authDomain: "test-db-36067.firebaseapp.com",
  projectId: "test-db-36067",
  storageBucket: "test-db-36067.appspot.com",
  messagingSenderId: "676012143593",
  appId: "1:676012143593:web:a50f6990406fae68415178",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('error creating user', error.message)
    }
  }

  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
