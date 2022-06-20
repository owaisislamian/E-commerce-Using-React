import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
  apiKey: "AIzaSyBcswkfqplWE5_eeZbsae3em4bFWWOgXPI",
  authDomain: "shop-online-db-10ef0.firebaseapp.com",
  projectId: "shop-online-db-10ef0",
  storageBucket: "shop-online-db-10ef0.appspot.com",
  messagingSenderId: "428453081008",
  appId: "1:428453081008:web:9c164d94fe3aaeeeed3075",
  measurementId: "G-4H0XRGQLZ9"
  };
  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
 

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const addCollectionAndDocuments=async (collectionKey,objectsToAdd)=>{
  const collectioRef=firestore.collection(collectionKey);
 

  const batch=firestore.batch();
  objectsToAdd.forEach(obj =>{
    const newDocRef = collectioRef.doc();
    batch.set(newDocRef,obj);
  });
  return await batch.commit()
};


export const convertCollectionsSnapshotToMap=(collections)=>{
  const transformCollection =collections.docs.map(doc => {
    const {title,items}=doc.data();

    return{
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  });
  return transformCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  } ,{})
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;