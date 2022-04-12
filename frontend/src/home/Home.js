import React from "react";
import Signin from "../user/signin/Signin";

const Home = ({ showSignin, setShowSignin }) => {
  return <div>{showSignin && <Signin setShowSignin={setShowSignin} />}</div>;
};

export default Home;
