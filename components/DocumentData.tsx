import { FirestoreDataType } from "../hooks/useFirebaseFirestore"

export default function DocumentData(data){
    let passedData: FirestoreDataType = data.data
    return (
        <div className="min-h-screen bg-gray-100 flex items-center">
            <div className="container mx-auto shadow-md hover:shadow-lg transition duration-300">
                <div className="py-12 p-10 bg-white rounded-xl">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 ml-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        項目
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 ml-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        入力データ
                                                    </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr key="">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">名前</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{passedData.name}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr key="">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">体温</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{passedData.bodyTemp}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr key="">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">朝ごはん</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{passedData.breakfast}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr key="">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">昼ごはん</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{passedData.lunch}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr key="">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">夜ごはん</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{passedData.dinner}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr key="">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">特筆すべき項目</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{passedData.notableItem}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}