import { useState } from "react"
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import { useFirestore } from "../hooks/useFirebaseFirestore";
import { useFailureToast, useSuccessToast } from "../hooks/useToast";
import { ModalStyle } from "../styles/ModalStyle";
import { v4 as uuidv4 } from 'uuid';

export default function DocumentModal({
    isOpen,
    setIsOpen,
    targetUid,
    name,
}){
    const [documentType, setDocumentType] = useState<string>("")
    const [inputItems, setInputItems] = useState<string[]>([]);
    const [bodyTemp, setBodyTemp] = useState<string>("");
    const [breakfast, setBreakfast] = useState<string>("");
    const [lunch, setLunch] = useState<string>("");
    const [dinner, setDinner] = useState<string>("");
    const [notableItem, setNotableItem] = useState<string>("");

    let items: string[] = ["体温", "朝ごはん", "昼ごはん", "夜ごはん", "特筆すべき項目"];

    //選んだ書類の種類で項目を動的に切り替え
    const handleChange = (e) => {
        setDocumentType(e)
        switch(e){
            case "介護記録":
                setInputItems(items)
                break;
            
            case "介護計画書":
                setInputItems(items)
                break;

            case "介護保険請求関連書類":
                setInputItems(items)
                break;

            case "ケアマネージャーへの報告書":
                setInputItems(items)
                break;

            default:
                setInputItems(null)
                break;
        }
    }

    const hendleInputChange = (item: string, text: string) => {
        switch(item){
            case "朝ごはん":
                setBreakfast(text)
                break;
            
            case "昼ごはん":
                setLunch(text)
                break;

            case "夜ごはん":
                setDinner(text)
                break;

            case "特筆すべき項目":
                setNotableItem(text)
                break;

            default:
                break;
        }
    }

    const validation = (): Boolean => {
        return [bodyTemp, breakfast, lunch, dinner, notableItem].includes("")
    }

    const handleSubmit = async() => {
        if (validation()) {
            useFailureToast("必須項目が記入されてません")
            return
        }
        let query = {
            "id": uuidv4(),
            "uid": targetUid,
            "name": name,
            "documentType": documentType,
            "bodyTemp": bodyTemp,
            "breakfast": breakfast,
            "lunch": lunch,
            "dinner": dinner,
            "notableItem": notableItem,
        }
        try{
            await useFirestore(query)
            useSuccessToast("投稿が完了しました")
        }catch(err){
            console.log("DEBUG: ERROR ==== ", err)
            useFailureToast("投稿が失敗しました")
        }
        handleClose()
    }

    const handleClose = () => {
        setBodyTemp("")
        setBreakfast("")
        setLunch("")
        setDinner("")
        setNotableItem("")
        setDocumentType("")
        setInputItems(null)
        setIsOpen(false)
    }

    return( 
        <div>
            {/** @ts-ignore */}
            <Modal isOpen={isOpen} style={ModalStyle}>
                    <div className="mx-auto grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12">
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">書類の種類を選択する</label>
                            <select className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" onChange={(e) => handleChange(e.target.value)}>
                            　　 <option value=""></option>
                                <option value="介護記録">介護記録</option>
                                <option value="介護計画書">介護計画書</option>
                                <option value="介護保険請求関連書類">介護保険請求関連書類</option>
                                <option value="ケアマネージャーへの報告書">ケアマネージャーへの報告書</option>
                            </select>
                        </div>
                        { inputItems && inputItems.map((elm) => {
                            return elm === "体温"
                            ?   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                                    <div className="grid grid-cols-1">
                                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">体温</label>
                                        <input 
                                            className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                            type="text" 
                                            placeholder="体温"
                                            onChange={(e) => setBodyTemp(e.target.value)}
                                        />
                                    </div>
                                </div>
                            :   <div className="grid grid-cols-1 mt-5 mx-7">
                                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">{elm}</label>
                                    <input 
                                        className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                        type="text" 
                                        placeholder={elm}
                                        onChange={(e) => hendleInputChange(elm, e.target.value)}
                                    />
                                </div>
1                       })}
                        <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                            <button 
                                className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'
                                onClick={() => handleSubmit()}
                            >
                                データを投稿する
                            </button>
                            <button 
                                className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' 
                                onClick = {() => handleClose()}
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
            </Modal>
            <ToastContainer />
        </div>
    )
}