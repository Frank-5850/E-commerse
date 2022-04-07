const Category = require("../models/catergory");

module.exports = {
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
};
