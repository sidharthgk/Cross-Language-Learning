import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import ScratchModePage from "./pages/ScratchModePage";
import ComparisonModePage from "./pages/ComparisonModePage";
import './App.css';
import './styles/global.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <button 
        onClick={toggleDarkMode} 
        className={isDarkMode ? "light-mode-button" : "dark-mode-button"}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/scratch-mode" element={<ScratchModePage />} />
          <Route path="/comparison-mode" element={<ComparisonModePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
