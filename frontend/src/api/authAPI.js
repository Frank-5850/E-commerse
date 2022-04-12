import axios from "axios";

export const signup = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/register",
      user
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const signin = async (user) => {
  try {
    const response = await axios.post("http://localhost:8000/api/login", user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const authenticate = async (data) => {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const signout = async (next) => {
  try {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
    }
    const response = await axios.get("http://localhost:8000/api/logout");
    next();
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
