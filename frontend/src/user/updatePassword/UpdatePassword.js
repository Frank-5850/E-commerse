import React, { useState } from "react";
import {
  CloseButton,
  FormContainer,
  FormWrapper,
  Header,
  HeaderText,
  Form,
  Input,
  ConfirmButton,
} from "../signin/forms.styles";

const UpdatePassword = () => {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    error: "",
  });
  const { password, confirmPassword, error } = values;

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      [name]: event.target.value,
    });
  };

  return (
    <FormWrapper>
      <FormContainer>
        <CloseButton>X</CloseButton>
        <Header>
          <HeaderText>Change Password</HeaderText>
        </Header>
        <Form>
          <Input
            placeholder="Password"
            onChange={handleChange("password")}
            type="password"
            value={password}
          />
          <Input
            placeholder="Confirm Password"
            onChange={handleChange("confirmPassword")}
            type="password"
            value={confirmPassword}
          />
          <ConfirmButton>Change Password</ConfirmButton>
        </Form>
      </FormContainer>
    </FormWrapper>
  );
};

export default UpdatePassword;
