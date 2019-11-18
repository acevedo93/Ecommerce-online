import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const configFirebase = {
  apiKey: "AIzaSyC2VyK91wK9EQDT5ci8SnFS8oqhU9Se5X4",
  authDomain: "crw-clothing-9ffc9.firebaseapp.com",
  databaseURL: "https://crw-clothing-9ffc9.firebaseio.com",
  projectId: "crw-clothing-9ffc9",
  storageBucket: "crw-clothing-9ffc9.appspot.com",
  messagingSenderId: "1075036907874",
  appId: "1:1075036907874:web:990861c34abed2b3d0643b",
  measurementId: "G-Q04J3TMC6R"
}

firebase.initializeApp(configFirebase)
export const createUserProfileDocument = async (userAuth, additionalData) =>  {
  if( !userAuth ) return ;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,email,createdAt,...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }
  return userRef;

}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account', // google popout
})

export const signInWithGoogle = () => auth.signInWithPopup(provider).then(res => console.log(res));

export default firebase;