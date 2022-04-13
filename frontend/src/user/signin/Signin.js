import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  FormWrapper,
  Header,
  HeaderText,
  Form,
  Input,
  ConfirmButton,
  SignupComponent,
  SignupText,
  SignupClick,
  CloseButton,
} from "./forms.styles";
import { signin, authenticate } from "../../api/authAPI";
import { useDispatch } from "react-redux";
import {
  showSignin,
  toggleBetweenSigninAndSignup,
} from "../../redux/slices/formToggleSlice";
import { setCurrentUser } from "../../redux/slices/authSlice";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
  });
  const dispatch = useDispatch();
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
      });
      const data = await signin({ email, password });
      if (data.msg) {
        setValues({
          ...values,
          error: data.msg,
          loading: false,
        });
      } else {
        console.log(data);
        await authenticate(data);
        await dispatch(setCurrentUser(data));
        await setValues({
          ...values,
          error: false,
          redirectToReferrer: true,
        });
        await dispatch(showSignin());
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
    <FormWrapper onClick={() => dispatch(showSignin())}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => dispatch(showSignin())}>X</CloseButton>
        <Header>
          <HeaderText>Please Sign in</HeaderText>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Email address"
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            value={email}
          />
          <Input
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            value={password}
            placeholder="password"
          />
          <ConfirmButton onClick={(e) => handleSubmit(e)}>
            Sign In
          </ConfirmButton>
          {showError()}
          <SignupComponent>
            <SignupText>Not a member?</SignupText>
            <SignupClick
              onClick={() => dispatch(toggleBetweenSigninAndSignup())}
            >
              Join Us
            </SignupClick>
          </SignupComponent>
        </Form>
      </FormContainer>
    </FormWrapper>
  );
};

export default Signin;
