import { Modal } from "@material-ui/core"
import { ModalStyle } from "../styles/ModalStyle"

export default function DataModal({
    isOpen,
    setIsOpen,
    data,
}){
    const handleClose = () => {
        setIsOpen(false)
    }   
    return(
        <div>
            {/** @ts-ignore */}
            <Modal isOpen={isOpen} style={ModalStyle}>
                <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                    <button 
                        className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' 
                        onClick = {() => handleClose()}
                    >
                        閉じる
                    </button>
                </div>
            </Modal>
        </div>
    )
}