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
  CloseButton,
} from "../signin/forms.styles";
import { useSelector, useDispatch } from "react-redux";
import { showCategoryForm } from "../../redux/slices/formToggleSlice";

const AddCategory = () => {
  const [values, setValues] = useState({
    category: "",
    error: "",
  });
  const { category, error } = values;
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
  };

  return (
    <FormWrapper onClick={() => dispatch(showCategoryForm())}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => dispatch(showCategoryForm())}>
          X
        </CloseButton>
        <Header>
          <HeaderText>Add Category</HeaderText>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="New Category"
            onChange={handleChange("category")}
            type="text"
            value={category}
          />
          <ConfirmButton onClick={(e) => console.log("clicked")}>
            Add
          </ConfirmButton>
          {showError()}
        </Form>
      </FormContainer>
    </FormWrapper>
  );
};

export default AddCategory;
