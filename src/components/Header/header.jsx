import "./header.scss";
import React from 'react';
const Header = () => {
  return (
    <header className="header h-[200px] bg-cover bg-center py-8">
      <div className="container mx-auto">
        <h1 className="text-left text-4xl text-white uppercase">fast food catalog</h1>
        <p className="text-left text-white capitalize mt-5">fast food catalog</p>
      </div>
    </header>
  );
}

export default Header;

