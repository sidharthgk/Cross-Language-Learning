import { useState } from "react";
import "../styles/ScratchModePage.css";

const ScratchModePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languages = ["Python", "JavaScript", "Java", "C++", "Ruby"];

  return (
    <div className="page-container">
      <h1>Select a Language for Scratch Mode</h1>
      <div className="language-list">
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </button>
        ))}
      </div>
      {selectedLanguage && (
        <div className="score-display">
          <h2>You selected: {selectedLanguage}</h2>
          <p>Great choice! Lets get started with {selectedLanguage}!</p>
        </div>
      )}
    </div>
  );
};

export default ScratchModePage;
