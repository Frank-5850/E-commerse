import React from "react";
import Signin from "../user/signin/Signin";
import Signup from "../user/signup/Signup";
import { useSelector } from "react-redux";

const Home = () => {
  const { signin, signup } = useSelector((state) => state.formToggle);
  return (
    <div>
      {signin && <Signin />}
      {signup && <Signup />}
      {/* <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
