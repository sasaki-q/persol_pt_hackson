import { useState } from "react";
import Header from "../../../components/Headers";
import { v4 as uuidv4 } from 'uuid';
import { useFirestoreCreateClient } from "../../../hooks/useFirebaseFirestore";
import { useFailureToast, useSuccessToast } from "../../../hooks/useToast";
import { ToastContainer } from "react-toastify";

export default function Client(){
    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<string>("")

    const handleCreate = async() => {
        if([ name, age ].includes("")){
            useFailureToast("必要項目が記入されていません")
            return
        }
        let query = {
            "id": uuidv4(),
            "name": name,
            "age": age
        }
        try{
            await useFirestoreCreateClient(query)
            useSuccessToast("利用者作成が完了しました")
            reset()
        }catch(err){
            console.log("DEBUG: ERROR ===", err)
            useFailureToast("利用者作成に失敗しました")
        }
    }

    const reset = () => {
        setAge("")
        setName("")
    }

    return(
        <div>
            <Header />
            <div className="min-h-screen bg-gray-100 flex items-center">
                <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                    <div className="py-12 p-10 bg-white rounded-xl">
                        <div className="mb-6">
                            <label className="mr-4 text-gray-700 font-bold inline-block mb-2">利用者名</label>
                            <input 
                                type="text" 
                                className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" 
                                placeholder="利用者名"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <label className="mr-4 text-gray-700 font-bold inline-block mb-2">年齢</label>
                            <input 
                                type="text" 
                                className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" 
                                placeholder="年齢"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <button 
                            className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300"
                            onClick={() => handleCreate()}
                        >
                            登録する
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}