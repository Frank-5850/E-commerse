import React from "react";
import Signin from "../user/signin/Signin";
import Signup from "../user/signup/Signup";
import { useSelector } from "react-redux";

const Home = () => {
  const { signin, signup } = useSelector((state) => state.formToggleSlice);
  return (
    <div>
      Home
      {signin && <Signin />}
      {signup && <Signup />}
    </div>
  );
};

export default Home;
