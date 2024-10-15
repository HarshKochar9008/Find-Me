import React, { useState } from 'react';

function SearchBar({ fetchWordData }) {
  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word.trim() !== '') {
      fetchWordData(word);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Search for a word..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
