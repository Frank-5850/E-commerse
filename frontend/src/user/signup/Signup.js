import React from "react";
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
  return (
    <SigninWrapper onClick={() => setShowSignup(false)}>
      <SigninContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setShowSignup(false)}>X</CloseButton>
        <Header>
          <HeaderText>Please Sign Up</HeaderText>
        </Header>
        <SignInForm>
          <EmailInput placeholder="Email address" />
          <FirstNameInput placeholder="First Name" />
          <LastNameInput placeholder="Last Name" />
          <PasswordInput type="password" placeholder="password" />
          <VerifyPasswordInput type="password" placeholder="Verify password" />
          <SigninButton>Sign Up</SigninButton>
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
