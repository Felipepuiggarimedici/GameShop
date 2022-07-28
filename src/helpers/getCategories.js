import { db } from "../firebase/firebase.js";
import { getDocs, collection, query, orderBy } from "firebase/firestore";

const getCategories = async() => {
    const categoriesCollection = collection(db, "categories"); 
    const orderQuery = query(categoriesCollection, orderBy("name"));
    const categorySnapshot = await getDocs(orderQuery);
    const categories = categorySnapshot.docs.map((categorySnap) => {return {id: categorySnap.id, name: categorySnap.data().name}});

    return categories;
}

export default getCategories;