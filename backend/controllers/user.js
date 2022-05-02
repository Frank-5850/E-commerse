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
  updateUserPassword: async (req, res) => {
    try {
      const { oldPassword, newPassword } = req.body;
      const user = req.user;
      const isMatch = await user.comparePassword(oldPassword);
      if (!isMatch) {
        return res.status(401).json({ msg: "Incorrect password" });
      }
      user.password = newPassword;
      await user.save();
      res.json({ msg: "Password updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
