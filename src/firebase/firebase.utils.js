import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB-cyZ-j7Dfm2GZoV89M1-OWg89GSr__Pc",
    authDomain: "crwn-db-9c0ec.firebaseapp.com",
    projectId: "crwn-db-9c0ec",
    storageBucket: "crwn-db-9c0ec.appspot.com",
    messagingSenderId: "44910399786",
    appId: "1:44910399786:web:35093c7659e2505aa04e53"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
  
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
      } catch (error) {
        console.log('error creating user ', error.message);
      }
    }
    return userRef;
};
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;