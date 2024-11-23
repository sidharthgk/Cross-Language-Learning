import { useState } from "react";
import "../styles/ComparisonModePage.css";

const ComparisonModePage = () => {
  const [language1, setLanguage1] = useState("");
  const [language2, setLanguage2] = useState("");
  const [compatibilityScore, setCompatibilityScore] = useState(null);

  const handleCompare = () => {
    if (language1 && language2) {
      const score = Math.floor(Math.random() * 100);
      setCompatibilityScore(score);
    } else {
      alert("Please select two languages to compare!");
    }
  };

  const languages = ["Python", "JavaScript", "Java", "C++", "Ruby"];

  return (
    <div className="page-container">
      <h1>Comparison Mode</h1>
      <div className="language-select">
        <div>
          <h2>Select Language You Already Know</h2>
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setLanguage1(language)}
              disabled={language2 === language}
            >
              {language}
            </button>
          ))}
        </div>
        <div>
          <h2>Select Language You Want To Learn</h2>
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => setLanguage2(language)}
              disabled={language1 === language}
            >
              {language}
            </button>
          ))}
        </div>
      </div>
      <div>
        <button onClick={handleCompare}>Compare</button>
      </div>
      {compatibilityScore !== null && (
        <div className="score-display">
          <h2>Compatibility Score</h2>
          <p>
            The compatibility between <b>{language1}</b> and <b>{language2}</b>{" "}
            is: <b>{compatibilityScore}%</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default ComparisonModePage;
