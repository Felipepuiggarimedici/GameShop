import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

const getNamesAndIds = async() => {
    const gamesCollection = collection(db, "gameData");
    const gameSnapshot = await getDocs(gamesCollection);

    const gameNamesAndIds = gameSnapshot.docs.map(doc => {return {id: doc.id, name: doc.data().name}});
    return gameNamesAndIds;
}
export default getNamesAndIds;