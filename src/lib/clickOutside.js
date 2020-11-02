import { useEffect } from "react";

const useClickOutside = ( closeModel, ref ) => {

  const handleClickOutside = (e) => {
   if (!ref || !ref.current.contains(e.target)) {
      closeModel();
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
