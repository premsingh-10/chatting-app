import React,{useEffect} from 'react'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage = () => {
    return(
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default ToastMessage