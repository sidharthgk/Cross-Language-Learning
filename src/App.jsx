import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ScratchModePage from "./pages/ScratchModePage";
import ComparisonModePage from "./pages/ComparisonModePage";
import './App.css';
import './styles/global.css'; // Ensure global styles are included

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <button 
        onClick={toggleDarkMode} 
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: "1000",
          padding: "10px 20px",
          cursor: "pointer"
        }}
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
    </div>
  );
};

export default App;
