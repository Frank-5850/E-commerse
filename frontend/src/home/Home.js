import React from "react";
import Signin from "../user/signin/Signin";
import Signup from "../user/signup/Signup";

const Home = ({
  showSignin,
  setShowSignin,
  showSignup,
  setShowSignup,
  toggleBetweenSigninAndSignup,
}) => {
  return (
    <div>
      {showSignin && (
        <Signin
          setShowSignin={setShowSignin}
          toggleBetweenSigninAndSignup={toggleBetweenSigninAndSignup}
        />
      )}
      {showSignup && (
        <Signup
          setShowSignup={setShowSignup}
          toggleBetweenSigninAndSignup={toggleBetweenSigninAndSignup}
        />
      )}
    </div>
  );
};

export default Home;
