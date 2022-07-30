import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

const searchOrder = async (id) => {
    const orderDoc = doc(db, "sales", id);
    const orderSnapshot = await getDoc(orderDoc);

    if (typeof orderSnapshot.data() === "undefined") {
        return "No order found";
    }

    return {id: orderSnapshot.id, ...orderSnapshot.data()};
}

export default searchOrder;