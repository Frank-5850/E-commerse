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

export const changePassword = async (
  id,
  oldPassword,
  newPassword,
  confirmPassword,
  token
) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/user/updatePassword/${id}`,
      { oldPassword, newPassword, confirmPassword },
      { headers: { headers, Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteUser = async (id, token) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/user/delete/${id}`,
      {
        headers: { headers, Authorization: `${token}` },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const addOrderToHistory = async (order, id, token) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/user/addOrderToHistory/${id}`,
      order,
      { headers: { headers, Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
