import  firebase from "firebase/app"


export const config = {
    apiKey: "AIzaSyARCSenexXmMO5Mup5EpbgxwbuMckbt67Q",
    authDomain: "movielist-f7806.firebaseapp.com",
    databaseURL: "https://movielist-f7806-default-rtdb.firebaseio.com",
    projectId: "movielist-f7806",
    storageBucket: "movielist-f7806.appspot.com",
    messagingSenderId: "159586823743",
    appId: "1:159586823743:web:39fe7711a863b4d913d28a"
  };
firebase.initializeApp(config);
export default firebase