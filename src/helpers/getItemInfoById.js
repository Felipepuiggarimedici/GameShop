import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

const getItemInfoById = async (id) => {

    const gameDoc = doc(db, "gameData", id);
    const gameSnapshot = await getDoc(gameDoc);

    return {id: gameSnapshot.id, ...gameSnapshot.data()};
}
export default getItemInfoById;