import { Slide, toast } from "react-toastify";

export function scrollToTop(): void {
  window.scrollTo(0, 0);
}

export const handleToastMessage = (error: string | undefined, type: string) => {
  switch (type) {
    case "warning":
      toast.warning(error, {
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
      break ; 
    case "success":
      toast.success(error, {
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
      break ; 
  }

};
