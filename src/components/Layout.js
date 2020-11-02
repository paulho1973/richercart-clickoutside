import React from 'react';

import Header from '../components/Header'

const Layout = ({children}) => {
  return (
    <div className="bg-gray-100 font-family-karla flex">

      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
      <Header />

      <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main className="w-full flex-grow p-6">

        {children}
        
        </main>
      </div>

      </div>

    </div>
  );
}

export default Layout;
