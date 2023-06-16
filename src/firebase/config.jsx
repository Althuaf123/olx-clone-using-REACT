import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB0D71mDby4mzXSfAMkTG71sZtniNHcBX0",
    authDomain: "olx-clone-using-react-library.firebaseapp.com",
    projectId: "olx-clone-using-react-library",
    storageBucket: "olx-clone-using-react-library.appspot.com",
    messagingSenderId: "240614435111",
    appId: "1:240614435111:web:01bd5980f937da792c6102",
    measurementId: "G-JVEWBYVJD1"
  };

 const Firebase =  firebase.initializeApp(firebaseConfig)
 export default Firebase 
 