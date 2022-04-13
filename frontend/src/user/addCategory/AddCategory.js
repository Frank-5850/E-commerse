import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { showCategoryForm } from "../../redux/slices/formToggleSlice";
import { addCategory } from "../../api/adminAPI";
import { isAuthenticated } from "./../../api/authAPI";
import { setSuccess } from "../../redux/slices/successSlice";

const AddCategory = () => {
  const [values, setValues] = useState({
    category: "",
    error: "",
  });
  const { category, error } = values;
  const { token, user } = isAuthenticated();
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
    try {
      await setValues({
        ...values,
        error: false,
      });
      const data = await addCategory({ category }, user.id, token);
      if (data.msg) {
        setValues({
          ...values,
          error: data.msg,
        });
      } else {
        await dispatch(
          setSuccess({
            success: true,
            msg: "Category added successfully",
          })
        );
        await dispatch(showCategoryForm(false));
      }
    } catch (error) {
      console.log("error", error);
    }
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
          <ConfirmButton onClick={(e) => handleSubmit(e)}>Add</ConfirmButton>
          {showError()}
        </Form>
      </FormContainer>
    </FormWrapper>
  );
};

export default AddCategory;
