import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      pauseOnHover
      rtl={false}
      newestOnTop
      draggable
      theme="dark"
    />
  );
};

export default Toast;
