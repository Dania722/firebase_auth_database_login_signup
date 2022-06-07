import app from "../firebase/firebaseconfig"; 
import { getDatabase, ref, set , onValue } from "firebase/database";
const db = getDatabase(app);

let sendData  =  (obj , nodeName , id) => {
 

    //refrence 
    //mtlb 
    //const a = nodeName + 1 ; 
    let refrence = ref (db , `${ nodeName} / ${ id ? id : "  "} `);
    
    //mtlb  db refere to databse , user refer to nodename  
    // / is use or agye uski id ayegy 
   
    return set (refrence , obj );
} ; 
let getData = (nodeName) =>{
    const dbRef = ref (db , nodeName) ; 
    const arr  = []; 
   return onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          console.log(childKey);
          console.log(childData);
          arr.push (childData);
          arr = [... arr , childData]

          // ...
        });
        return arr 
         } ,  
       {
        onlyOnce: true
      });
}

export default {sendData , getData} ; 




