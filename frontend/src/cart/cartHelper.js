export const addItem = (item) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
      count: 1,
    });

    cart = Array.from(new Set(cart.map((product) => product._id))).map((id) => {
      return cart.find((product) => product._id === id);
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCart = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
  return [];
};

export const totalItems = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart")).length;
    }
  }
  return 0;
};

export const updateItem = (productId, count) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.map((product, index) => {
      if (product._id === productId) {
        cart[index].count = count;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};
