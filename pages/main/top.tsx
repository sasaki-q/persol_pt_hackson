import { useState, useEffect } from 'react';
import Header from '../../components/Headers';
import UserTable from '../../components/UserTable';
import { Clients, useFirestoreGetClients } from '../../hooks/useFirebaseFirestore';

export default function Top (){
    const [clients, setClients] = useState<Clients[]>(null)
    useEffect(() => {
        const dataFetch = async() => {
            let res = await useFirestoreGetClients()
            setClients(res)
        }
        dataFetch()
    }, [])
    return(
        <div>
            <Header />
            <div className="min-h-screen bg-gray-100 flex items-center">
                {clients && <UserTable clients={clients} />}
            </div>
        </div>
    );
}