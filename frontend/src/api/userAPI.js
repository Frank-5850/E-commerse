import axios from "axios";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/products`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getProductDetail = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/product/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
