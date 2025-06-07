import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LinkPage from "./pages/Link";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LinkPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
