import { toast } from "react-toastify";

const useToast = () => {
  const showToast = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      pauseOnHover: true,
      rtl: false,
      newestOnTop: true,
      draggable: true,
    });
  };

  return { showToast };
};

export { useToast };
