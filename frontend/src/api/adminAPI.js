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
