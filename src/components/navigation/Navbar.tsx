import React from 'react';
import NavbarBrand from './NavbarBrand';
import SearchBar from './SearchBar';
import UserActions from './UserActions';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavbarBrand />
          <SearchBar />
          <UserActions />
        </div>
      </div>
    </nav>
  );
}