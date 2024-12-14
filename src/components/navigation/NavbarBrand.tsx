import React from 'react';
import { Menu } from 'lucide-react';

export default function NavbarBrand() {
  return (
    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Vidora
      </h1>
    </div>
  );
}