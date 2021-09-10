import { useState, useEffect } from "react"
import DocumentData from "../../../components/DocumentData";
import { firebaseStorage } from "../../../config/firebase";
import { FirestoreDataType, useFirestoreSingleDataFetch } from "../../../hooks/useFirebaseFirestore";

export default function View({id}){
    const [data, setData] = useState<FirestoreDataType>();
    const [image, setImage] = useState(null);
    const getImage = async () => {
        if(data){
            const imageData = await firebaseStorage.ref("/data").child(`${data.imageName}`).getDownloadURL();
            setImage(imageData);
        }
    };

    useEffect(() => {
        const dataFetch = async() => {
            /** @ts-ignore */
            let res: FirestoreDataType = await useFirestoreSingleDataFetch(id)
            setData(res)
        }
        dataFetch()
    }, [])

    return (
        <div className="h-full">
            {
                data != null && data != undefined 
                ? data.imageName != null 
                    ? <img src={image ? image : getImage()} />
                    : <DocumentData data={data} />
                : null
            }
        </div>
    );   
}

export async function getServerSideProps({params}){
    const id = params.id;
    return {
        props: {id}
    }
}