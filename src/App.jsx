import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ScratchModePage from "./pages/ScratchModePage";
import ComparisonModePage from "./pages/ComparisonModePage";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/scratch-mode" element={<ScratchModePage />} />
        <Route path="/comparison-mode" element={<ComparisonModePage />} />
      </Routes>
    </Router>
  );
};

export default App;
