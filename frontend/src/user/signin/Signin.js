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
} from "./signin.styles";

const Signin = ({ setShowSignin, toggleBetweenSigninAndSignup }) => {
  return (
    <SigninWrapper onClick={() => setShowSignin(false)}>
      <SigninContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setShowSignin(false)}>X</CloseButton>
        <Header>
          <HeaderText>Please Sign in</HeaderText>
        </Header>
        <SignInForm>
          <EmailInput placeholder="Email address" />
          <PasswordInput type="password" placeholder="password" />
          <SigninButton>Sign In</SigninButton>
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
