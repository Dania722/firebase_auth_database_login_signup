import { getAuth,createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , onAuthStateChanged } 
from "firebase/auth";


import app from "../firebase/firebaseconfig"
// authentication methods
const auth = getAuth(app);
// const value = {
//     currentUser , 
//     login , 
//     signup , 
//     logout 
//   }

let signupUser = (obj) => {
//const {email , password} = obj

return createUserWithEmailAndPassword(auth,obj.email,obj. password)
}
let loginUser = (obj) => {

    return signInWithEmailAndPassword(auth,obj.email,obj. password)


}
let logoutUser = () => {

    return signOut(auth) ; 

}
let checkauthUser = () => {
  
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       const uid = user.uid;
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //     }
    //   });
      

}


 export {signupUser , loginUser , logoutUser , checkauthUser}; 


