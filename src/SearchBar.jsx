import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Search } from 'lucide-react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search wallets..."
          className="w-full bg-gray-800/50 text-white border border-gray-700/50 rounded-xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm transition-all"
        />
        <Search className="absolute left-4 text-gray-400" size={20} />
      </div>
    </div>
  );
}

export default SearchBar;
