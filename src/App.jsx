import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/Auth/Login";
import Home from "./components/Private/Home";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user login state

  // Handle login logic and update isLoggedIn state
  const handleLogin = () => {
    // Implement your login logic (e.g., API call)
    setIsLoggedIn(true);
  };

  console.log("isLoggedIn", isLoggedIn);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Login handleLogin={handleLogin} />}
        />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
