import { Slide, toast } from "react-toastify";

export function scrollToTop(): void {
  window.scrollTo(0, 0);
}

export const handleToastMessage = (
  message: string | undefined,
  type: "warning" | "success",
) => {
  switch (type) {
    case "warning":
      toast.warning(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;
    case "success":
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;
  }
};

// export function convertImageToBase64(file: File, callback: Function) {
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => {
//     callback?.(reader?.result?.toString());
//   };
// }

export const fileToBase64 = (file:File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
