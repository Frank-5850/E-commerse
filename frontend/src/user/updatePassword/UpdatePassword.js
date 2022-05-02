import React from "react";
import {
  CloseButton,
  FormContainer,
  FormWrapper,
  Header,
  HeaderText,
  Form,
  Input,
} from "../signin/forms.styles";

const UpdatePassword = () => {
  return (
    <FormWrapper>
      <FormContainer>
        <CloseButton>X</CloseButton>
        <Header>
          <HeaderText>Change Password</HeaderText>
        </Header>
        <Form>
          <Input />
          <Input />
          <Input />
        </Form>
      </FormContainer>
    </FormWrapper>
  );
};

export default UpdatePassword;
