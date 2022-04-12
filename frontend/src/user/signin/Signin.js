import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SigninContainer,
  SigninWrapper,
  Header,
  HeaderText,
  SignInForm,
  EmailInput,
  PasswordInput,
  SigninButton,
  SignupComponent,
  SignupText,
  SignupClick,
  CloseButton,
} from "./signin.styles";
import { signin, authenticate } from "../../api/authAPI";

const Signin = ({ setShowSignin, toggleBetweenSigninAndSignup }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
  });

  const navigate = useNavigate();

  const { email, password, error } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setValues({
        ...values,
        error: false,
        loading: true,
      });
      const data = await signin({ email, password });
      if (data.msg) {
        setValues({
          ...values,
          error: data.msg,
          loading: false,
        });
      } else {
        await authenticate(data);
        await setValues({
          ...values,
          error: false,
          redirectToReferrer: true,
        });
        await setShowSignin(false);
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const showError = () => (
    <div
      style={{
        display: error ? "" : "none",
        color: "red",
        fontSize: "0.8rem",
        marginBottom: "0.5rem",
      }}
    >
      {error}
    </div>
  );

  return (
    <SigninWrapper onClick={() => setShowSignin(false)}>
      <SigninContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setShowSignin(false)}>X</CloseButton>
        <Header>
          <HeaderText>Please Sign in</HeaderText>
        </Header>
        <SignInForm onSubmit={handleSubmit}>
          <EmailInput
            placeholder="Email address"
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            value={email}
          />
          <PasswordInput
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            value={password}
            placeholder="password"
          />
          <SigninButton onClick={(e) => handleSubmit(e)}>Sign In</SigninButton>
          {showError()}
          <SignupComponent>
            <SignupText>Not a member?</SignupText>
            <SignupClick onClick={() => toggleBetweenSigninAndSignup()}>
              Join Us
            </SignupClick>
          </SignupComponent>
        </SignInForm>
      </SigninContainer>
    </SigninWrapper>
  );
};

export default Signin;
