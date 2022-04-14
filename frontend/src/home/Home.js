import React from "react";
import { useSelector } from "react-redux";
import Signin from "../user/signin/Signin";
import Signup from "../user/signup/Signup";

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
