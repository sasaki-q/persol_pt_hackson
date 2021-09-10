import { useState, useEffect } from "react";
import DataTable from "../../../components/DataTable";
import Header from "../../../components/Headers";
import { FirestoreDataType, useFirestoreDataFetch } from "../../../hooks/useFirebaseFirestore";

export default function Confirm({ uid }){
    const [datas, setDatas] = useState<FirestoreDataType[]>(null);

    useEffect(() => {
        const dataFetch = async() => {
            let res: FirestoreDataType[] = await useFirestoreDataFetch(uid)
            setDatas(res)
        }
        dataFetch()
    }, [])

    return(
        <div>
            <Header/>
            {
                datas != null && <DataTable datas={datas}/>
            }
        </div>
    )
}

export async function getServerSideProps({params}){
    const uid: number = params.id;
    return {
        props: { uid }
    }
}