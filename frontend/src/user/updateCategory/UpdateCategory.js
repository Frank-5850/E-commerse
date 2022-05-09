import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showUpdateCategoryForm } from "../../redux/slices/formToggleSlice";
import {
  FormContainer,
  FormWrapper,
  Header,
  HeaderText,
  Form,
  Input,
  ConfirmButton,
  CloseButton,
} from "../signin/forms.styles";

const UpdateCategory = () => {
  const [values, setValues] = useState({
    newCategory: "",
    error: "",
  });
  const { newCategory, error } = values;

  const dispatch = useDispatch();

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

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      error: false,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <FormWrapper onClick={() => dispatch(showUpdateCategoryForm())}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => dispatch(showUpdateCategoryForm())}>
          X
        </CloseButton>
        <Header>
          <HeaderText>Add Category</HeaderText>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Update Category"
            onChange={handleChange("newCategory")}
            type="text"
            value={newCategory}
          />
          <ConfirmButton onClick={(e) => handleSubmit(e)}>Update</ConfirmButton>
          {showError()}
        </Form>
      </FormContainer>
    </FormWrapper>
  );
};

export default UpdateCategory;
