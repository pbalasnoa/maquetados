import { renderCard } from "./renderCard.js";
import { config } from "../../config.js";

var firebaseConfig = {
  apiKey: config.firebaseConnect.APIKEY,
  authDomain: config.firebaseConnect.AUTHDOMAIN,
  projectId: config.firebaseConnect.PROJECTID,
  storageBucket: config.firebaseConnect.STORAGEBUCKET,
  messagingSenderId: config.firebaseConnect.MESSAGINFSENDERID,
  appId: config.firebaseConnect.APPID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("practices")
  .get()
  .then((snapshot) => {
    renderCard(snapshot.docs);
  });
