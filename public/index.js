import { renderCard } from "./js/renderCard.js";
import { loader, error, NotFoundData } from "./js/infoMessages.js";
import { config } from "../src/config.js";

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

function getProject() {
  const messagesContent = document.querySelector(".infoMessages");

  messagesContent.classList.toggle("hide");
  loader();

  db.collection("practices")
    .get()
    .then((snapshot) => {
      if (snapshot.docs <= 0) {
        NotFoundData();
        return;
      }

      messagesContent.classList.toggle("hide");
      renderCard(snapshot.docs);
    })
    .catch((err) => error());
}

getProject();
