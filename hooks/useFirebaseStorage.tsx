import { v4 as uuidv4 } from 'uuid';
import firebase, { firebaseFirestore, firebaseStorage } from "../config/firebase"

export default async function upload (image, uid, documentType){
    firebaseStorage.ref(`/data/${image[0].name}`).put(image[0]);
    const timestamp = firebase.firestore.FieldValue.serverTimestamp()
    let query = {
        "id": uuidv4(),
        "uid": uid,
        "documentType": documentType,
        "bodyTemp": "",
        "breakfast": "",
        "lunch": "",
        "dinner": "",
        "notableItem": "",
        "imageName": image[0].name,
        "createdAt": timestamp,
    }
    firebaseFirestore.collection("datas").doc().set(query)
    //画像pathをapiに送る処理
    //await 
}