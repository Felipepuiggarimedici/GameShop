import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

const getCategoryById = async (categoryId) => {
    const categoryDoc = doc(db, "categories", categoryId);
    const categorySnapshot = await getDoc(categoryDoc);

    if (typeof categorySnapshot.data() === "undefined") {
        return "No category found";
    }
    return categorySnapshot.data().name;
}
export default getCategoryById;