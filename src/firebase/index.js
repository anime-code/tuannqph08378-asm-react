import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAGMdN5FpTrcoTNbimBn7fDGQd1m57_euI",
    authDomain: "react-asm-290900.firebaseapp.com",
    databaseURL: "https://react-asm-290900.firebaseio.com",
    projectId: "react-asm-290900",
    storageBucket: "react-asm-290900.appspot.com",
    messagingSenderId: "250285009167",
    appId: "1:250285009167:web:6e0cfbe3364e9bf3d6767a",
    measurementId: "G-02K8PBE7GC"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default {storage, firebase};
