import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Nav from "./nav/Nav";

const App = () => {
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleBetweenSigninAndSignup = () => {
    setShowSignin(!showSignin);
    setShowSignup(!showSignup);
  };

  return (
    <BrowserRouter>
      <Nav setShowSignin={setShowSignin} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showSignin={showSignin}
              setShowSignin={setShowSignin}
              showSignup={showSignup}
              setShowSignup={setShowSignup}
              toggleBetweenSigninAndSignup={toggleBetweenSigninAndSignup}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
