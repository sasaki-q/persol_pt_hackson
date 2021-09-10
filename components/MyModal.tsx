import { useState } from "react";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import upload from "../hooks/useFirebaseStorage";
import { useFailureToast, useSuccessToast } from "../hooks/useToast";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ModalStyle } from "../styles/ModalStyle";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function MyModal({
    isOpen,
    setIsOpen,
    targetUid,
}) {
    const [image, setImage] = useState<any[]>(null)
    const [fileUrl, setFileUrl] = useState<string>(null);
    const [description, setDescription] = useState<string>(null);
    const classes = useStyles()
    const imageTypeArray: string[] = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/HEIC",
        "image/bmp",
        "image/svg+xml",
    ];

    const validateImageType = (type) : Boolean  => {
        var flag: Boolean = imageTypeArray.some((validationType) => { return validationType === type })
        return flag;
    }

    const handleSelectImage = (file) => {
        validateImageType(file[0].type)
            ? setImage(file)
            : useFailureToast("無効な形式のデータです")
        onImageChange(file[0])
    }

    const handleUpload = async() => {
        try{
            upload(image, targetUid, description)
            useSuccessToast("写真を追加しました")
            handleClose()
        }catch(err){
            console.log("DEBUG: ERROR =======", err)
        }
    }

    const handleChange = (e) => {
        setDescription(e.target.value)
    }

    const handleClose = () => {
        setImage(null)
        setFileUrl(null)
        setDescription(null)
        setIsOpen(false)
    }

    const onImageChange = (fileImage) => {
        const imageUrl = URL.createObjectURL(fileImage);
    　　setFileUrl(imageUrl)
    }
    
    return (
        <div>
            {/** @ts-ignore */}
            <Modal isOpen={isOpen} style={ModalStyle} className="w-9/12 mx-auto">
                <div className="flex">
                    <div className="w-5/12 py-6/12">
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-5">画像データを投稿する</label>
                            <div className='flex items-center justify-center w-full'>
                                <label className='flex flex-col border-4 border-dashed w-full hover:bg-gray-100 hover:border-purple-300 group'>
                                    { fileUrl 
                                        ? <img src={fileUrl} />
                                        : <div className='flex flex-col items-center justify-center pt-7'>
                                                <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                                <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Select a photo</p>
                                            </div> 
                                    }
                                    <input type='file' className="hidden" onChange={(e) =>handleSelectImage(e.target.files)}/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col mx-auto my-auto">
                        <div className="mt-10">
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">写真の種類</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={description}
                                    onChange={handleChange}
                                    label="Age"
                                >
                                    <MenuItem value={"介護記録"}>介護記録</MenuItem>
                                    <MenuItem value={"介護計画書"}>介護計画書</MenuItem>
                                    <MenuItem value={"介護保険請求関連書類"}>介護保険請求関連書類</MenuItem>
                                    <MenuItem value={"ケアマネージャーへの報告書"}>ケアマネージャーへの報告書</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="mt-10">
                            {image && description
                                ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"　onClick={() => handleUpload()}>
                                    アップロード
                                    </button>
                                : null
                            }
                        </div>
                        <div className="mt-10">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"　onClick={() => handleClose()}>
                                閉じる
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
            <ToastContainer />
        </div>
    );
}