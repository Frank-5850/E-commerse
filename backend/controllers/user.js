const User = require("../models/user");

module.exports = {
  findUserById: async (req, res, next, id) => {
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
