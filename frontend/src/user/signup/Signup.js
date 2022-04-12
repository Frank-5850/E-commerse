import React, { useState } from "react";
import { signup } from "../../api/authAPI";
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
} from "./../signin/signin.styles";
import {
  FirstNameInput,
  LastNameInput,
  VerifyPasswordInput,
} from "./signup.styles";

const Signup = ({ setShowSignup, toggleBetweenSigninAndSignup }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordCheck: "",
    error: "",
    success: false,
  });

  const {
    firstName,
    lastName,
    email,
    password,
    passwordCheck,
    success,
    error,
  } = values;

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
      await setValues({ ...values, error: false });
      const data = await signup({
        firstName,
        lastName,
        email,
        password,
        passwordCheck,
      });
      console.log("data=>>", data);
      if (data.msg) {
        setValues({
          ...values,
          error: data.msg,
          success: false,
        });
      } else {
        setValues({
          ...values,
          error: false,
          success: true,
        });
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

  const showSuccess = () => (
    <div
      style={{
        display: success ? "" : "none",
        color: "green",
        fontSize: "0.8rem",
        marginBottom: "0.5rem",
      }}
    >
      New account created successfully!
    </div>
  );

  return (
    <SigninWrapper onClick={() => setShowSignup(false)}>
      <SigninContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setShowSignup(false)}>X</CloseButton>
        <Header>
          <HeaderText>Please Sign Up</HeaderText>
        </Header>
        <SignInForm onSubmit={handleSubmit}>
          <EmailInput
            placeholder="Email address"
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            value={email}
          />
          <FirstNameInput
            placeholder="First Name"
            onChange={handleChange("firstName")}
            type="text"
            className="form-control"
            value={firstName}
          />
          <LastNameInput
            placeholder="Last Name"
            onChange={handleChange("lastName")}
            type="text"
            className="form-control"
            value={lastName}
          />
          <PasswordInput
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            value={password}
            placeholder="password"
          />
          <VerifyPasswordInput
            onChange={handleChange("passwordCheck")}
            type="password"
            className="form-control"
            value={passwordCheck}
            placeholder="Verify password"
          />
          <SigninButton onClick={(e) => handleSubmit(e)}>Sign Up</SigninButton>
          {showSuccess()}
          {showError()}
          <SignupComponent>
            <SignupText>Already a member?</SignupText>
            <SignupClick onClick={() => toggleBetweenSigninAndSignup()}>
              Join Us
            </SignupClick>
          </SignupComponent>
        </SignInForm>
      </SigninContainer>
    </SigninWrapper>
  );
};

export default Signup;
