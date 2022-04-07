const Product = require("../models/product");

module.exports = {
  createProduct: async (req, res) => {
    try {
      const photo = req.file.filename;
      const { name, description, price, category } = req.body;
      if (!name || !description || !price || !category || !photo) {
        return res.status(400).json({ msg: "All fields are required" });
      }
      const newProduct = new Product({
        name,
        description,
        price,
        category,
        photo,
        shipping: true,
      });
      const savedProduct = await newProduct.save();
      res.json(savedProduct);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },
};
