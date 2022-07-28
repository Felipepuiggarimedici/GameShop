import { getDocs, collection, query, where, orderBy, startAfter, limit } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import getCategoryById from "./getCategooryById.js";

const getDataByCategory = async (category, firstQuery) => {
    const gamesCollection = collection(db, "gameData");
    let gameSnapshot= null;
    //prevents content being loaded incorrectly upon refreshing
    if (firstQuery) {
      try{
        sessionStorage.removeItem("lastKnownName");
      }
      catch(error){}
    }

    if (Object.entries(category).length === 0) {
      if (firstQuery) {
        const firstQuery = query(gamesCollection, orderBy("name"), limit(6))
        gameSnapshot = await getDocs(firstQuery);
        // Get the last visible document
        sessionStorage.setItem("lastKnownName",  gameSnapshot.docs[ gameSnapshot.docs.length-1].data().name);
      }
      else {
        const nextQuery = query(gamesCollection, orderBy("name"), startAfter(sessionStorage.getItem("lastKnownName")), limit(6));
        gameSnapshot = await getDocs(nextQuery);
        if (typeof gameSnapshot.docs[ gameSnapshot.docs.length-1] === "undefined") {
          return "No more games";
        }
        sessionStorage.setItem("lastKnownName",  gameSnapshot.docs[ gameSnapshot.docs.length-1].data().name);
      }
    }
    else if(category.categoryId === "all") {
      gameSnapshot = await getDocs(gamesCollection);
    }
    else {
      //gets category name through category id
      const categoryName = await getCategoryById(category.categoryId);
      if (categoryName === "No category found") {
        return "No result";
      }
      if (firstQuery) {
        const firstQuery = query(gamesCollection, orderBy("name"), limit(6), where("categories", "array-contains", categoryName))
        gameSnapshot = await getDocs(firstQuery);
        if (gameSnapshot.docs.length === 0) {
          return "No result";
        }
        // Get the last visible document
        sessionStorage.setItem("lastKnownName",  gameSnapshot.docs[ gameSnapshot.docs.length-1].data().name);
      } else {
        const nextQuery = query(gamesCollection, orderBy("name"), startAfter(sessionStorage.getItem("lastKnownName")), limit(6), where("categories", "array-contains", categoryName));
        gameSnapshot = await getDocs(nextQuery);
        if (typeof gameSnapshot.docs[ gameSnapshot.docs.length-1] === "undefined") {
          return "No more games";
        }
        sessionStorage.setItem("lastKnownName",  gameSnapshot.docs[ gameSnapshot.docs.length-1].data().name);
      }
    }
    const gameList = gameSnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}});
    return gameList
}

export default getDataByCategory;