import { useEffect } from "react";

const useClickOutside = ( closeModal, ref ) => {

  const handleClickOutside = (e) => {
   if (!ref || !ref.current.contains(e.target)) {
      closeModal();
   }
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("click", handleClickOutside, true);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useClickOutside;
