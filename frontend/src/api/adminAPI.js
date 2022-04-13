import axios from "axios";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const addCategory = async (category, id, token) => {
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
