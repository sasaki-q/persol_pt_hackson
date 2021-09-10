import { useState } from "react"
import Header from "../../../components/Headers";

export default function Staff(){
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmationPassword, setConfirmationPassword] = useState<string>("")
    return(
        <div>
            <Header />
            <div className="min-h-screen bg-gray-100 flex items-center">
                <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                    <div className="py-12 p-10 bg-white rounded-xl">
                        <div className="mb-6">
                            <label className="mr-4 text-gray-700 font-bold inline-block mb-2">従業員名</label>
                            <input 
                                type="text" 
                                className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" 
                                placeholder="従業員名" 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="mr-4 text-gray-700 font-bold inline-block mb-2">メールアドレス</label>
                            <input 
                                type="text" 
                                className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" 
                                placeholder="メールアドレス"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="mr-4 text-gray-700 font-bold inline-block mb-2">パスワード</label>
                            <input 
                                type="password" 
                                className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" 
                                placeholder="パスワード" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="">
                            <label className="mr-4 text-gray-700 font-bold inline-block mb-2">確認用パスワード</label>
                            <input 
                                type="password" 
                                className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" 
                                placeholder="パスワード" 
                                onChange={(e) => setConfirmationPassword(e.target.value)}
                            />
                        </div>
                        <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">登録</button>
                    </div>
                </div>
            </div>
        </div>
    )
}