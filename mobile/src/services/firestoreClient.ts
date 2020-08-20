import admindb from "./firebaseconfig";
import { Teacher } from "../components/TeacherItem";

/**
 * Get data of firestore
 * @param collection 
 * @param doc 
 */
const getDocument = async (collection: string) => {
 
    const querySnapshot = await admindb.collection(collection).get()
    
    let snapshots: any[] = []

    querySnapshot.forEach(snapshot => {
      snapshots.push(snapshot.data())
    });
    return snapshots
}

export default getDocument