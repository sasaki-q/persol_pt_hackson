import firebase, { firebaseFirestore } from "../config/firebase";

interface Query {
    [key: string]: any
}

export interface Clients {
    id: string,
    age: string,
    name: string,
    createdAt: any,
}

export interface FirestoreDataType{
    id: string,
    uid: number,
    name: string,
    documentType: string,
    bodyTemp: string,
    breakfast: string,
    lunch: string,
    dinner: string,
    notableItem: string,
    imageName: string | null,
    createdAt: any,
}

export async function useFirestore(query: Query){
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    query["createdAt"] = timestamp
    firebaseFirestore.collection("datas").doc().set(query)
}

export async function useFirestoreDataFetch(uid){
    let datas: FirestoreDataType[] = [];
    await firebaseFirestore.collection("datas").where("uid", "==", uid).orderBy("createdAt", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                /** @ts-ignore */
                let data: FirestoreDataType = doc.data()
                data.createdAt = data.createdAt.toLocaleString().substring(9, 0)
                datas.push(data)
            });
        })
    return datas;
}

export async function useFirestoreSingleDataFetch(id){
    let data: FirestoreDataType
    await firebaseFirestore.collection("datas").where("id", "==", id).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                /** @ts-ignore */
                return data = doc.data()
            });
        })
    return data
}

export async function useFirestoreCreateClient(query){
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    query["createdAt"] = timestamp
    await firebaseFirestore.collection("clients").doc().set(query)
}

export async function useFirestoreGetClients(){
    let datas: Clients[] = [];
    await firebaseFirestore.collection("clients").orderBy("age", "desc").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                /** @ts-ignore */
                let data: Clients = doc.data()
                data.createdAt = data.createdAt.toLocaleString().substring(9, 0)
                datas.push(data)
            });
        })
    return datas
}