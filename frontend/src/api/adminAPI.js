import axios from "axios";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const createCategory = async (category, id, token) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/category/create/${id}`,
      category,
      { headers: { headers, Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/categories`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createProduct = async (product, id, token) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/product/create/${id}`,
      product,
      { headers: { headers, Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateProduct = async (product, id, token, productId) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/product/update/${productId}/${id}`,
      product,
      { headers: { headers, Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteProduct = async (id, token, productId) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/product/${productId}/${id}`,
      { headers: { headers, Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateCategory = async (category, id, token, categoryId) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/category/update/${categoryId}/${id}`,
      { name: category },
      { headers: { headers, Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteCategory = async (id, token, categoryId) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/category/delete/${categoryId}/${id}`,
      { headers: { headers, Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
