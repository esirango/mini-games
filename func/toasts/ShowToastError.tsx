import { Bounce, toast } from "react-toastify";

function ShowToastSuccess() {
    setTimeout(() => {
        toast.success(
            "Congratulations! you have successfully solved this puzzle",
            {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            }
        );
    }, 0);
}

export default ShowToastSuccess;
