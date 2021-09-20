// import * as React from "react";

// import firebase from "firebase/app";
// // Required for side-effects
// import "firebase/firestore";

// firebase.initializeApp({
//   apiKey: "AIzaSyBwm8AtBzXiZSqSw7N2dZj1HRDj6NHUcFA",
//   authDomain: "thomas-weiss-alles.firebaseapp.com",
//   projectId: "thomas-weiss-alles",
//   storageBucket: "thomas-weiss-alles.appspot.com",
//   messagingSenderId: "512924210734",
//   appId: "1:512924210734:web:f34d0898b750e88fda71bf",
// });

// const db = firebase.firestore();

// export default function Set() {
//   React.useEffect(() => {
//     listenForUpdates();
//   });

//   // async function setHardCodedAnswer(val) {
//   //     setLockedAnswer(val);

//   //     db.collection("settings")
//   //       .doc("default")
//   //       .set({
//   //         answer: val,
//   //       })
//   //       .catch((error) => {
//   //         console.error(error);
//   //       });
//   //   }

//   function listenForUpdates() {
//     db.collection("settings")
//       .doc("default")
//       .onSnapshot((doc) => {
//         console.log(doc.data().answer);
//       });
//   }
// }
