import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WordDetails from './components/WordDetails';

function App() {
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWordData = async (word) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/${word}`);
      setWordData(response.data[0]);
    } catch (err) {
      console.error(err);
      setError('Word not found or API error');
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Dictionary App</h1>
        <SearchBar fetchWordData={fetchWordData} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {wordData && <WordDetails wordData={wordData} />}
      </div>
    </div>
  );
}

export default App;
