import axios from "axios";

export const signup = async (user) => {
  try {
    const response = await axios.post("http://localhost:8000/api/register", {
      user,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
