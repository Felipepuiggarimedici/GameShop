import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

const getDataByCategory = async (currentCategory) => {
    const gamesCollection = collection(db, "gameData");
    let gameSnapshot= null;

    if (Object.entries(currentCategory).length === 0) {
      gameSnapshot = await getDocs(gamesCollection);
    }
    else {
      const q = query(gamesCollection, where("categories", "array-contains", currentCategory.categoryName));
      gameSnapshot = await getDocs(q);
    }
    const gameList = gameSnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}});
    return gameList
}

export default getDataByCategory;