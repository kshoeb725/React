import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold text-blue-600">Codolog</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>

        <div className="hidden sm:block">
        
        </div>
      </div>
    </header>
  );
}
