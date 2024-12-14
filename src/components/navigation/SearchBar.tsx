import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="hidden md:flex flex-1 max-w-2xl mx-4">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search videos..."
          className="w-full px-4 py-2 pl-10 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}