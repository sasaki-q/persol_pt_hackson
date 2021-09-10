import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css';

export const useSuccessToast = (message: string) => {
    toast.success(message, {
        className: "bg-green-500",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export const useFailureToast = (message: string) => {
    toast.success(message, {
        className: "bg-red-500",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}