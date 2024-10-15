import React from 'react';

function WordDetails({ wordData }) {
  // Safeguard to check if wordData exists
  if (!wordData) {
    return <p>No data available. Please search for a word.</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">{wordData.word}</h2>

      {/* Phonetics */}
      <div className="mt-2">
        <h3 className="text-xl font-semibold">Phonetics:</h3>
        {Array.isArray(wordData.phonetics) && wordData.phonetics.length > 0 ? (
          wordData.phonetics.map((phonetic, index) => (
            <div key={index}>
              <p>{phonetic.text}</p>
              {phonetic.audio && (
                <audio controls>
                  <source src={phonetic.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))
        ) : (
          <p>No phonetics available</p>
        )}
      </div>

      {/* Origin */}
      <div className="mt-2">
        <h3 className="text-xl font-semibold">Origin:</h3>
        <p>{wordData.origin || "No origin available"}</p>
      </div>

      {/* Meanings */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Meanings:</h3>
        {Array.isArray(wordData.meanings) && wordData.meanings.length > 0 ? (
          wordData.meanings.map((meaning, index) => (
            <div key={index} className="mt-2">
              <p><strong>Part of Speech:</strong> {meaning.partOfSpeech}</p>
              {meaning.definitions && meaning.definitions.map((def, defIndex) => (
                <div key={defIndex} className="mt-1">
                  <p><strong>Definition:</strong> {def.definition}</p>
                  {def.example && <p><strong>Example:</strong> {def.example}</p>}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No meanings available</p>
        )}
      </div>
    </div>
  );
}

export default WordDetails;
