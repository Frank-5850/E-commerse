const Product = require("../models/product");
const path = require("path");

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
        photo: {
          fileName: req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
          fileSize: req.file.size,
        },
        shipping: true,
      });

      const savedProduct = await newProduct.save();
      res.json(savedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  findProductById: async (req, res, next, id) => {
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }
      req.product = product;
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  readProduct: async (req, res) => {
    try {
      // const photoDirectory = path.join("images");
      const product = req.product;
      res.send(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
