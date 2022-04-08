const Category = require("../models/catergory");

module.exports = {
  findCategoryById: async (req, res, next, id) => {
    try {
      const category = await Category.findById(id);
      if (!category) {
        return res.status(404).json({ msg: "Category not found" });
      }
      req.category = category;
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ msg: "All fields are required" });
      }
      const newCategory = new Category({
        name,
      });
      const savedCategory = await newCategory.save();
      res.json(savedCategory);
    } catch (error) {
      res.status(500).json({ error: err.message });
    }
  },

  readCategory: async (req, res) => {
    try {
      const category = req.category;
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
