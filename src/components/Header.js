import React, {useState, useRef} from "react";

import myImg from './sign-in.png';

import useClickOutside from "../lib/clickOutside";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
    if (isOpen) {
      setIsOpen(false);
    }
  }

  const pullDown = useRef();

  useClickOutside(() => setIsOpen(false), pullDown);

  return (

    <header className="w-full flex items-center bg-white py-2 px-6">
    <div className="w-1/2"></div>
    <div className="relative w-1/2 flex justify-end">
        
        <button onClick ={handleClick} ref={pullDown} className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
            <img src={myImg} alt="sign-in" />
        </button>
        

        {isOpen && (
            <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                <a href="#" className="block px-4 py-2">Sign In</a>
            </div>
        )}

    </div>
    </header>

  );
}

export default Header;