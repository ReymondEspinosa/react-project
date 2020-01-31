import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../css/toastr.css'

toast.configure({
    position : "top-right",
    autoClose : 2000,
    hideProgressBar : false,
    closeOnClick : false,
    pauseOnHover : true,
});

export const toastrError = message => {
    toast.error(message);
}

export const toastrSuccess = message => {
    toast.success(message);
}